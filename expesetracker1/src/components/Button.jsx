import { type } from "@testing-library/user-event/dist/type";
import { Component, lazy } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'Click Me',
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({ label: this.props.label })

    }

    // handleClick() {

    //     console.log(this);
    //   this.setState({
    //     label: 'Got the Product'
    //   })
    // }
    handleClick = () => {
        this.setState({ label: "Got the Product" }, () => {
            console.log(this.state.label);
        })
    }

    render() {
        if (this.props.type === 'primary') {
            return <button className="btn btn-primary" onClick={this.handleClick}>{this.state.label}</button>
        }
        if (this.props.type === 'secondary') {
            return <button className="btn btn-secondary" onClick={this.props.handleClick}>{this.state.label}</button>
        }

        return <button onClick={this.props.handleClick}>{this.state.label}</button>

    }
}

export default Button;

// const Button = () => {
//     return <button>Click Me</button>
// }