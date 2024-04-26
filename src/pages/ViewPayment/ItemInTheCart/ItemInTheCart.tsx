// CSS
import './itemInTheCart.css';

export function ItemInTheCart(): JSX.Element {
    return (
         <div className='card-items-on-the-cart'>
            <img src="https://dictionary.cambridge.org/pt/images/thumb/cup_noun_002_09489.jpg?version=5.0.390" alt="" />

            <div className='card-side-right'>
                <div>
                    <div className='box1'>
                        <h2 className='title'>Caneca de cerâmica rústica</h2>

                        <svg className="icon icon-delete">
                            <use xlinkHref="/public/icons.svg#icon-delete-trash"></use>
                        </svg>
                    </div>

                    <p className='text-descrition'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
                </div>

                <div className='box2'>
                    <select name="quantity" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="2">10+</option>
                    </select>

                    <p className='total-purchase-price'>R$40,00</p>
                </div>
            </div>
        </div> 
    );
}