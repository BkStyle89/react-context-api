import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import ProdottoSingolo from "./pages/ProdottoSingolo"
import {BudgetProvider} from "./BudgetContext/BudgetContext"
import NotFound from "./pages/Error"


function App() {
 


  return (
    <>
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/chiSiamo" element={<ChiSiamo/>}/>
          <Route path="prodotti" element={<Prodotti/>}/>  
          <Route path="/prodotti/:id" element={<ProdottoSingolo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
    </>
  )
}

export default App
