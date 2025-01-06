import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name: </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleInputChange}
        placeholder="Your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}    

export default NameInput;
