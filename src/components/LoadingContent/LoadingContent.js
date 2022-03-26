import { Skeleton, Card, Col } from "antd";
import React from "react";

const LoadingContent = () => {
  return (
    <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card style={{ margin: 6 }}>
        <Skeleton loading />
      </Card>
    </Col>
  );
};

export default LoadingContent;
