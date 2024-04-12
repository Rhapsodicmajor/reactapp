import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import universityData from '../data';

function Main() {
  return (
    <Container className="my-5" style={{ minHeight: 'calc(100vh - 144px)' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ width: '100%', margin: '0 auto' }}>
            <CardImg variant="top" src={universityData.imageUrl} style={{ width: '150%', height: 'auto', marginLeft: '-25%' }} />
            <CardBody>
              <CardTitle>{universityData.title}</CardTitle>
              <CardText>{universityData.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
