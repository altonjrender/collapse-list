import React, {Component} from 'react';
import logo from './logo.svg';
import './css/App.css';
import Collapse from './my-collapse/src/Collapse';
import _ from 'lodash';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Collapse
                    title="My List Name"
                    autoOpen={true}
                >
                    <a href="https://mxstbr.blog/2017/02/react-children-deepdive/">Link 1</a>
                    <a href="https://reactjs.org/blog/2015/03/03/react-v0.13-rc2.html">Link 2</a>
                    <a href="https://www.google.com">Link 3</a>
                </Collapse>
                <img src={logo} className="App-logo" alt="logo"/>


            </div>


        );
    }
}

export default App;
