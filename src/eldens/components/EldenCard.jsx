import React from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// const DEFAULT_IMAGE_POSITION = "top";

const EldenCard = ({ elden }) => {
  return (
    <Col className="my-3">
      <Card>
        <BCard.Header as="small">{elden.id}</BCard.Header>
        <BCard.Body>
        <BCard.Title>{elden.name}</BCard.Title>
          <BCard.Img
           // variant={DEFAULT_IMAGE_POSITION}
            src={elden.image}
            loading="lazy"
            alt={elden.name}
          />
      
        </BCard.Body>
      </Card>
    </Col>
  );
};

export default EldenCard;
