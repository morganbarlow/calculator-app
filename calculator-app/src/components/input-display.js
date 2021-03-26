import React, {Component} from 'react';

export default class ResultComponent extends Component {


    render() {
        let {userInput} = this.props;
        return (
            <div className="result">
                <p>{userInput}</p>
            </div>
    )
        ;
    }
}

