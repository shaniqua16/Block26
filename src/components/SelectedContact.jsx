import React, { useEffect, useState } from 'react'

// export default function SelectedContact() {
//   return (
//     <div>SelectedContact
//     </div>
//   )
// }

 function SelectedContact({ selectedContactId }) {
  // Fetch and display the selected contact based on contactId
  
const [contact, setContact] = useState({});
    async function getApi() {
      try {
        const Response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await Response.json();
        console.log(result);
        setContact(result);
      } catch (error) {
        
      }
    }
    useEffect (()=> {
      getApi();
    },[]);

    return (
      <div>
        {/* Display the selected contact's details */}
        <h2>Selected Contact</h2>
        <p>Name: {contact.name}</p>  
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>  
  
        
      </div>
    );
    
  
}

export default SelectedContact;
