import React from "react";
import { GoPeople } from "react-icons/go";
import {LuFuel} from "react-icons/lu";
import {IoMdSpeedometer} from "react-icons/io"
import {PiSteeringWheelBold} from "react-icons/pi"
import {AiOutlineHeart} from "react-icons/ai"

const CarCard=({car})=>{
    const CardStyle={
        width:370,
        height:450
    };
    return(
    <div className="border-2 border-grey-300 rounded-2xl flex flex-col bg-gray-50 shadow-md" style={CardStyle}>

        {/* Image */}
        <img src={car.imageURL[0]} height={400} width={400} className="p-4 rounded-3xl"></img>

        {/*Name & Year*/}
        <div className="flex px-4 justify-between mb-4">
            <div className="text-xl font-semibold">{car.name}</div>
            <div className="border-2 border-dashed border-blue-300 rounded-xl text-md font-semibold py-1 px-2">{car.year}</div>
        </div>


        <div className="w-3/4 px-4 flex justify-between">
            <div className="flex flex-col space-y-3">
                <div className="flex">
                <GoPeople className=" mr-2 text-blue-600 font-extrabold text-lg" />
                <div className="text-sm font-medium text-gray-600">{car.seats} People</div>
                </div>
                <div className="flex">
                <IoMdSpeedometer className=" mr-2 text-blue-600 font-bold text-lg" />
                <div className="text-sm font-medium text-gray-600">{car.mileage} km / 1-Litre</div>
            </div>
            </div>
            <div className="flex flex-col space-y-3">
            <div className="flex">
                <LuFuel className="mr-2 text-blue-600 font-bold text-lg" />
                <div className="text-sm font-medium text-gray-600">{car.engine}</div>
            </div>
            <div className="flex">
                <PiSteeringWheelBold className=" mr-2 text-blue-600 font-bold text-lg" />
                <div className="text-sm font-medium text-gray-600">{car.mode}</div>
            </div>
            </div>
        </div>
        {/* Seats & Fuel */}
        {/* <div className="flex flex-col w-3/5">
        <div className="flex px-4 justify-content mb-4 flex-wrap">
            <div className="flex">
                <GoPeople className="mt-1 mr-2 text-blue-600 font-bold text-md" />
                <div className="text-sm font-medium text-gray-600">4 People</div>
            </div>
            <div className="flex">
                <BiGasPump className="mt-1 mr-2 text-blue-600 font-bold text-md" />
                <div className="text-sm font-medium text-gray-600">Hybrid</div>
            </div>
        </div> */}

        {/*Milegage & Automatic */}
        {/* <div className="flex px-4 justify-content">
            <div className="flex">
                <SlSpeedometer className="mt-1 mr-2 text-blue-600 font-bold text-sm" />
                <div className="text-sm font-medium text-gray-600">6.1km/1-Litre</div>
            </div>
            <div className="flex">
                <PiSteeringWheelLight className="mt-1 mr-2 text-blue-600 font-bold text-md" />
                <div className="text-sm font-medium text-gray-600">Automatic</div>
            </div>
        </div>
        </div> */}
        {/*Line*/}
        <div className="mx-4 my-4 border-t-2 border-gray-200"></div>

        {/*Price & Rent Now*/}
        <div className="flex justify-between px-4 ">
            <div className="text-3xl ">${car.price}<span className="text-sm font-semibold"> / month</span></div>
            <div className="flex space-x-3">
                <div className="border-1 bg-blue-100 rounded-lg p-2">
                    <AiOutlineHeart className="text-xl text-blue-400"/>
                </div>
                <div>
                    <button className="border-1 text-white font-bold bg-blue-400 p-2 rounded-xl">Rent now</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CarCard;