import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = ({ course }) => {
  return (
    <Card style={{ width: '18rem' }} key={course.id}>
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
