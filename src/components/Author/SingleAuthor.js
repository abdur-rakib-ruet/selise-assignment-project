import React from "react";
import { Button, Card, Col, Typography } from "antd";
import { addAuthors } from "../../sevices/addAuthors";

const { Text, Link } = Typography;

const SingleAuthor = ({ author }) => {
  const { name, bio, link } = author;

  // handle add to favourites
  const handleAddToFavorite = (author) => {
    addAuthors(author);
  };
  return (
    <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card style={{ margin: 6 }}>
        <Text>
          <Text strong>Name:</Text> {name}
        </Text>
        <br />
        <Text>
          <Text strong>Bio:</Text>{" "}
          {bio.length > 100 ? `${bio.slice(0, 100)} ...` : bio}
        </Text>{" "}
        <br />
        <Link href={link} target='_blank'>
          <Text strong>Link:</Text> {link}
        </Link>
        <div style={{ marginTop: 10 }}>
          <Button onClick={() => handleAddToFavorite(author)} type='primary'>
            Add Favourite
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default SingleAuthor;
