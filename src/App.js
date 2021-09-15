import { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  state = {
    searchValue: '',
    contents: []
  }
  handleSearchValue = (e) => {
    this.setState({searchValue: e.target.value})
  }
  handleContent = (data) => {
    this.setState({contents: data})
  }
  fetchData = () => {
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.searchValue}&api-key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => res.json())
        .then((result) => result.response.docs)
        .then((data) => this.handleContent(data))
        .catch((err) => this.handleContent([]))
  }
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchValue !== prevState.searchValue) {
      this.fetchData()
    }
  }
  render() {
    return (
      <div className="App">
        <Header searchValue={this.state.searchValue} handleSearchValue={this.handleSearchValue} />
        <Content contents={this.state.contents} handleContent={this.handleContent} />
      </div>
    );
  }
  
}

export default App;
