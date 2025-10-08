import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {


const {title, image, ratingAvg, downloads, id} = product;

    return (
        <Link to={`/apps/${id}`}>
        
            <div  className="card bg-base-100  shadow-sm p-5 cursor-pointer hover:scale-105 transition ease-in-out">
  <figure>
    <img
      src={image}  className='w-full' />
  </figure>
   <h2 className="text-xl font-semibold  py-2">{title}</h2>

    <div className="flex justify-between text-xl font-semibold ">
      <p className="btn btn-outline">{downloads}</p>
      <p className="btn btn-outline">{ratingAvg}</p>
    </div>

</div>
        
        </Link>

    );
};

export default Product;