import React from "react";

const friends = [
  { name: "Mango", status: "Online", icon: "🐱" },
  { name: "Kiwi", status: "Offline", icon: "🐦" },
  { name: "Ajax", status: "Online", icon: "🐶" },
  { name: "Jay", status: "Online", icon: "🦜" },
  { name: "Poly", status: "Offline", icon: "🐷" },
];

const FriendList = () => {
  return (
    <>
      <div className="friend-list">
        {friends.map((friend, index) => (
          <div key={index} className="friend-item">
            <span className="icon">{friend.icon}</span>
            <div className="friend-info">
              <span className="name">{friend.name}</span>
              <span className={`status ${friend.status.toLowerCase()}`}>
                {friend.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendList;
