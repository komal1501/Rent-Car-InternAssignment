import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Pagination = ({totalCars, carsPerPage,setCurrentPage,currentPage, onPageChange}) => {

  let pages=[];
  
  for(let i=1;i<=Math.ceil(totalCars/carsPerPage);i++){
    pages.push(i);
  }
  
  return (
    <div className="shadow-md p-2  my-4 mx-36 border-2 rounded-lg flex justify-between items-center" >
        <div className='text-sm'>{currentPage} from 10</div>
        <div className='flex space-x-2 items-center'>
            <button disabled={currentPage==1}
            onClick={()=>onPageChange(currentPage-1)}><AiOutlineArrowLeft/></button>
        {
            pages.map((page,index)=>{
                return <button className={page==currentPage?'bg-blue-400 border-1 rounded-lg px-2 py-1':'bg-white border-1 rounded-lg px-2 py-1'} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
            })
        }
        <button disabled={currentPage==10} onClick={()=>onPageChange(currentPage+1)}><AiOutlineArrowRight/></button>
        </div>

    </div>
  )
}

export default Pagination
