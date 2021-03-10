import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};
