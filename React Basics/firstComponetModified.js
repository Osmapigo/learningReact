class Button extends React.Component {
	handleClick = () => this.props.onClick(this.props.plusValue)
    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.plusValue}
            </button>
        )
    }
}

const Result = (props) => {
    return (<div>{props.counter}</div>)
}

class App extends React.Component {
    state = { counter: 0 }

    incrementCounter = (plusValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + plusValue 
        }))
    }

    render() {
        return (
        <div>
        		<Button plusValue = {1} onClick = {this.incrementCounter}/>
            <Button plusValue = {10} onClick = {this.incrementCounter}/>
            <Button plusValue = {50} onClick = {this.incrementCounter}/>
            <Button plusValue = {100} onClick = {this.incrementCounter}/>
            <Result counter = {this.state.counter}/>
        </div>
        )
    }
}


ReactDOM.render(<App  />, mountNode)