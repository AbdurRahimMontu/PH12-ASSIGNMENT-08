import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import Product from '../Components/Product';



const Apps = () => {
    const {products} = useProducts()
    const [search, setSearch] = useState('');
  
    const term = search.trim().toLocaleLowerCase()
    const searchProduct = term? products.filter(product=> product.title.toLocaleLowerCase().includes(term)) : products
  
      



    return (
        <div className='w-7xl mx-auto'>
            <div className='text-center pt-5'>
                <h3 className='text-3xl font-bold'>Our Applications</h3>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <h3>Apps Found ({searchProduct.length})</h3>
              <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={ e => setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
            </div>
          <div>
             <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
               {
              searchProduct.map(product => (
                
                   <Product  key={product.id} product={product}></Product>
                )
                 )
               }
            </div>
       
   </div>
        </div>
    );
};

export default Apps;