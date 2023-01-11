import React from "react";

const Form = props => {
    const {handleChange,handleSubmit,newMember} = props ;
    return (
        <form onSubmit={handleSubmit} >
            <label>
                Name : <input autoFocus type="text" name="name" value={newMember.name} onChange={handleChange} />
            </label>
            <label>
                Mail : <input type="text" name="mail" value={newMember.email} onChange={handleChange} />
            </label>
            <label>
                Role : <input type="text" name="role" value={newMember.role} onChange={handleChange} />
            </label>
            <input type="submit" name="Submit" />   
        </form>
    )
}

export default Form;