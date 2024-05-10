import { useEffect, useState } from "react";
import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const ProductListApi = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;

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

  const productCards = products
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
      <div className="container">
        <div className="row">{productCards}</div>
        <Button onClick={handleLoadMore}>Ещё</Button>
      </div>
    </>
  );
};

export default ProductListApi;
