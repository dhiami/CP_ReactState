import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            intervall: null,
            timer: 0,
    };
    }
componentDidMount() {
    this.setState({
    intervall: setInterval(() => {
    this.setState({ timer: this.state.timer + 1 });
    }, 1000),
    });
    }
    render() {
        return (
    <h4 className="Time">
    Timer :  {this.state.timer}
    </h4>
    );
    }
}
export default Timer;