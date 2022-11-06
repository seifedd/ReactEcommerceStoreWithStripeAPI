import { Row, Col } from "react-bootstrap";

import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import axios, * as others from "axios";
import useFetchData from "../use-fetch-data";

function Store() {
  const [allStoreProducts, loading] = useFetchData();

  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <>
          <h1 align="center" className="p-3">
            Welcome to the store!
          </h1>
          <Row xs={1} md={3} className="g-4">
            {allStoreProducts.map((product, idx) => (
              <Col align="center" key={idx}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default Store;
