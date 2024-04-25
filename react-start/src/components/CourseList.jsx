import { useState, useEffect } from 'react';
import Course from './Course';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import courseData from '../course_data.json'
import '../style.scss';

function CourseList() {
  const courseArray = Object.entries(courseData).map(([key, value]) => ({ ...value, key }));
  const [visibleCount, setCounter] = useState(1);
  const handleClick = () => setCounter(visibleCount + 1);
  return (
    <>
    <Row className="g-4 CourseList_cards-center">
      {courseArray.slice(0,visibleCount).map((course) => (
        <div key={course.key} className="col-auto">
          <Course course={course} />
        </div>
      ))}
    </Row>
    <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" size="lg" onClick={handleClick}>
          More
        </Button>
      </div>
    </>
  );
};

export default CourseList;
