import CartCard from './CartCard';
import '../scss/Cart.scss';

function Cart(props){
    const items = Object.keys(props.cart);

    return(
        <div className="Cart">
            <h2>Cart</h2>
            <div>
            {items.length === 0 ? 
                <p>Your cart is empty</p>
            :
                items.map((item, idx) => <CartCard key={idx} name={props.cart[item].name} quantity={props.cart[item].quantity} />)
            }
            </div> 
           
{/*             <div>
                
                
            </div> */}
        </div>
    )
}

export default Cart;

// figure out why CartCards aren't rendering. Conitinal works. Something about the loop is wonky