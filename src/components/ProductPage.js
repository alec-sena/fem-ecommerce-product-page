import { useState } from 'react';
import useToggle from '../hooks/useToggle.js';
import Navbar from './Navbar';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import Carousel from './Carousel';
import ProductPanel from './ProductPanel';
import products from '../data/products.js';
// import '../scss/partials/_variables.scss';

function ProductPage() {

    const [menuIsOpen, toggleMenuIsOpen] = useToggle();
    const [cartIsOpen, toggleCartIsOpen] = useToggle();
    const [cart, setCart] = useState({});

    function countItemsInCart(){
        let counter = 0;
        for(let key in cart){
            counter += cart[key].quantity;
        }
        return counter;
    }
  
    return (
        <>
            <Navbar toggleMenuIsOpen={toggleMenuIsOpen} countItemsInCart={countItemsInCart} toggleCartIsOpen={toggleCartIsOpen} />
            {cartIsOpen && <Cart cart={cart} products={products} />}
            {menuIsOpen && <MobileMenu toggleMenuIsOpen={toggleMenuIsOpen} />}
            <div>
                <Carousel images={products.fallLimitedEditionSneakers.images} thumbnails={products.fallLimitedEditionSneakers.thumbnails} />
                <ProductPanel product={products.fallLimitedEditionSneakers} cart={cart} setCart={setCart} />
            </div>
        </>
  );
}

export default ProductPage;
