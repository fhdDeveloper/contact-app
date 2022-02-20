import React, {useState} from 'react';

const AddContact = ({addContactHandler}) => {
    const [contact,setContact]=useState({name:"",email:""});
    const changeHandler =(e)=>{
        setContact({ [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form onSubmit={addContactHandler}>
                <div className="formControl">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={changeHandler}/>
                </div>
                <div className="formControl">
                    <label>Name</label>
                    <input type="text"
                           name="email"
                           value={contact.email}
                           onChange={changeHandler}/>
                </div>
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;