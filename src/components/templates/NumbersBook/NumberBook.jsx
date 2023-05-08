import React from "react";

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

// Dados
import { contatos, letras } from "../../../data/numberBookDados.js";

const NumberBook = () => {
  return (
    <div>
      <header className={style.headerContainer} >

        <div className={style.header}>
          <h1>Meus Contatos</h1>

          <div className={style.iconsContainer}>
            <IconButton icon={plusIcon} style={{ width: '15px', height: '15px'}}
              onClick={() => { console.log('Plus') }}
            />
            <IconButton icon={pencilIcon} style={ { width: '19.5px', height: '19.5px'}}
              onClick={() => { console.log('Edit') }}
            />
            <IconButton icon={trashIcon} style={ { width: '18px', height: '21px'}} 
              onClick={() => { console.log('Delete') }}
            />
          </div>
        </div>

        <SearchBar 
          placeholder="Busque por nome ou por dados de contato..."
          callBack={(value) => console.log(value) }
        />
      </header>

      <main className={style.main}>
        {
          letras.map((letter) => {
            return contatos.map((contact) => {
              if (letter.letter == contact.name[0].toLowerCase()) {
                return (
                  <div style={letter.first ? { marginTop: "56px" } : { marginTop: "32px" }} className={style.uniqueContact}>
                    <LetterBlock letter={letter} />
                    <UniqueContact contact={contact} />
                    {/* Funciona, eu sei que ta feio, e que tem arquivos com mais de uma responsabilidade, ta uma merda mas funciona */}
                  </div>
                )
              }
            })
          })
          
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