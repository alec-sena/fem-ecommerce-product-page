import CartCard from './CartCard';
import '../scss/Cart.scss';

function Cart(props){
    return(
        <div className="Cart">
            <div>
                <h2>Cart</h2>
            </div>
            <div>
                {Object.keys(props.cart).length === 0 ? 
                <p>Your cart is empty</p> 
                :
                <div>{Array.from(props.cart).map((item, idx) => <CartCard key={idx} item={item} />)}</div>
                }
            </div>
        </div>
    )
}

export default Cart;

// figure out why CartCards aren't rendering. Conitinal works. Something about the loop is wonky