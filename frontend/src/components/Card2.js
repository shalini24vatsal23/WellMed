import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style.css';

function Card2({ index, article }) {
  
  const articleOpener = () => {
    window.open(`/article/${article.id}`, '_blank')
  };

  return (
    <Card style={{ width: '18rem', borderRadius: '0', border: 'none' }} className='mx-2'>
      <Card.Img className='shadow' variant="top" src={article.image} style={{ borderRadius: '0' }} />
      <Card.Body>
        <Card.Title className=' h6'>{article.title}</Card.Title>
        <button className='pink-btn' onClick={articleOpener}>Read article</button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
