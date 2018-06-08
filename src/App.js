import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { villains } from './villains.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      villains: villains,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {
    const filteredVillains = this.state.villains.filter(villain => {
      return Object.values(villain).join(" ").toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className = 'tc'>
        <h1 className='f1'>Spider-Man's Greatest Nemeses</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList villains={filteredVillains} />
      </div>
    );
  }
}

export default App;
