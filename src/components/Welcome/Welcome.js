import Title from "antd/lib/typography/Title";
import React from "react";

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <Title level={1}>Welcome</Title>
    </div>
  );
};

export default Welcome;
