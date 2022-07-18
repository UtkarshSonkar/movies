import{Button, Card} from 'react-bootstrap'
import { useFavourites } from '../context/Favourites'

type StoreItemProps ={
    Title:string
    Type:string
    imdbID:string
    Poster:string
}

export function StoreItem({Title,Type,imdbID,Poster}:StoreItemProps){
    const {removeFromCart,getItemQuantity}=useFavourites();
    const quantity=getItemQuantity(imdbID);
  return(<Card className='h-100'>
          <Card.Img variant='top' src={Poster} height='200px' style={{objectFit:'cover'}}/> 
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline'>
                    <span className='ms-2 text-muted'>{Title}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' variant='warning' onClick={()=>removeFromCart(imdbID)}> + Add to Favourites</Button>

                    ):
                    (<div className='d-flex align-items-center flex-column' style={{gap:'.5rem'}}>
                        <div className='d-flex align-items-center justify-content-center'style={{gap:'.5rem'}}>
                         <Button variant='success' size='lg'>Added</Button>
                        </div>
                        <Button variant='danger' size='sm'> Remove</Button>
                        </div>)}
                </div>
            </Card.Body>
        </Card>
)
}