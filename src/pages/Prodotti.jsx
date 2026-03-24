import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { useEffect,useState,useContext } from "react"
import BudgetContext from "./BudgetContext/BudgetContext"

export default function Prodotti(){

const api_link ="https://fakestoreapi.com/products"
const [products,setProducts]=useState([])
const {budgetMode,setBudgetMode}=useContext(BudgetContext)
const [filter,setFilter]=useState([])
const [price,setPrice]=useState()



function getProducts(){
fetch(api_link)
.then(res=>res.json())
.then(data=>{setProducts(data), setFilter(data)

})
}
useEffect(getProducts,[]) 

function setFunctionMode(){
    setBudgetMode(!budgetMode)
    console.log(budgetMode);
    
    if (budgetMode== false){
        const filtered=products.filter(item=>item.price<=30 )
        setFilter(filtered)
    }
        else{
    setFilter(products)
        }
}
console.log(budgetMode);

function filterPrice(){
    if
}


return(
    <div>
        <header className="headerBar text-center p-3 mb-3 rounded-bottom-5 mb-5">
            <a className="text-decoration-none p-2 text-light bg-primary" href="/">HomePage</a>
            <a className="text-decoration-none p-2 text-light bg-primary " href="ChiSiamo">Chi Siamo</a>
            <a className="text-decoration-none p-2 text-light bg-primary" href="Prodotti">Prodotti</a>
            <input type="Number" />
            { budgetMode == false ?
                <button className="bg-success" onClick={setFunctionMode}>Attiva Modalità Budget</button>
                :
                <button className="bg-danger" onClick={setFunctionMode}>Disattiva Modalità Budget</button>
            }
        </header>
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
                    {filter.map(product=>(
                        <div key={product.id}>
                            <div className="col justify-content-center d-flex h-100 w-100 align-self-stretch">
                                <div  className="card p-3 bg-light mb-4">
                                    <h5 className="card-title text-center bg-light">{product.title}</h5>
                                    <p> </p>
                                    <p className="card-text bg-light" id="descr">{product.description}</p>
                                    <p className="card-text bg-light">{product.category}</p>
                                    
                                    <img className="Card-img p-5 mt-auto bg-light " src={product.image} alt="" />
                                    <br />
                                    <div className="d-flex justify-content-between mt-auto bg-light">
                                        <h5 className="bg-light">{product.rating.rate} voti:{product.rating.count} </h5>
                                        <h5 className="text-end bg-light">{product.price}&#8364;</h5>
                                        <a className="text-decoration-none bg-light fw-bold" href={`/prodotti/${product.id}`}> Vedi Prodotto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </main>
        <AppFooter/>
    </div>
)
}