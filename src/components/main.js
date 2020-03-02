import React, { Component } from 'react'
import '../components/main.css'
import Header from '../components/Header.js'
import Train_Book from '../components/Train_Book'
// import Signup from '../components/signup';
 class main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Train_Book/>
                
             
            </div>
        )
    }
}

export default main
