// Dopeness Component
import React, { Component } from 'react'

class Dopeness extends Component {
    // setting the initial state for dopenessCount to be 0
    state = {
        dopenessCount: 0,
    }
    // increaseDopeness method that is called onClick event
    increaseDopenss = () => {
        let moreDope = this.state.dopenessCount + 1;
        this.setState({
            dopenessCount: moreDope,
        })
    }

    decreaseDopeness = () => {
        let lessDope = this.state.dopenessCount -1;
        this.setState({
            dopenessCount: lessDope,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseDopenss}>
                    Increase
                </button>
                <button onClick={this.decreaseDopeness}>
                    Decrease
                </button>
                <p>
                Dopeness Level: {this.state.dopenessCount}
                </p>
            </div>
        )

    }
}

export default Dopeness;