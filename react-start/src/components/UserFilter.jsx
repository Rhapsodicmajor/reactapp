import React from "react";
import { Button } from "react-bootstrap";

const UserFilter = ({ users, onUserSelect, showAllTodos }) => {
  return (
    <div className="user-filter mb-3">
      {showAllTodos && (
        <Button
          variant="outline-primary"
          className="me-2"
          onClick={() => onUserSelect(null)}
        >
          All
        </Button>
      )}
      {users.map((user) => (
        <Button
          key={user.id}
          variant="outline-primary"
          className="me-2"
          onClick={() => onUserSelect(user.id)}
        >
          {user.name}
        </Button>
      ))}
    </div>
  );
};

export default UserFilter;
