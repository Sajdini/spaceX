import React from "react";
//react router
import { useParams } from "react-router-dom";
// apollo
import { useQuery } from "@apollo/client";
// query
import { LAUNCH_QUERY } from "../utils/queries";

const Launch = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id: Number(id) },
  });

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return <div>Launch</div>;
};

export default Launch;
