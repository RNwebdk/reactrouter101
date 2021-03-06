import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpCustomer = () => <h1>Help Customer here</h1>;
const HelpHost = () => <h1>Help Host here</h1>;

const Help = () => {
  return (
    <div>
      <div>
        <Link to='/help/customer'>I am a customer</Link>|
        <Link to='/help/host'>I am a Host</Link>
      </div>
      <p>An image goes here</p>
      <Route path='/help/customer' component={HelpCustomer} />
      <Route path='/help/host' component={HelpHost} />
      <h3>Fotter for help</h3>
    </div>
  );
};

export default Help;
