import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import Login from "./Login";

class Join extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section>
        <div>
          <Login/>
        </div>
      </section>
      
    );
  }
}

export default Join;
