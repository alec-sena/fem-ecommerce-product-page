import CartCard from './CartCard';
import '../scss/Cart.scss';

function Cart(props){
    const items = Object.keys(props.cart);
    const cards = items.filter(item => props.cart[item].quantity > 0);

    return(
        <div className="Cart">
            <h2>Cart</h2>
            <hr />
            <div className="Cart__CardsContainer">
            {cards.length === 0 ? 
                <p id="cart-empty">Your cart is empty</p>
            :
                cards.map((item, idx) => <CartCard key={idx} item={props.cart[item]} setCart={props.setCart} />)
            }
            </div>
            <div className="Cart__ButtonContainer">
                <button>Checkout</button> 
            </div>
        </div>
    )
}

export default Cart;

// name={props.cart[item].name} quantity={props.cart[item].quantity}