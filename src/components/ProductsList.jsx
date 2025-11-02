import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
    const { products } = useLoaderData();
    return (
        <div className='pt-12 grid gap-4'>
            {products.map((product) => {
                const { title, price, image, company } = product.attributes;
                const dollarsAmount = formatPrice(price);
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className='p-8 flex flex-col sm:flex-row rounded-lg shadow-xl hover:shadow-2xl duration-300 group'
                    >
                        <img
                            src={image}
                            alt={title}
                            className='h-24 w-24 rounded-lg h-64 md:h-48 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
                        />
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>{title}</h3>
                            <h4 className='capitalize text-md text-neutral-content'>
                                {company}
                            </h4>
                        </div>
                        <p className='font-medium ml-0 sm:ml-auto text-lg'>
                            {dollarsAmount}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}
export default ProductsList;