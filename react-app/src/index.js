import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './assets/components/Home';
import './assets/css/Util.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/">
                <div className="gravity-center">
                    <Home />
                </div>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);
