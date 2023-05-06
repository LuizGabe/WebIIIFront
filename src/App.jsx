import style from "./App.module.css";
import Person from "./data/person"

import { CardPerson } from "./components/CardPerson/CardPerson";
import { NumberBook } from "./components/NumbersBook/NumberBook"

export function App() {

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
        <NumberBook/>
      </div>
    </>
  );
}
