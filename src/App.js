import React, { Component } from "react";
import "./App.css";
import { Data } from "./components/data";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Add from "./components/Add";

class App extends Component {
  state = {
    minRating: 1,
    nameFilter: "",
    Data: Data
  };
  searchMovie = x => {
    this.setState({
      nameFilter: x
    });
  };

  AddMovie = newMovie => {
    this.setState({
      Data: [...this.state.Data, newMovie]
    });
  };
  searchByRating = x => {
    this.setState({
      minRating: x
    });
  };

  render() {
    return (
      <div>
        <Search
          searchMovie={this.searchMovie}
          searchByRating={this.searchByRating}
        />
        <MovieList
          Data={this.state.Data}
          nameFilter={this.state.nameFilter}
          minRating={this.state.minRating}
        />
        <Add AddMovie={this.AddMovie} />
      </div>
    );
  }
}

export default App;
