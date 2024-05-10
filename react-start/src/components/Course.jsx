import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Course = ({ course }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    setLiked(storedLikes[course.id]);
  }, [course.id]);

  const handleLike = () => {
    setLiked(!liked);
    let storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    storedLikes[course.id] = !liked;
    localStorage.setItem('likes', JSON.stringify(storedLikes));
  };

  return (
    <Card style={{ width: '18rem', position: 'relative' }} key={course.id}>
      <Button
        variant="light"
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
        onClick={handleLike}
      >
        {liked ? <AiFillHeart /> : <AiOutlineHeart />} {/* сюды можно иконки */}
      </Button>
      <Card.Img variant="top" src={course.img} style={{ height: '200px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Card.Text>Time: {course.hours}</Card.Text>
        <Button variant="primary">Study</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
