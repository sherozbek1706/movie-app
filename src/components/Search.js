import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };

  searchPanel = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search ,this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(() => ({type : e.target.dataset.type}) , () => {
      this.props.searchMovie(this.state.search ,this.state.type) 
    });
  };


  render() {
    const { search } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              value={search}
              placeholder="Search Movies"
              type="search"
              name="search"
              onChange={this.searchPanel}
              className="validate"
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() => this.props.searchMovie(this.state.search  ,this.state.type)}
              className="btn search-btn"
            >
              Search Movie
            </button>
          </div>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
