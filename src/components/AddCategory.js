import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  
    const [inputValue, setInputValue] = useState("Hola mundo")
   
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
        
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategories(cats => [inputValue]);
       setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleInputChange} value={inputValue} />
        </form>
    )
}
AddCategory.propTypes ={
    
    setCategories: PropTypes.func.isRequired
}

