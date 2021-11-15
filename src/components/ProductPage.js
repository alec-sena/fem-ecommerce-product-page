import { useState } from 'react';
import useToggle from '../hooks/useToggle.js';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Carousel from './Carousel';

function ProductPage() {

    const [menuIsOpen, toggleMenuIsOpen] = useToggle();
  
    return (
        <>
            <Navbar toggleMenuIsOpen={toggleMenuIsOpen} />
            {menuIsOpen && <MobileMenu toggleMenuIsOpen={toggleMenuIsOpen} />}
            <Carousel />
        </>
  );
}

export default ProductPage;
