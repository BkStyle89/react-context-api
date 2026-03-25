import {Link} from 'react-router-dom';

export default function NotFound(){
    return(
        <div className='pgn'>
            <h1 className='text-center text-danger bg-dark'> 404 PAGINA NON TROVATA</h1>
            <Link className='text-dark fs-1 d-flex justify-content-center ' to="/">Torna alla Home</Link>
        </div>
    )
}