import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch()

    return (
        <Input>
            <label htmlFor='filterInput'>Find contact by name</label>
            <input id='filterInput' type='text' name='filter' onChange={(e) =>{ 
                dispatch(changeFilter(e.target.value.trim()))}}/>
        </Input>
    )
}
