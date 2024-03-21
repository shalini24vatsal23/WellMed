import Card from 'react-bootstrap/Card';
import '../style.css';
import '../jsonData/Card1-images.js';



function Card1({ image, disease}) { 
  return (
    <Card style={{
      width: '8rem', 
      borderRadius: '50%', 
      boxShadow: 'none', 
      border: 'none'
     }} className='card-container'>
      <Card.Img className='shadow' variant="top" src={disease.image} style={{ borderRadius: '50%', border: 'none' }} />
      <Card.Body style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Title className=' h6'>{disease.title}</Card.Title>
        
      </Card.Body>
    </Card>
  );
}

export default Card1;
