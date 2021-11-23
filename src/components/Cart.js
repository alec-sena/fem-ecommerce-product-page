import CartCard from './CartCard';
import '../scss/Cart.scss';

function Cart(props){
    const items = Object.keys(props.cart);

    return(
        <div className="Cart">
            <h2>Cart</h2>
            <hr />
            <div className="Cart__CardsContainer">
            {items.length === 0 ? 
                <p id="cart-empty">Your cart is empty</p>
            :
                items.map((item, idx) => <CartCard key={idx} item={props.cart[item]} />)
            }
            </div> 
        </div>
    )
}

export default Cart;

// name={props.cart[item].name} quantity={props.cart[item].quantity}