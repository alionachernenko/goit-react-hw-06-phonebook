import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onInputHandler }) => {
    return (
        <Input>
            <label htmlFor='filterInput'>Find contact by name</label>
            <input id='filterInput' type='text' name='filter' value={value} onChange={onInputHandler}/>
        </Input>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onInputHandler: PropTypes.func.isRequired
}