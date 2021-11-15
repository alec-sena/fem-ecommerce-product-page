import { useState } from 'react';
import useToggle from '../hooks/useToggle.js';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

function ProductPage() {

    const [menuIsOpen, toggleMenuIsOpen] = useToggle(true); //true for testing purposes
  
    return (
        <>
            <Navbar setMenuIsOpen={toggleMenuIsOpen} />
            {menuIsOpen && <MobileMenu />}
        </>
  );
}

export default ProductPage;
