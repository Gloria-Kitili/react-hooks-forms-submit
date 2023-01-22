import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData , setSubmittedData] =useState ([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleLastNameChange(event){
    event.preventDefault();
    const formData = { firstName : firstName,lastName : lastName};
    const dataArray = [...submittedData , formData];
    setSubmittedData (dataArray);
    setFirstName("");
    setLastName ("");
  }
 
   const listofSubmissions = submittedData.map((data ,index) =>{
    return(
      <div key = {index}>
       {data.firstName} {data.lastname}
      </div>
    );
   })
  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {listofSubmissions}
    </div>
  );
}

export default Form;
