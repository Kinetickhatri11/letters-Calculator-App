// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onInput = event => {
    this.setState(prevState => ({input: event.target.value}))
  }

  render() {
    const {input} = this.state
    const letterCount = input.length
    return (
      <div className="background-container">
        <div className="content-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label for="phrase" className="about">
            Enter the phrase
          </label>
          <input
            id="phrase"
            className="input-box"
            placeholder="Enter the phrase"
            type="text"
            onChange={this.onInput}
          />
          <p className="count">No.of letters: {letterCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
