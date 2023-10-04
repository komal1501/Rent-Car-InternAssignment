import React,{useRef, useState} from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {BsSearch} from "react-icons/bs";

const Navbar=({onSearch})=>{
    const [searchCar, setSearchCar]=useState('');
    const seachHandler=()=>{
        onSearch(searchCar);
    };
    return(
        <div className="shadow-md p-2  mt-4 mx-36 border-2 rounded-lg">

            <div className="flex space-x-6 items-center">
                <div className="rounded-lg bg-white flex items-center">
                    <input 
                       type="text" 
                       className=" p-2 text-sm rounded-lg"
                       placeholder="Search..." 
                       value={searchCar}
                       onChange={(event)=>setSearchCar(event.target.value)} 
                    />

                <button className="" onClick={seachHandler}><BsSearch className="m-2 text-gray-600"/></button>
                </div>

                <div className="flex items-center text-sm font-semibold text-gray-600">Relevance<MdOutlineArrowDropDown/>
                </div>
                
                <div className="flex items-center text-sm font-semibold text-gray-600">All brands<MdOutlineArrowDropDown/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;