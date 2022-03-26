import React from "react";
import { Button, Card, Col, Typography } from "antd";
import { addAuthors } from "../../sevices/addAuthors";
import { removeAuthors } from "../../sevices/removeAuthors";

const { Text, Link, Paragraph } = Typography;

const SingleAuthor = ({ author }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { name, bio, link } = author;

  // handle add to favourites
  const handleAddToFavorite = (author) => {
    addAuthors(author);
  };

  // remove from favourite
  const handleRemoveFromFavorite = (author) => {
    removeAuthors(author);
  };

  // check favourite
  React.useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("ids"));
    if (ids && ids[author._id]) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  // render button conditionally
  const renderButton = () => {
    if (isFavorite) {
      return (
        <Button
          onClick={() => handleRemoveFromFavorite(author)}
          danger
          type='primary'
        >
          Remove From Favourite
        </Button>
      );
    } else {
      return (
        <Button onClick={() => handleAddToFavorite(author)} type='primary'>
          Add To Favourite
        </Button>
      );
    }
  };
  return (
    <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card style={{ margin: 6 }}>
        <Text>
          <Text strong>Name:</Text> {name}
        </Text>
        <br />
        <Paragraph ellipsis={{ rows: 3 }}>
          <Text strong>Bio:</Text> {bio}
        </Paragraph>{" "}
        <br />
        <Link ellipsis href={link} target='_blank'>
          <Text strong>Link:</Text> {link}
        </Link>
        <div style={{ marginTop: 10 }}>{renderButton()}</div>
      </Card>
    </Col>
  );
};

export default SingleAuthor;
