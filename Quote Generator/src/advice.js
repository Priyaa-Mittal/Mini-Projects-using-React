import React from 'react';
import axios from 'axios';
class Advice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advice: ''
        }
    }
    componentDidMount() {
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice })
            })
            .catch((error) => {
                console.log("Error 404 Not Found!");
            })
    }
    render() {
        return (
            <div class='main'>
                <div class="card">
                    <div class="title">{this.state.advice}</div>
                    <div><button onClick={this.fetchAdvice}><b>Give me advice</b></button></div>
                </div>
            </div>
        );
    };
}
export default Advice;