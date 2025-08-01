import { createContext, useContext, useEffect, useState } from "react";

const SharedContext = createContext();

function SharedCartValueProvider({children}){
    
const [sharedCartArray, setSharedCartArray] = useState(() => {
  const storedCart = window.localStorage.getItem('Stored_Cart');
  return storedCart ? JSON.parse(storedCart) : [];
});
    function clearArray() {
      setSharedCartArray([]);
      window.localStorage.setItem('Stored_Cart', JSON.stringify([]));
    }
    function removeItem(id, color, size){

        let searchedIndex = sharedCartArray.findIndex(obj=> obj.id === id && obj.Color === color && obj.Size === size)
          setSharedCartArray(prev => {
          const newArr = [...prev];
          newArr.splice(searchedIndex, 1);
          window.localStorage.setItem('Stored_Cart', JSON.stringify(newArr));
          return newArr;
        });
      window.localStorage.setItem('Stored_Cart', JSON.stringify(newArr));
    }

    function updateSharedCartArray(format){

      for(let i=0; i<sharedCartArray.length;i++){
        if(sharedCartArray[i]==null){

          sharedCartArray.pop()
        }
      }
        
        
        setSharedCartArray((prevArray)=>[...prevArray, format]);

         window.localStorage.setItem('Stored_Cart', JSON.stringify([...sharedCartArray, format]));
    }
    return (<SharedContext.Provider value={{sharedCartArray,updateSharedCartArray, clearArray, removeItem}}>{children}</SharedContext.Provider>);
}

export {SharedCartValueProvider, SharedContext};

//////////////////////////////


