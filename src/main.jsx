import 'styles/main.less';

import React  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Playlist from 'components/Playlist'



const Header = React.createClass({
    render(){
        return <div className="header">
                <div  className="header-left">
                <img className="title-image" src={require('assets/title.png')} /> 
            </div>
            <div className="header-right">
                <img src={require('assets/header.png')} />
            </div>
        </div>;
    }
});


const App = React.createClass({
    render(){
        return <div>
            <Header />
            <Playlist />
        </div>;
    }
});

const el = document.getElementById('container');
const app = <App />;
// todo: re-add ga.pageview call for each page load??
ReactDOM.render(app, el);
