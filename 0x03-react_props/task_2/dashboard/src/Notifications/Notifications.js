import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = function () {
  return (
    <div
      className="Notifications"
      style={{
        display: "flex-box",
        position: "absolute",
        top: "10px",
        right: "8px",
        width: "95%",
        height: "7%",
      }}
    >
      <p
        style={{
          display: "inline-block",
          position: "absolute",
          top: "-70px",
          left: "-3%",
        }}
      >
        Here is the list of notifications
      </p>
      <button
        type="button"
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
        style={{
          display: "inline-block",
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "0",
        }}
      ></button>
      <ul
        style={{
          display: "inline-block",
          position: "absolute",
          top: "30%",
          left: "10px",
        }}
      >
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
