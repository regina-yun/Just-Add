import React, {useState} from 'react';


function AddValue(props) {
  const [newValue, setNewValue] = useState({
    value1: 0,
    value2: 0
  });

  function handleOnChange(event) {
    let updatedValue = {...newValue};
    updatedValue[event.target.name] = parseInt(event.target.value);
    console.log(event.target.value);
  
    setNewValue(updatedValue);
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    props.add(newValue.value1, newValue.value2);
    event.target.reset();
  }

  return(
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type='number' min='0' step='0.1' placeholder='e.g. 1' name='value1' onChange={handleOnChange} required/>
        <label>{props.operation}</label> 
        <input type='number' min='0' step='0.1' placeholder='e.g. 2' name='value2' onChange={handleOnChange} required/>
        <button >Show Answer</button>
      </form>  
    </div>  
  )
}

export default AddValue;