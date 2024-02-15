import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Details } from '../assets/interface/detail-article';
import getArticleDeatilAPI from '../data/get-articleDetail-API';
import { useParams } from 'react-router-dom';

function KitchenSinkExample() {
  const params = useParams();
  const [details, setDetails] = useState<Details[]>([]);

  useEffect(() => {
    const fetchData= async ()=>{
  const data = await getArticleDeatilAPI()
  console.log("testData",data)
   setDetails(data)
    }
    fetchData()
    
 
 },[])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;