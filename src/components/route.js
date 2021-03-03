import AddInv from './add_inventory/add_inventory.js';
import Search from './search/Search.js';
import Buy from './BUY/buy';
import App from '../App';
import React from 'react';
import { Router, Route,browserHistory, IndexRoute} from 'react-router-3';

const route =  <Router history= {browserHistory}>
    <Route path="/" component={App}/> 
    <Route path="/add_inventory" component={AddInv}/>
    <Route path="/search" component={Search}/>
    <Route path="/buy" component={Buy}/>

</Router>

export default route; 