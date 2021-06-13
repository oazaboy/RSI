import React from 'react';
import ComplaintForm from './layouts/ComplaintForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavDrawer from './layouts/NavDrawer';
import ComplaintLayout from '../src/layouts/ComplaintLayout';
function App() {
 return (
 <BrowserRouter>
 <NavDrawer >
 <Switch>
 <Route exact path='/'>
 <ComplaintLayout />
 </Route>
 <Route path="/complaint">
 <ComplaintForm />
 </Route>
 </Switch>
 </NavDrawer>
 </BrowserRouter>
 );
}
export default App;