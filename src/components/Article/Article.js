import React from 'react';
import './Article.css';

const Article = () => {
  return (
    <div className='article-container'>
      <h2>Q & A</h2>
      <article className='article'>
        <h3>How react works?</h3>
        <p>React is popular for it's declarative, efficient and flexible documentation and resources. React has it's own DOM. It is called Virtual DOM. When rendering a web page react does a exact copy of real DOM. Whenever a component state changes, React goes through its virtual DOM, creates a list of changes that need to be updated in to actual DOM and all these happen in one single process.</p>
      </article>
      <article className='article'>
        <h3>What are the difference between props and state?</h3>
        <p>Props are ready only components. Props stores the value of attributes tag in an object, which work similar to the HTML attributes. Props helps passing data from one component to other components. Props are immutable and we can not modify props from inside the component. On the other hand State is an updatable that is used to contain data of components and can update or modify over time. State can be accessed or modified inside the component or by the component directly.</p>
      </article>
    </div>
  );
};

export default Article;