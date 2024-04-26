// CSS
import './OrderSummary.css';

export function OrderSummary() {
    return (
        <div className='order-summary'>
            <div className='box1'>
                <h1 className="order-summary-title">RESUMO DO PEDIDO</h1>

                <ul className='order-summary-primary-list'>
                    <li><p>Subtotal de produtos</p> <p>R$ 161,00</p></li>    
                    <li><p>Entrega</p> <p>R$ 40,00</p></li>    
                    <hr />
                    <li className='total'><p>Total</p> <p>R$ 201,00</p></li>    

                    <button className='btn-finish-shopping'>Finalizar a compra</button>
                </ul>                
            </div>

            <div className='box2'>
                <ul className='order-summary-secondary-list'>
                    <li>AJUDA</li>
                    <li>REEMBOLSOS</li>
                    <li>ENTREGAS E FRETE</li>
                    <li>TROCAS E DEVOLUÇÕES</li>
                </ul>
            </div>
        </div>
    );
}
