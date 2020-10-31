import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import SearchSection from "./components/SearchSection";

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const takeBack = useHistory();

  function onChangeSearchValue(event) {
    const searchValue = event.target.value;

    setSearchValue(searchValue);
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      fetchMovies();
    }
  }

  function onClickSearch() {
    fetchMovies();
  }

  function fetchMovies() {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=50c6d869`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <Container>
      <h2>Movie Buff</h2>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data.Search &&
            data.Search.map((movie) => {
              return (
                <Col md={4} key={movie.imdbID}>
                  <Card>
                    <CardImg top width="50%" src={movie.Poster} />
                    <CardBody>
                      <CardTitle>{movie.Title}</CardTitle>
                      <CardText>
                        {movie.Year}-{movie.Type}
                      </CardText>
                      <Button
                        color="primary"
                        onClick={() =>
                          takeBack.push(`/movie-details/${movie.imdbID}`)
                        }
                      >
                        Book your seat
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
    </Container>
  );
}
