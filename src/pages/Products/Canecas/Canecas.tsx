import { productsData } from '../../../store/dataProducts';

// Lib
import { Link } from 'react-router-dom';

// Component
import { ProductCard } from '../../../components/ProductCard/ProductCard';

export function Canecas() {
    const element = productsData.map((item, key) => {
        const firstName = item.name.split(' ')[0];

        if (firstName === 'Caneca') {
            return (
                <Link to={item.id} key={key}>
                    <ProductCard
                        id={item.id}
                        name={item.name} 
                        image_url={item.image_url} 
                        price_in_cents={item.price_in_cents}
                    />
                </Link>
            )
        }
    })

    return (
        <main className='grid-products auto-margin-padding'>
            {element}
        </main>   
    );
}