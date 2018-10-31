import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./Counter.css";

class Counter extends Component {
    state = { count: 0 }

    // incremental functions
    increment = () => {
        this.props.dispatch({
            type: 'INCREMENT'
          });
          
    }

    // decremental functions
    decrement = () => {
        this.props.dispatch({
            type: 'DECREMENT'
          });
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>&ndash;</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);