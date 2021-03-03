import React, { Component } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

class Full extends Component {
    render() {
        console.log('FULL', this.props)
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Full;
