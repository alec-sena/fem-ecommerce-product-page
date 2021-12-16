import { useState } from 'react';
import useToggle from '../hooks/useToggle.js';
import useViewport from '../hooks/useViewport.js';
import Navbar from './Navbar';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import Carousel from './Carousel';
import ProductGallery from './ProductGallery';
import ProductPanel from './ProductPanel';
import products from '../data/products.js';
import '../scss/ProductPage.scss';

function ProductPage() {

    const [menuIsOpen, toggleMenuIsOpen] = useToggle();
    const [cartIsOpen, toggleCartIsOpen] = useToggle();
    const [cart, setCart] = useState({});

    const { width } = useViewport();
    const breakpoint = 1440;

    function countItemsInCart(){
        let counter = 0;
        for(let key in cart){
            counter += cart[key].quantity;
        }
        return counter;
    }
  
    return (
        <div className="ProductPage">
            <Navbar toggleMenuIsOpen={toggleMenuIsOpen} countItemsInCart={countItemsInCart} toggleCartIsOpen={toggleCartIsOpen} />
            {cartIsOpen && <Cart cart={cart} products={products} setCart={setCart} />}
            {menuIsOpen && <MobileMenu toggleMenuIsOpen={toggleMenuIsOpen} />}
            <div className="ProductPage__Container">
                <div className="ProductPage__Subcontainer">
                    {width < breakpoint ? 
                        <Carousel images={products.fallLimitedEditionSneakers.images} thumbnails={products.fallLimitedEditionSneakers.thumbnails} />
                    :
                        <ProductGallery images={products.fallLimitedEditionSneakers.images} thumbnails={products.fallLimitedEditionSneakers.thumbnails} />
                    }
                    <ProductPanel product={products.fallLimitedEditionSneakers} cart={cart} setCart={setCart} />
                </div>
            </div>
        </div>
  );
}

export default ProductPage;