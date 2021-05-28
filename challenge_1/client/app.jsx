import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Events from './components/Events.jsx';
import Paginate from './lib/Paginate.jsx';
import request from './lib/request.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['init'],
      search: '/20',
      initPage: 2,
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    request.search(this.state.search, this.state.initPage, (contents) =>
      this.setState({ data: contents }));
  }

  handleSearch(string) {
    this.setState({ search: string }, () => {
      request.search(this.state.search, this.state.initPage, (contents) =>
        this.setState({ data: contents }));
    });
  }

  handlePageClick(data) {
    let selected = data.selected + this.state.initPage;

    request.search(this.state.search, selected, (contents) =>
      this.setState({ data: contents }));
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Search search={this.handleSearch}/>
        <Paginate handlePageClick={this.handlePageClick} />
        <Events events={this.state.data} />
        <Paginate handlePageClick={this.handlePageClick} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));