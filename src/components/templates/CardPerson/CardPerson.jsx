import React from "react";

import { Stack } from "../../molecules/Stack/Stack";

import style from "./CardPerson.module.css";

export function CardPerson({ cover, avatar, name, office, stacks }) {
  console.log(stacks)
  return (
    <div className={style.card}>
      <img src={cover} alt="Cover" />
      <img className={style.avatar} src={avatar} alt="Avatar" />
      <p className={style.p1}>{name}</p>
      <p className={style.p2}>{office}</p>
      <div className={style.stack}>

        {console.log(stacks)}{
        stacks.map((stack) => {
          return <Stack key={stack} name={stack.Tec} color={stack.color} />;
        })}
      </div>
    </div>
  );
}
