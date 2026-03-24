import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import ProdottoSingolo from "./pages/ProdottoSingolo"
import BudgetContext from "./pages/BudgetContext/BudgetContext"
import { useEffect,useContext,useState } from "react"


function App() {
 
const [budgetMode,setBudgetMode]=useState(false);

  return (
    <>
    <BudgetContext.Provider value={{budgetMode,setBudgetMode}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/chiSiamo" element={<ChiSiamo/>}/>
            <Route path="prodotti" element={<Prodotti/>}/>  
            <Route path="/prodotti/:id" element={<ProdottoSingolo/>}/>
        </Routes>
      </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
