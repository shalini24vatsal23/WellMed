import React from 'react';
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import { articles } from '../jsonData/articles';
import NavBar from '../components/NavBar';

function Article() {

  const { id } = useParams();
  console.log(id);
  const articleItem = articles.filter(article => article.id === id)[0];

  return (
    <>
      <section>
        <NavBar />
      </section>
      <section style={{ marginTop: '60px' }}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='w-50'>
            <h1 className='my-3'>{articleItem.title}</h1>
            <img src={articleItem.image} alt="" className='w-100' />
            <p className='text-start h5 text-muted mb-5 my-3'>{articleItem.article}</p>
          </div>
        </div>
      </section>

      <section className='footer py-0'>
        <Footer />
      </section>
    </>
  );
}

export default Article;
