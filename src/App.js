import React from "react";
import { Router } from "./router";

class AppC extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return this.state.loading ? <p>Loading</p> : <Router />;
  }
}

function App() {
  return <Router />;
}

export default App;

/*

  <div className="container">
      <h1 className="title">Search Movies</h1>
      <input placeholder="Search smt" className="search-input" />
      <p className="error-msg">Error</p>

      <div className="content">
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
      </div>
    </div>
*/
