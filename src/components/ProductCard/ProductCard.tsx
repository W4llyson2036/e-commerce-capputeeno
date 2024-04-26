// Typescript
import { convertToPrice } from '../../utils/fixPrice';

// CSS
import './productCard.css';

export type Product = {
    id: string;
    name: string;
    description?: string;
    image_url: string;
    category?: string;
    price_in_cents: number;
    sales?: number;
    created_at?: string;
};

export function ProductCard(props: Product) {
    return (
        <div className='product'>
            <img src={props.image_url} alt="" className='product-img'/>
            
            <div className='product-info'>
                <h2 className='product-title'>{props.name}</h2>
                <hr className='product-line-style' />
                <p className='product-price'>{convertToPrice(props.price_in_cents)}</p>
            </div>
        </div>
    );
}