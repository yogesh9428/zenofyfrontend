import React, { useState } from "react";
import UserCard from "./UserCard";
import "../styles/UserList.css";

const UserList = ({ users }) => {
  // State for search input
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  // Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Function to sort users by name
  const handleSort = () => {
    setSorted(!sorted);
  };

  const sortedUsers = sorted
    ? [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name))
    : filteredUsers;

  return (
    <div className="user-list">
      <div className="user-list-header">
        <h2>User List</h2>
        <div className="search-sort">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSort} className="sort-btn">
            Sort by Name
          </button>
        </div>
      </div>
      <div className="user-cards">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
