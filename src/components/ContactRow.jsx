import React from "react";
import { useState } from "react";

export default function ContactRow({ contacts }) {
  return (
    {contacts.map((contact) => {
        return
   (<tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>);
    }
  );
}
