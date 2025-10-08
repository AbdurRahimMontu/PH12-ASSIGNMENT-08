
import React, { useEffect, useState } from 'react';

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
  <div className='flex justify-between items-center pt-5'>
        <h1>sortedItem : { sortedItem.length}</h1>
       
  <select className='border p-1' value={sortOrder} onChange={e=> setSortOrder(e.target.value)}>
            <option value="none">Sort by downloads</option>
            <option value="download-asc">Low-&gt;High</option>
           <option value="download-dsc">High-&gt;Low</option>
         </select>
          
  </div>
  </div>
    <div className='py-5 space-y-5 '>
     {
sortedItem.map(p => 
    <div key={p.id} className='shadow-2xl border p-3 flex justify-between items-center'>
          <div className='flex  items-center gap-5'>
          <img src={p.image} alt="" />
         <div>
          <p>{p.title}</p>
          <p>{p.companyName}</p>
          <p>Downloads : {p.downloads}</p>
         </div>
         
        </div>
        <div>
        <button onClick={()=>handleRemove(p.id)} className='btn btn-outline'>Remove</button>
        </div>
  </div>
        
      
      )
       
     }
    </div>

</div>



)

}

export default Installation;