import { useEffect, useState } from 'react';
import './App.css';
import CarCard from './components/CarCard';
import car from './data/cars.json';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

const App=()=>{
  const [filteredCars, setFilteredCars]=useState(car);
   
  const [currentPage, setCurrentPage]=useState(1);
  const [carsPerPage, setCarsPerPage]=useState(6);

  const searchHandler=(query)=>{
    const filtered=car.filter((car)=>
    car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };
  // const [carData, setCarData] = useState([]);

  // useEffect(() => {
  //   fetch('./data/cars.json')
  //     .then((response) => response.json())
  //     .then((data) => setCarData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  const lastCarIndex=currentPage*carsPerPage;
  const firstCarIndex=lastCarIndex-carsPerPage;
  const currentCars=filteredCars.slice(firstCarIndex,lastCarIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return(
    <div className='App bg-gray-100'>
      <Navbar onSearch={searchHandler} />
      <div className='flex justify-center flex-wrap'>
        {
          currentCars.map(car=>{
            return(
              <div className='m-3'>
                <CarCard car={car}/>
              </div>
            )
          })
        }
      </div>
      <Pagination totalCars={car.length} carsPerPage={carsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} onPageChange={onPageChange}/>
      </div>
  )
}

export default App;
