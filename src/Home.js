import { useState } from 'react';
import { data } from "./data";
import './App.css';
import Products from './Products';
import FilterButtons from './FilterButtons';


function Home () {
    const [flwr, setFlwr] = useState (data);   
    const filterFlwrs = (serchTerm) => {
        const newFlwr = data.filter (element => element.searchTerm === serchTerm);
        setFlwr (newFlwr);
    }
    return (
        <div>
            <h1 className='heading'>Flowers</h1>
            <FilterButtons filterFlwrsBtn={ filterFlwrs }/>
            <Products flowers={ flwr }/>
        </div>
    )
}

export default Home;
