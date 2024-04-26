import { productsData } from '../../../store/dataProducts';

// Lib
import { Link } from 'react-router-dom';

// Component
import { ProductCard } from '../../../components/ProductCard/ProductCard';

// CSS
import '../TodosOsProdutos/todosOsProdutos.css';

export function TodosOsProdutos(): JSX.Element {
    let element = productsData.map((item, key) => (
        <Link to={item.id} key={key}>
            <ProductCard 
                id={item.id}
                name={item.name}
                image_url={item.image_url}
                price_in_cents={item.price_in_cents}
            /> 
        </Link>
    ))

    return (
       <main className='grid-products auto-margin-padding'>
            {element}
       </main>   
    );
}