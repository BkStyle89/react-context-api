import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
export default function Homepage(){

return(
    <div className="pgn">
        <AppHeader/>
        <main className="pgn">
            <p className="text-center fs-1 fw-bold">The Paradise of Clothing</p>
            <div className="container">
                <div className="row  fs-4 text-center ">
                    <div className="card d-flex justify-content-center text-center mb-5 ">
                        <p className="bg-light p-4 fw-bold">welcome to the Paradise of Clothing & relaxing</p>
                    </div>
                </div>
            </div>
            
        </main>
        <AppFooter/>
    </div>
)

}