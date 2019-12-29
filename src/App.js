import React from 'react';

import './App.css';

import SearchField from './components/search-field/search-field.component';
import CardList from './components/card-list/card-list.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( 
      (monster) => {
        return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
      }
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchField 
          placeHolder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
