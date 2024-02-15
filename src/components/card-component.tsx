import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Article } from '../assets/interface/generic-article';

interface articleProps{
    article:Article
}

function CardComponent({article}: articleProps) {

console.log(article)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Pubblicato il: {article.published_at.toString()}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Dettagli</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;