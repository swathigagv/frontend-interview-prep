import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
export default function header(){
    return (
        <header>
            <div className='kitset'>
            <h1>Chef Avni</h1>
            <FontAwesomeIcon icon={ faKitchenSet} />
            </div> 
        </header>
    )
}