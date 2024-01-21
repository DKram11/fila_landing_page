import { filaLogo } from "../assets/images"
import { navList } from '../constant/index.js'
import Button from "./Button.jsx"

import React, { useState } from "react";
import Hamburger from 'hamburger-react';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full max-lg:p-0 max-lg:"> 
      <nav className="flex justify-between items-center max-container max-lg:flex-col max-lg:mt-28 max-lg:items-start max-lg:z-10 max-lg:">
        <a href="/" className="max-lg:absolute max-lg: max-lg:-mt- max-lg:padding-x max-lg:top-0 max-lg:mt-8">
          <img 
            src={filaLogo} 
            width={50}
            height={60}
            alt="fila"
            className="m-0 w-[80px] max-lg:mr-[40%]"
          />
        </a>
        <div className={`gap-28 flex relative show-hamburger ${isOpen ? 'max-lg:block' : 'max-lg:hidden'} `}>
          <ul 
            className='flex justify-center items-center gap-16 max-lg:flex-col max-lg:mb-10 max-lg:items-center max-lg:w-full'>         
            {navList.map((list) => 
            <li key={list.label}>
              <a href={list.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-fila-red 
                max-lg:text-white ease-in-out max-lg:text-xl"
              >
              {list.label}
              </a>
            </li>
            )}
          </ul>
          <div className="flex text-lg font-montserrat gap-4 wide:mr-24  max-lg:flex max-lg:right-0 font-medium max-lg:justify-center max-lg:mt-20">        
              <Button 
              label='Login'
              href='/'
              />
              <Button 
                label='Signup'
                backgroundColor='transparent'
                href='/'
              />
          </div>
        </div>
        <div className="lg:hidden max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:z-10 max-lg:mr-10 max-lg:mt-6">
        <Hamburger toggled={isOpen} toggle={handleToggle}/>
        </div>     
      </nav>
    </header>
  )
}

export default Navbar