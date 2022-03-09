import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Item from './Item'

import './App.css'

class App extends Component {
  state = {name: '', list: []}

  onChangeName = e => {
    this.setState({name: e.target.value})
  }

  onSubmit = () => {
    const {name} = this.state
    this.setState(prevState => ({
      list: [...prevState.list, {name}],
    }))
    this.setState({name: ''})
  }

  render() {
    const {name, list} = this.state
    console.log(name)
    return (
      <div className="app-container">
        <div className="left-side">
          <h1>Count the characters like a Boss...</h1>
          <ul className="list-container">
            {list.length > 0 ? (
              list.map(eachItem => (
                <Item eachItemDetails={eachItem} key={uuidv4()} />
              ))
            ) : (
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </li>
            )}
          </ul>
        </div>
        <div className="right-side">
          <h1>character Counter</h1>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Enter the Characters here"
              onChange={this.onChangeName}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
