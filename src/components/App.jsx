import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

import ErrorModal from 'components/modals/ErrorModal';

const App = React.createClass({
    render() {
        return <div>
            <ErrorModal />
            <NavBar query={this.props.location.query} />
            {this.props.children}
            <Footer />
        </div>
    }
});

export default App;
