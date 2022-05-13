import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'

const Loading = () => {

    return(
            <div className='divPadre'>
               <div className='divHijo'>
                   <Spinner animation="border" variant="danger" className='spinnerReactstrap'/>
               </div>
           
            </div>
    )

}

export default Loading;