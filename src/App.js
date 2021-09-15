import { Component } from 'react';
import './App.css';
import Header from './components/Header'
class App extends Component {
  state = {
    searchValue: ''
  }
  handleSearchValue = (e) => {
    this.setState({searchValue: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <Header searchValue={this.state.searchValue} handleSearchValue={this.handleSearchValue} />
      </div>
    );
  }
  
}

export default App;
