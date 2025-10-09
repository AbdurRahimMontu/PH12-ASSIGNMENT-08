
import Banner from '../Components/Banner';
import Count from '../Components/Count';
import { Link,  } from 'react-router';
import Product from '../Components/Product';
import useProducts from '../Hooks/useProducts';


const Home = () => {

 const {products} = useProducts()

 const trendingApps = products.slice(0, 8)



    return (
        <div>

            <Banner></Banner>
            <Count></Count>
   <div className='w-7xl mx-auto'>
             <div className='text-center pt-5'>
                <h2 className='text-4xl font-semibold pb-2'>Trending Apps </h2>
                <p className='opacity-50 font-semibold'>Explore All Trending Apps on the Market developed by US</p>
             </div>
             <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
               {
               trendingApps.map(product => (
                   <Product  key={product.id} product={product}></Product>
                )
                 )
               }
            </div>
            <div className='flex justify-center pb-5'>
                <Link to={'/apps'} className='btn btn-outline ' >See All Product</Link>
            </div>
   </div>
  
        </div>
    );
};

export default Home;