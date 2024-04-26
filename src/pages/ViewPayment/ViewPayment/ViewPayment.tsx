// Lib
import { Link } from 'react-router-dom';

// CSS
import './viewPayment.css';

import { OrderSummary } from '../OrderSummary/OrderSummary';
import { ItemInTheCart } from '../ItemInTheCart/ItemInTheCart';

export function ViewPayment() {
    return (
        <div className="payment auto-margin-padding">
            <Link to='/'>
                <svg className="icon icon-btn-back-home">
                    <use xlinkHref="/public/icons.svg#btn-back"></use>
                </svg>
            </Link>
    
            <div className='payment-main'>
                <div className='box1'>
                    <h2 className='payment-text-your-cart'>Seu carrinho</h2>

                    <p className='payment-total-text'>
                        Total (0 produtos)<span> R$000,00</span>
                    </p>
                    
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                    <ItemInTheCart />
                </div>
                
                <OrderSummary />
            </div>
        </div>
    );
}