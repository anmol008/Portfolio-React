import React,{useContext} from "react";
// Create a context {WareHouse}
//Provider : provides data to consumer
//Consumer : Recieves data
const AppContext = React.createContext();

export const AppProvider = ({child})=>{
  return <AppContext.Provider value={'Anmol'}> 
             {child}
         </AppContext.Provider>
}
export {AppContext};
