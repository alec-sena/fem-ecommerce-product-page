import '../scss/CartCard.scss';

function CartCard(props){
    return(
        <div className="CartCard">
            <p>{props.name}</p>
            <p>{props.quantity}</p>
        </div>
    )
}

export default CartCard;