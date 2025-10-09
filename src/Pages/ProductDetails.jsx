import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { Bar, CartesianGrid, ComposedChart, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import useProducts from '../Hooks/useProducts';
import { ToastContainer, toast} from 'react-toastify';
import img from '../assets/App-Error.png'

const ProductDetails = () => {
  const [install, setInstall] = useState(false);
   const {id } =useParams()
   const {products, loading} = useProducts()
  const product = products.find(p => String(p.id) === id)
  if(loading) return <p>Loading....</p>
  const {image, title, downloads, ratingAvg,size, companyName, reviews,description,ratings} = product||{};



  const handleAdd =()=>{
 setInstall(true);
 toast("Productivity Installed Successfully")
    const previousData = JSON.parse(localStorage.getItem('appList'))
    let updatedList = [];
    if(previousData){
        const isDuplicate = previousData.some(p => p.id===product.id)
        if(isDuplicate) return  toast("Added Product")
     updatedList = [...previousData, product]
    }else{
        updatedList.push(product)
    }
  localStorage.setItem('appList', JSON.stringify(updatedList))
  }

  







    return (

  
  <div>
  {
    products.find(p => String(p.id) === id)?      <div className='w-7xl mx-auto pt-3 '>
          <div className='flex gap-10 shadow-2xl py-2'>
       
                <figure>
                    <img src={image} alt="" />
                </figure>
            
            <div className=''>
                <div>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className=''>{companyName}</p>
                </div>
                <hr />
                <div className='flex gap-10 py-2'>
                   <div>
                    <img className='w-8' src={download} alt="" />
                    <p>Downloads</p>
                    <p className='text-2xl font-bold'>{downloads}</p>
                   </div>
                   <div>
                     <img className='w-8' src={rating} alt="" />
                    <p>Average Ratings</p>
                    <p className='text-2xl font-bold'>{ratingAvg}</p>
                   </div>
                   <div>
                     <img className='w-8' src={review} alt="" />
                    <p>Total Reviews</p>
                    <p className='text-2xl font-bold'>{reviews}</p>
                   </div>
                </div>
                <div >
        <button  onClick={handleAdd} disabled={install} className='btn bg-green-800 text-white font-bold'> {install ? "Installed" : `Install Now (${size})`} </button>
                </div>

            </div>
          </div>
          <div>
          <div className='mt-5'>
            <h3 className='text-2xl font-semibold pb-1'>Ratings</h3>
          </div>
            <div   style={{ width: "100%", height: 300 }}>
 
   <ResponsiveContainer>
   
        <ComposedChart
        
          layout="vertical"
          width={500}
          height={300}
          data={ratings}
          margin={{
            top: 10,
            bottom: 10,
           
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed={true}   />
         
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
         
        </ComposedChart>
      </ResponsiveContainer>
    </div>

          </div>
          <hr className='my-10' />
          <div className=' p-5'>
               <h3 className='text-2xl font-semibold'>Description</h3>
               <h2 className='text-justify opacity-80'>{description}</h2>
          </div>
           <ToastContainer />
       </div>:<div className='flex gap-2 pt-8 flex-col justify-center items-center '>
      <img src={img} alt="" width={200}/>
      <h2 className='text-2xl font-bold'>OOPS!!APP IS NOT FOUND</h2>
    <p className='opacity-80'>The App you are requesting is not found on our system.  please try another apps</p>
      <Link to={'/apps'} className='bg-[#804FE8] text-white btn font-semibold hover:scale-105 transition ease-in-out' >Go Back</Link>
    </div>
  }
      
  </div>
    );
};

export default ProductDetails;

