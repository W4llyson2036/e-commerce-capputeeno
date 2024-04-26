import { productsData } from '../../store/dataProducts';

//Typescript
import { convertToPrice } from '../../utils/fixPrice';

// Lib
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './ViewProduct.css';

//Component
import { Product } from '../../components/ProductCard/ProductCard';

export function ViewProduct() {
    const PARAMS = useParams();
    const NAVIGATE = useNavigate();

    const [currentProduct, setCurrentProduct] = useState<Product>();

    useEffect(()=> {
        const PRODUCT_OBJ = productsData.find(item => item.id == PARAMS.id);
        setCurrentProduct(PRODUCT_OBJ);
    }, []);

    return (
        <div className='auto-margin-padding '>
            <div>
                <button className='icon-btn-back-home' onClick={() => NAVIGATE(-1)}>
                    <svg className="icon">
                        <use xlinkHref="/public/icons.svg#btn-back"></use>
                    </svg>
                </button>
            </div>

            <div className='product-selected-opened'>
                <img src={currentProduct?.image_url} alt="" />

                <div className='product-information'>
                    <div>
                        <p className='product-fisrt-name'>
                            {currentProduct?.name.split(' ')[0]}
                        </p>
                        
                        <h2 className='product-full-name'>
                            {currentProduct?.name}
                        </h2>
                        
                        <p className='product-price'>
                            {convertToPrice(Number(currentProduct?.price_in_cents))}
                        </p>

                        <p className='product-delivery-msg'>
                            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00. 
                        </p>

                        <p className='product-description'>Descrição</p>
                        
                        <p className='product-description-text'>
                            {currentProduct?.description}
                        </p>
                    </div>  

                    <button className='btn-add-to-cart'>
                        <svg className="icon icon-shopping-bag">
                            <use xlinkHref="/public/icons.svg#shopping-bag"></use>
                        </svg>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}