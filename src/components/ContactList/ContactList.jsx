import { getFilter } from 'redux/filterSlice';
import { Contact } from 'components';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';


export const ContactList = () => {
    const filter = useSelector(getFilter)
    const contacts = useSelector(state => getContacts(state).filter(contact => contact.name.includes(filter)))

    return (
        <List>
            {contacts.map(({id, name, phone})=> (
                <Contact key={id} id={id} name={name} phone={phone}/>
            ))}
        </List>
    )
}