import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../slices/productsApiSlice';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4); // fixed default limit
  const [skip, setSkip] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);

  const search = useSelector((state) => state.search.search);

  // Update skip whenever currentPage or limit changes
  useEffect(() => {
    setSkip((currentPage - 1) * limit);
  }, [currentPage, limit]);

  const { data, isLoading, error } = useGetProductsQuery({
    limit,
    skip,
    search
  });

  // Update total pages after fetching data
  useEffect(() => {
    if (data) {
      setTotal(data.total);
      setTotalPage(Math.ceil(data.total / limit));
    }
  }, [data, limit]);

  const pageHandler = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {!search && <ProductCarousel />}
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data?.products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {totalPage > 1 && !search && (
            <Paginate
              currentPage={currentPage}
              totalPage={totalPage}
              pageHandler={pageHandler}
            />
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
