import PropTypes from 'prop-types';
import {RiContactsFill} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

import { Info, Data, Delete} from './Contact.styled';

export const Contact = ({id, name, phone}) => {
    const dispatch = useDispatch()

    return(
        <Info>
            <Data><RiContactsFill/>{name}: {phone}</Data>
            <Delete onClick={() => dispatch(removeContact(id))}>Delete</Delete>
        </Info>
    )
}


Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}