import style from "./App.module.css";
import Person from "./data/person"

import { CardPerson } from "./components/templates/CardPerson/CardPerson";
import { NumberBook } from "./components/templates/NumbersBook/NumberBook"

import { contatos, letras } from "../src/data/numberBookDados.js";
import { useEffect, useState } from "react";
import { getAllUsers } from "./services/Users";
import { getAllContacts } from "./services/Contacts";

export function App() {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect( async () => {
    const contatos = await getAllContacts();
    const users = await getAllUsers();
    
    setContacts(contatos);
    setUsers(users);
  }, [])

  return (
    <>
      
      <div className={style.container}>
        <CardPerson
          cover={Person.file.cover}
          avatar={Person.file.avatar}
          name={Person.name}
          office={Person.office}
          stacks={Person.stacks}
        /> 
        <NumberBook
          contatos={contacts}
          letras={letras}
        />
      </div>
    </>
  );
}
