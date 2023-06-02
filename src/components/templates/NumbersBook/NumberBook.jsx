import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

// Icons
import plusIcon from '../../../assets/plus.svg'
import trashIcon from '../../../assets/trash.svg'
import pencilIcon from '../../../assets/pencil.svg'

// Styles
import style from "./NumberBook.module.css";

// Components
import { LetterBlock } from "../../molecules/Letter/Letter";
import { UniqueContact } from "../../molecules/Contact/Contact";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { IconButton } from "../../molecules/IconButton/IconButton";
import { deleteContact, getAllContacts, addUpdateContact } from "../../../services/Contacts";
import { ModalForm } from "../../molecules/ModalForm/Modal";
import { toastInfo } from "../../molecules/Toast/Toast";
import { randomUser } from "../../../config/api";

const NumberBook = ({ contatos, letras }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts([...contatos]);
  }, [contatos]);

  const selectContact = (id) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, selected: true };
      } else {
        return { ...contact, selected: false };
      }
    });

    setContacts(updatedContacts)
  }

  const handleSearch = (value) => {
    if (value === '') {
      setContacts(contatos);
      return;
    }
    const filteredContacts = contatos.filter((contact) => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    setContacts(filteredContacts);
  }

  const handleDelete = () => {
    try {
      const deletedContact = contacts.filter(contact => contact.selected);

      deleteContact(deletedContact[0].id).then(async () => {
        setContacts(await getAllContacts());
      })
    } catch (error) {
      toastInfo('Selecione um contato para excluir')
    }
  }

  const handleAdd = () => {
    setModalData({});
    setModalShow(true);
  }

  const handleEdit = () => {
    const selectedContacts = contacts.filter(contact => contact.selected);

    if (selectedContacts.length === 0) {
      toastInfo('Selecione um contato para editar')
      return;
    }

    setModalData(selectedContacts[0]);
    setModalShow(true);
  }

  const handleRandomModal = () => {
    randomUser.get('/?nat=BR').then(response => {
      const randomUser = response.data.results[0];
      setModalData({
        name: `${randomUser.name.first} ${randomUser.name.last}`,
        number: randomUser.cell,
        imgUrl: randomUser.picture.thumbnail
      });
      setModalShow(true);
    })
  }

  return (
    <div>
      <ToastContainer />
      <ModalForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        handleRandom={() => handleRandomModal()}
        handleSave={(dados) => {
          
        }}
      />

      <header className={style.headerContainer} >

        <div className={style.header}>
          <h1 style={{ color: "#e1e1e6" }}>Meus Contatos</h1>

          <div className={style.iconsContainer}>
            <IconButton icon={plusIcon} style={{ width: '15px', height: '15px' }}
              onClick={() => { handleAdd() }}
            />
            <IconButton icon={pencilIcon} style={{ width: '19.5px', height: '19.5px' }}
              onClick={() => { handleEdit(contacts) }}
            />
            <IconButton icon={trashIcon} style={{ width: '18px', height: '21px' }}
              onClick={() => { handleDelete() }}
            />
          </div>
        </div>

        <SearchBar
          placeholder="Busque por nome ou por dados de contato..."
          callBack={(value) => handleSearch(value)}
        />
      </header>

      <main className={style.main} >
        {

          letras.map((letter) => (
            contacts.map((contact) => {
              if (letter.letter == contact.name[0].toLowerCase()) {
                return (
                  <button key={contact.id} onClick={() => selectContact(contact.id)}>
                    <div
                      style={{
                        marginTop: letter.first ? '56px' : '32px',
                        border: contact.selected ? '2px solid white' : '',
                        background: contact.selected ? '#262435' : '',
                      }}
                      className={style.uniqueContact}>
                      <LetterBlock letter={letter} />
                      <UniqueContact contact={contact} />
                      {/* Funciona, eu sei que ta feio, e que tem arquivos com mais de uma responsabilidade, ta uma merda mas funciona */}
                    </div>
                  </button>
                )
              }
            })
          ))

        }
        {
          // Somente para modo desenvolvedor
          letras.map((letter) => {
            letter.first = true
          })
        }
      </main>
    </div>
  )
}

export {
  NumberBook
}