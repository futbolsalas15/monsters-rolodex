import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/searchbox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    this.setState({ monsters: await response.json() });
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) =>
        !!searchText ||
        monster.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          textToSearch={this.state.searchText}
          updateSearchTermListener={(newSearchTerm) =>
            this.setState({ searchText: newSearchTerm })
          }
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
