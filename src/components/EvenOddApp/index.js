import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {random: 0, oddEven: 'Even'}

  onIncrement = () => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomNumber = getRandomInt(0, 100)
    this.setState({random: randomNumber})

    if (randomNumber % 2 === 0) {
      this.setState({oddEven: 'Even'})
    } else {
      this.setState({oddEven: 'Odd'})
    }
  }

  render() {
    const {random, oddEven} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Count {random}</h1>
        <p className="oddEven">Count is {oddEven}</p>
        <button className="btn" onClick={this.onIncrement} type="button">
          Increment
        </button>
        <p className="info">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
