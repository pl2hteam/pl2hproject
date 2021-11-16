import React, { useState } from 'react'
import Calendar from '../../../Common/calender/Calendar'



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
<Calendar/>
  </div>
  )
}

export default Main;