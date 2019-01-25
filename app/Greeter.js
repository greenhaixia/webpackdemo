//Greeter,js
import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css';
import styless from './test.scss';


export default class Greeter extends Component {
    render() {
        return <div className={`${styles.root} ${styless.classs}`}>Hello, { config.greetText } </div>;
    }
}