import style from "./App.module.css";
import Person from "./data/person"

import { CardPerson } from "./components/templates/CardPerson/CardPerson";
import { NumberBook } from "./components/templates/NumbersBook/NumberBook"

import { contatos, letras } from "../src/data/numberBookDados.js";
import { useEffect, useState } from "react";
import { searchUser } from "./services/Users";
import { getAllContacts } from "./services/Contacts";

export function App() {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect( async () => {
    const contatos = await getAllContacts();

    //TODO: Colocar uma pequena tela de login, somente para selecionar o usuário
    const user = (await searchUser('Luiz Gabriel'))[0]
    console.log(user.stacks)

    setContacts(contatos);
    setUser(user);
  }, [])

  return (
    <>
      
      <div className={style.container}>
        {console.log(user)}
        <CardPerson
          cover={user.coverImg}
          avatar={user.avatarImg}
          name={user.name}
          office={user.office}
          stacks={[]}
        /> 
        <NumberBook
          contatos={contacts}
          letras={letras}
        />
      </div>
    </>
  );
}
