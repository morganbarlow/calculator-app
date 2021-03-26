import React, { Component } from 'react';

import InputDisplay from './input-display.js';
import Button from "./button.js";

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            userInput: ""
        }
      
    }

    render() {
      console.log(test)
        return (
            <div>
                <div className="calculator-body">
                    <h1>Morgan's React Calculator</h1>
                    <InputDisplay userInput={this.state.userInput}/>
                    <Button onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}
