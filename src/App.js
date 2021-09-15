import { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'

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
        <Content />
      </div>
    );
  }
  
}

export default App;
