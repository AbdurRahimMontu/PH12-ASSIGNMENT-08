import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';



const ProductDetails = () => {
   const {id } =useParams()
   const {products, loading, error} = useProducts()
  const product = products.find(p => String(p.id) === id)
  if(loading) return <p>Loading....</p>
  const {image, title, downloads, ratingAvg, companyName, reviews,description} = product;
  console.log(product);
    return (
       <div className='w-7xl mx-auto py-5'>
          <div className='flex gap-10 shadow-2xl'>
        
                <figure>
                    <img src={image} alt="" />
                </figure>
            
            <div className='py-5'>
                <div>
                    <h3>{title}</h3>
                    <p>{companyName}</p>
                </div>
                <hr />
                <div className='flex gap-10'>
                   <div>
                    <img src="" alt="" />
                    <p>Downloads</p>
                    <p>{downloads}</p>
                   </div>
                   <div>
                     <img src="" alt="" />
                    <p>Average Ratings</p>
                    <p>{ratingAvg}</p>
                   </div>
                   <div>
                     <img src="" alt="" />
                    <p>Total Reviews</p>
                    <p>{reviews}</p>
                   </div>
                </div>
                <div >
                    <button className='btn bg-green-800 text-white font-bold'>Instal Now</button>
                </div>

            </div>
          </div>
          <hr className='my-10' />
          <div className='border border-dashed'>
               <h3 className='text-2xl font-semibold'>Description</h3>
               <h2 className='text-justify'>{description}</h2>
          </div>
       </div>
    );
};

export default ProductDetails;


// <div>
//             <div  className="card bg-base-100 w-3/4 mx-auto mt-5 shadow-sm p-5 cursor-pointer hover:scale-100 transition ease-in-out">
//   <figure className=' h-[300px]'>
//     <img
//       src={image}  className='w-full' />
//   </figure>
//    <h2 className="text-xl font-semibold  py-2">{title}</h2>

//     <div className="flex justify-between text-xl font-semibold ">
//       <p className="btn btn-outline">{downloads}</p>
//       <p className="btn btn-outline">{ratingAvg}</p>
//     </div>

// </div>
// </div>

// companyName: "DevGenius Inc."
// description: "CodeFlow IDE revolutionizes software development with a powerful, fully cloud-based Integrated Development Environment. It provides a full coding environment accessible from any device, eliminating the need for complex local setups. Developers benefit from real-time collaborative editing, live code sharing, and integrated version control, making team development smoother than ever. The platform supports over 20 popular programming languages and includes advanced debugging tools, intelligent code completion, and built-in testing frameworks. Furthermore, CodeFlow integrates seamlessly with popular CI/CD pipelines, offering one-click deployment to major cloud providers. Whether you are a solo freelancer or part of a large enterprise team, CodeFlow IDE accelerates your development cycle from concept to production, allowing you to focus purely on innovation and clean code."
// downloads: 1200000
// id: 2
// image: "https://picsum.photos/200?random=2"
// ratingAvg: 4.8
// ratings: 
// Array(5)
// 0: {name: '1 star', count: 10}
// 1: {name: '2 star', count: 20}
// 2: {name: '3 star', count: 100}
// 3: {name: '4 star', count: 500}
// 4: {name: '5 star', count: 900}
// length: 5
// reviews: 4500
// size: 180
// title: "CodeFlow IDE"