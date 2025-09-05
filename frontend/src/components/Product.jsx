import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import Rating from './Rating';
import { toast } from 'react-toastify';

const Product = ({ product }) => {
  const [qty] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success('Added to cart!');
  };

  // ✅ Fix image URL (backend runs on port 5000)
 const imageUrl = product.image?.startsWith('http')
  ? product.image
  : `http://localhost:5000/uploads/${product.image}`;



  return (
    <Card className="my-3 p-3 rounded text-center shadow-sm border-0">
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={product.name}
          style={{
            height: '200px',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
        <Card.Body>
          <Card.Title as="div" className="fw-bold product-title" style={{ fontSize: '1rem' }}>
            {product.name}
          </Card.Title>

          <Card.Text as="div" className="mb-2">
            <Rating value={product.rating} text={`(${product.numReviews} reviews)`} />
          </Card.Text>

          <Card.Text as="h5" className="text-primary mb-3">
            {addCurrency(product.price)}
          </Card.Text>
        </Card.Body>
      </Link>

      <Button
        variant="warning"
        type="button"
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
        className="fw-bold"
      >
        {product.countInStock === 0 ? 'Out of Stock' : 'Add To Cart'}
      </Button>
    </Card>
  );
};

export default Product;
