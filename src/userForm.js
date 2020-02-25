import React, { useContext } from 'react';
import { UserContext } from './userContext';

const Form = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label"> Prénom </label>
        <input
          className="input"
          onChange={e => user.setName(e.target.value)}
        />
      </div>
      <div className="input-item">
        <label className="label">Nom</label>
        <input
          className="input"
          onChange={e => user.setSurname(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
