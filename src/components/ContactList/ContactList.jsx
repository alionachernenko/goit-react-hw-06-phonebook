import PropTypes from 'prop-types';

import { Contact } from 'components';
import { List } from './ContactList.styled';


export const ContactList = ({contactsList, removeContact}) => {
    return (
        <List>
            {contactsList.map(({id, name, phone})=> (
                <Contact key={id} id={id} name={name} phone={phone} onRemove={removeContact}/>
            ))}
        </List>
    )
}


ContactList.propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    })),
    removeContact: PropTypes.func
}