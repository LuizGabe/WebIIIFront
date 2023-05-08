import React from 'react'

import style from './Letter.module.css'

const LetterBlock = ({ letter }) => {
  console.log(letter)

  return (
    <div style={letter.first ? { backgroundColor: letter.color } : { backgroundColor: "transparent" }} className={style.letter}>
      <h1>{letter.first ? letter.letter : ''}</h1>
      {letter.first = false}
    </div>
  )
}

export {
  LetterBlock
}