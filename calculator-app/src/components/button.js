import React, { Component } from "react";


export default class ButtonDisplay extends Component {
    constructor(){
        super()
    }
    render() {
        return(
            <div className = "button-display">
                <div className ="button-row">
                    
                    <div className = "buttons">
                        <button name="CE" onClick = {btn => this.props.onClick(btn.target.name)}>CE</button>
                        <button name="C" onClick = {btn => this.props.onClick(btn.target.name)}>C</button>
                        <button name="del" onClick = {btn => this.props.onClick(btn.target.name)}>del</button>
                        <button name="/" onClick = {btn => this.props.onClick(btn.target.name)}>/</button>
                    </div>
                    <div className = "buttons">
                        <button name="7" onClick = {btn => this.props.onClick(btn.target.name)}>7</button>
                        <button name="8" onClick = {btn => this.props.onClick(btn.target.name)}>8</button>
                        <button name="9" onClick = {btn => this.props.onClick(btn.target.name)}>9</button>
                        <button name="*" onClick = {btn => this.props.onClick(btn.target.name)}>*</button>
                    </div>
                    <div className = "buttons">
                        <button name="4" onClick = {btn => this.props.onClick(btn.target.name)}>4</button>
                        <button name="5" onClick = {btn => this.props.onClick(btn.target.name)}>5</button>
                        <button name="6" onClick = {btn => this.props.onClick(btn.target.name)}>6</button>
                        <button name="-" onClick = {btn => this.props.onClick(btn.target.name)}>-</button>
                    </div>
                    <div className = "buttons">
                        <button name="1" onClick = {btn => this.props.onClick(btn.target.name)}>1</button>
                        <button name="2" onClick = {btn => this.props.onClick(btn.target.name)}>2</button>
                        <button name="3" onClick = {btn => this.props.onClick(btn.target.name)}>3</button>
                        <button name="+" onClick = {btn => this.props.onClick(btn.target.name)}>+</button>
                    </div>
                    <div className = "buttons">
                        <button name="+/-" onClick = {btn => this.props.onClick(btn.target.name)}>+/-</button>
                        <button name="0" onClick = {btn => this.props.onClick(btn.target.name)}>0</button>
                        <button name="." onClick = {btn => this.props.onClick(btn.target.name)}>.</button>
                        <button name="=" onClick = {btn => this.props.onClick(btn.target.name)}>=</button>
                    </div>

                </div>
            </div>
        )
    }
}
