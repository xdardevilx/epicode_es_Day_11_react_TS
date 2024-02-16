import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Details } from '../assets/interface/detail-article';
import getArticleDeatilAPI from '../data/get-articleDetail-API';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

interface detailsProps{
  details :Details
}
function PageDetails({details}:detailsProps) {
  const {id} = useParams();
  console.log("id",id)
  const [details, setDetails] = useState<Details[]>([]);

  useEffect(() => {
    const fetchData= async ()=>{
  const data = await getArticleDeatilAPI(id)
  console.log("testData",data)
   setDetails(data)
   console.log(details)
    }
    fetchData()
    
 
 },[id])
  return (
    <Container>
      <Row>
        <Col>
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
    </Col>
    </Row>
    </Container>
  );
}

export default PageDetails;