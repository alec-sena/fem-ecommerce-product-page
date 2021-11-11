import { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

function ProductPage() {

    const [menuIsOpen, setMenuIsOpen] = useState(true); //true for testing purposes
  
    return (
        <>
            <Navbar />
            {menuIsOpen && <MobileMenu />}
        </>
  );
}

export default ProductPage;
