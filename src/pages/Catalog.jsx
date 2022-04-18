import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/page-header/PageHeader";

import { category as cate } from "../api/tmdbApi";

export const Catalog = () => {
  const { category } = useParams();
  return (
    <>
      <PageHeader>
        {category === cate.movies ? "Movies" : "TV Series"}
      </PageHeader>
    </>
  );
};
