import { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  state = {
    searchValue: '',
    contents: [], 
    click: ''
  }
  handleSearchValue = (e) => {
    this.setState({searchValue: e.target.value})
  }
  handleContent = (data) => {
    this.setState({contents: data})
  }

  handleClick = (clickVal) => {
    this.setState({click: clickVal});
  }

  fetchData = () => {
    return fetch(`https://newsapi.org/v2/everything?q=${this.state.searchValue|| 'all'}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => res.json())
        .then((result)=> result.articles)
        .then((data) => this.handleContent(data))
        .catch((err) => this.handleContent([]))
  }
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.click !== prevState.click) {
      this.handleClick('');
            this.fetchData();
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header searchValue={this.state.searchValue} handleSearchValue={this.handleSearchValue} click = {this.state.clickVal} handleClick= {this.handleClick}/>
        <Content contents={this.state.contents} handleContent={this.handleContent} />
      </div>
    );
  }
  
}

export default App;
