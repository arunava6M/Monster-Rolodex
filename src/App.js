import React from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { Search } from './Components/search/search.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    .then(user => this.setState({ monsters: user }));
  }

  render(){
  const {monsters,search} = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search 
         placeholder="Search Monster" 
         handleChange={e=>{
          this.setState({search: e.target.value});
          }}/>

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App;
