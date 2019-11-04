import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import HelloWorld from './page/HelloWorld';
import Dashboard from './page/Dashboard';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import './index.css';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to = "/">Hello World</Link>
                </li>
                <li>
                    <Link to = "/dashboard">Dashboard</Link>
                </li>
            </ul>
            <switch>
                <Route exact path="/" component={HelloWorld}/>
                <Route path="/dashboard" component={Dashboard}/>
            </switch>
        </div>
    </Router>
)

ReactDOM.render (
    routing,
    document.getElementById('root')
);
