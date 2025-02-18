
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)
 

  return (
    <div className='m-16'>
      
      <h1 className='text-6xl font-bold text-center text-purple-600 my-10 '>Hot Hot cold coffee: {coffees.length} </h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
        coffees.map(coffee => <CoffeeCard
        key={coffee._id}
        coffee ={coffee}
        coffees = {coffees}
        setCoffees = {setCoffees}
        ></CoffeeCard>)
      }
      </div>
      
     
     
    </div>
  )
}

export default App
