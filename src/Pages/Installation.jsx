
import React, { useEffect, useState } from 'react';
import img from '../assets/App-Error.png'
import { Link } from 'react-router';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const Installation = () => {
     const [appLists, setAppLists] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
  

    useEffect(()=>{
  const savedList = JSON.parse(localStorage.getItem('appList'))
  if(savedList) setAppLists(savedList)
},[])

  const sortedItem =(()=>{
   if(sortOrder === 'download-asc'){
        return [...appLists].sort((a, b)=> a.downloads - b.downloads)  
    }else if(sortOrder === 'download-dsc'){
        return [...appLists].sort((a, b)=> b.downloads - a.downloads)  
    }else{
      return appLists
    }

  }
  )()
  
 

    const handleRemove =(id)=>{

    const savedList = JSON.parse(localStorage.getItem('appList'))
    let updatedList = savedList.filter(p=> p.id !== id)
        setAppLists(updatedList)
  localStorage.setItem('appList', JSON.stringify(updatedList))
  }






  return (
<div className='w-7xl mx-auto '>
<div>
    <div>
  <div className='flex justify-between items-center pt-5'>
        <h1 className='font-bold text-xl'> ({sortedItem.length}) SortedItem</h1>
 
       
  <select className='border p-1' value={sortOrder} onChange={e=> setSortOrder(e.target.value)}>
            <option value="none">Sort by downloads</option>
            <option value="download-asc">Low-&gt;High</option>
           <option value="download-dsc">High-&gt;Low</option>
         </select>
          
  </div>
  </div>
  {
     sortedItem.length>0?  <div className='py-5 space-y-5 '>
     {
sortedItem.map(p => 
    <div key={p.id} className='shadow-2xl border p-3 flex justify-between items-center'>
          <div className='flex  items-center gap-5'>
          <img src={p.image} alt="" />
         <div>
          <p className='text-3xl font-semibold'>{p.title}</p>
        
         <div className='flex gap-5'>
          <p className='flex items-center text-green-700 font-medium gap-2'><img src={download} alt="" width={20}  className='h-5 '/> {p.downloads}</p>
          <p className='flex items-center text-yellow-600  font-medium gap-2'> <img src={rating} alt="" width={20} className='h-5' /> {p.ratingAvg}</p>
          <p className='flex items-center  font-medium gap-2'>{p.size}</p>
         </div>
         </div>
         
        </div>
        <div>
        <button onClick={()=>handleRemove(p.id)} className='btn hover:scale-105 transition ease-in-out  bg-green-700 text-white'>Uninstall</button>
        </div>
  </div>
        
      
      )
       
     }
    </div>: <div className='flex gap-2 flex-col justify-center items-center '>
      <img src={img} alt="" width={180}/>
      <h2 className='text-2xl font-bold'>OOPS!! APP IS NOT FOUND</h2>
    <p className='opacity-80'>The App you are requesting is not found on our system.  please try another apps</p>
      <Link to={'/apps'} className='bg-[#804FE8] text-white btn font-semibold hover:scale-105 transition ease-in-out' >Go Back</Link>
    </div>
  }
  
</div>

</div>



)

}

export default Installation;