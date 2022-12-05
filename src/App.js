import Landing from './Landing/landing';
import React, {useState, useEffect, createContext} from 'react';

export const ListContext = createContext()

function App() {

  const[dest,setDest] = useState(["Alps"]);
    useEffect(() => {
        setDest(destbefore => [...destbefore, "India", "Portugal", "Italy", "Vietnam"]);
    }, []); //add the other list elements to ordered list

    const[food,setFood] = useState(["Carbonara"]);
    useEffect(() => {
        setFood(foodbefore => [...foodbefore, "Sushi", "Pad Thai", "Schnitzel", "Ice Cream"]);
    }, []); //add the other list elements to unordered list

  
  return (   
    <>
      <ListContext.Provider value={{dest, setDest, food, setFood}}> 
        <div> 
          <Landing/> 
        </div>
      </ListContext.Provider>
    </> );
}

export default App;