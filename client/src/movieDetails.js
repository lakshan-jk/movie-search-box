import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Container
} from "reactstrap";
import { withRouter } from "react-router";

const MovieDetails = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=50c6d869`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container>
      <Card className="text-center">
        <CardImg top width="50%" src={data.Poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h1>Title : {data.Title}</h1>
          </CardTitle>
          <CardText> Year : {data.Year}</CardText>
          <CardText> Type : {data.Type}</CardText>
          <CardText> Director : {data.Director}</CardText>
          <CardText> website : {data.Website}</CardText>
          <CardText> Movie hours : {data.Runtime}</CardText>
          <CardText>Awards : {data.Awards}</CardText>
          <CardText>Language : {data.Language}</CardText>
          <CardText>Actors : {data.Actors}</CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default withRouter(MovieDetails);
