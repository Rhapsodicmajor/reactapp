import React from 'react';
import Course from './Course';
import { Row } from 'react-bootstrap';
import courseData from '../course_data.json'
import './CourseList.scss';

function CourseList() {
  const courseArray = Object.entries(courseData).map(([key, value]) => ({ ...value, key }));
  return (
    <Row className="g-4 CourseList__cards-center">
      {courseArray.map((course) => (
        <div key={course.key} className="col-auto">
          <Course course={course} />
        </div>
      ))}
    </Row>
  );
};

export default CourseList;
