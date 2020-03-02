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
    Data: Data,
    loading: false
  };
  searchMovie = x => {
    setTimeout(() => {
      this.setState({ loading:false})
    }, 1000);
    this.setState({
      nameFilter: x,
      loading: true
    });
  };

  AddMovie = newMovie => {
    this.setState({
      Data: [...this.state.Data, newMovie]
    });
  };
  searchByRating = x => {
       setTimeout(() => {
         this.setState({ loading: false });
       }, 1000);
    this.setState({
      minRating: x,
      loading: true
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
          loading={this.state.loading}
        />
        <Add AddMovie={this.AddMovie} />
      </div>
    );
  }
}

export default App;
