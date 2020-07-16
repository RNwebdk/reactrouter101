import React from 'react';

const Home = (props) => {
  // console.log(props);
  setTimeout(() => {
    // props.history.push('/help');
    // props.history.goBack();
  }, 2000);
  return <h1>{props.title}</h1>;
};

export default Home;
