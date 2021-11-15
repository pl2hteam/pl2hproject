import React, { useState } from 'react'
import Dates from '../src/components/Dates'




function Main() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <div>
<Dates/>
  </div>
  )
}

export default Main;