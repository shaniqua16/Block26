import React from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";
import SelectedContact from "./SelectedContact";



const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];


export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(dummyContacts);
  
  useEffect(() => {
    async function fetchContacts() {
      try {
        const Response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await Response.json();
        setContacts(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);
  

  async function handleContactClick(contactId) {
    
    try {
      const Response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
      );
      const result = await Response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
        })}
      </tbody>
    </table>
  );
}

