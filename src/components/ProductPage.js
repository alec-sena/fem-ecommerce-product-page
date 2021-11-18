import { useState } from 'react';
import useToggle from '../hooks/useToggle.js';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Carousel from './Carousel';
import ProductPanel from './ProductPanel';
import products from '../data/products.js';

function ProductPage() {

    const [menuIsOpen, toggleMenuIsOpen] = useToggle();
    const [cart, setCart] = useState([]);
  
    return (
        <>
            <Navbar toggleMenuIsOpen={toggleMenuIsOpen} />
            {menuIsOpen && <MobileMenu toggleMenuIsOpen={toggleMenuIsOpen} />}
            <div>
                <Carousel />
                <ProductPanel product={products.fallLimitedEditionSneakers} cart={cart} setCart={setCart} />
            </div>
        </>
  );
}

export default ProductPage;
