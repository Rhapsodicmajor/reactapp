import React, { useState, useEffect } from "react";
import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row } from "react-bootstrap";
import UserFilter from "./UserFilter";

const ProductListApi = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
        setPage(1);
      });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  }, []);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "";
  };

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setPage(1); // Reset the page when a new user is selected
  };

  const filteredProducts = selectedUserId
    ? products.filter((product) => product.userId === selectedUserId)
    : products;

  const productCards = filteredProducts
    .slice(0, page * limit)
    .map((product) => (
      <Card
        key={product.id}
        className="mb-3"
        style={{
          backgroundColor: product.completed ? "#d6e9c6" : "#f9e79f",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ textDecoration: product.completed ? "line-through" : "none" }}
          >
            {product.title}
          </Card.Title>
          <Card.Text>
            User: {getUserName(product.userId)}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    ));

  return (
    <>
      <Container>
        <UserFilter users={users} onUserSelect={handleUserSelect} showAllTodos={true} /> {/* Add the UserFilter component and pass the showAllTodos prop */}
        <Row>{productCards}</Row>
        <Button onClick={handleLoadMore}>Ещё</Button>
      </Container>
    </>
  );
};

export default ProductListApi;
