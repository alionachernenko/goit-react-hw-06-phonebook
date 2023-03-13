import { Form, Input, Add } from './ContactForm.styled';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactForm = ({onHandleSubmit, contacts}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const onInput = (e) => {
    const { value} = e.target

    if (e.target.name === 'name') setName(value)
    else if(e.target.name === 'phone') setPhone(value)
  }

  const onContactFormSubmit = (e) => {
   
    e.preventDefault()
    if (contacts.some((contact) => contact.name === name)) { 
      alert(`${name} is already in contacts`)
      return
    }

    onHandleSubmit({ name, phone, id: nanoid() })
    
    setName('')
    setPhone('')
  }
        return(
            <Form onSubmit={onContactFormSubmit}>
              <label htmlFor="nameInput">Name</label>
              <Input
                value={name}
                onChange={onInput}
                id="nameInput"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor="numberInput">Number</label>
                  <Input
                  onChange={onInput}
                  id='numberInput'
                  value={phone}
                  type="tel"
                  name="phone"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <Add type='submit'>Add contact</Add>
            </Form>
        )
      }

ContactForm.propTypes = {
    onHandleSubmit: PropTypes.func,
  }