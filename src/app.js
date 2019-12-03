import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home';
import ItemDetail from './components/itemDetails';

const App = () => {
    return (
       <Switch>
           <Route path="/item" component={ItemDetail} />
           <Route path="/" component={Home} />
       </Switch>
    );
}

export default App;