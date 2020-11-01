import React from "react";

const Notification = ({ type, children }) => {
  return <div className={`notification notification-${type}`}>{children}</div>;
};

export default Notification;
