import React from 'react';
import { Link } from 'react-router';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';

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
      <button className="btn btn-outline text-green-700 font-bold"><img src={download} alt="" width={20}/>{downloads}</button>
      <button className="btn btn-outline text-yellow-600 font-bold"><img src={rating} alt="" width={20}/>{ratingAvg}</button>
    
    </div>

</div>
        
        </Link>

    );
};

export default Product;