import React from "react";

import style from "./Contact.module.css"

const UniqueContact = ({ contact }) => {

  return (
    <div className={style.contacts}>
      <div className={style.singleContact}>
        <img src={contact.imgUrl} alt={'Imagem de ' + contact.name} />
        <div className={style.infoContact}>
          <p>{contact.name}</p>
          <h6>{contact.number}</h6>
        </div>
      </div>
    </div>
  )
}

export {
  UniqueContact
}