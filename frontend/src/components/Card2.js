import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style.css';

function Card2({ index ,article }) {
  return (
    <Card style={{ width: '18rem' }} className='mx-2'>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title className=' h6'>{article.title}</Card.Title>
        <button className='pink-btn'>Read article</button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
