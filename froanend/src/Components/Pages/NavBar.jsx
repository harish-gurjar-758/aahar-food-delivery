import React from 'react'
import { IoFastFood } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h3 className='logo'><IoFastFood /> Ahar </h3>
      <ul>
        <h5>
          <li>Home</li>
          <li>Foods</li>
          <li>Order</li>
          <li>Profile</li>
          <li>Login</li>
        </h5>
      </ul>
    </div>
  )
}
