import{Row,Col} from 'react-bootstrap'
import storeItems from '../data/items.json'
import{StoreItem} from '../components/StoreItem'



export function Store(){
    return <>
    <h1>Let's Binge!</h1>
    <Row ms={2} xs={1} lg={3} className='g-3'>
     {storeItems.map(item =>(
        <Col key={item.imdbID}>
        <StoreItem {...item}/>
        </Col>
     ))}    
    </Row>   
    </>
}