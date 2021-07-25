import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    title={{
      text: 'tiantian205'
    }}
    description={{
      text: 'My website is under construction. We\'ll be here soon, subscribe to be notified',
      style: {
        maxWidth: '440px',
      }
    }}
    subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        console.log('user typed email :', value);
      }
    }}
  />
);

export default App;