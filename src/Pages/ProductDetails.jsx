import React, { useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from"recharts";


const ProductDetails = () => {
      const [install, setInstall] = useState(false);
   const {id } =useParams()
   const {products, loading} = useProducts()
  const product = products.find(p => String(p.id) === id)
  if(loading) return <p>Loading....</p>
  const {image, title, downloads, ratingAvg, companyName, reviews,description,ratings} = product||{};



  const handleAdd =()=>{
 setInstall(true);
    const previousData = JSON.parse(localStorage.getItem('appList'))
    let updatedList = [];
    if(previousData){
        const isDuplicate = previousData.some(p => p.id===product.id)
        if(isDuplicate) return alert('added product')
     updatedList = [...previousData, product]
    }else{
        updatedList.push(product)
    }
  localStorage.setItem('appList', JSON.stringify(updatedList))
  }

  



const data = ratings;



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
                    <button  onClick={handleAdd} disabled={install} className='btn bg-green-800 text-white font-bold'> {install ? "Installed" : "Install Now"}</button>
                </div>

            </div>
          </div>
          <div>

            <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
        
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count"  fill="#2563eb" barSize={40} />
         
        </BarChart>
      </ResponsiveContainer>
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

