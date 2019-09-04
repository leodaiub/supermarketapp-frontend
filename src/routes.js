import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import List from './pages/List';
import Create from './pages/Create';
import Record from './pages/Record';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Route path="/" exact component={List}/>
            <Route path="/Create/" component={Create}/>
            <Route path="/Market/:id" exact component={Record}/>
        </BrowserRouter>
    );
}