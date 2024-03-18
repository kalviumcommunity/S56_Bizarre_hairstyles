import React, { useState, useEffect } from "react";
import "./Explore.css";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Explore() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [uniqueUsers, setUniqueUsers] = useState(new Set());

  useEffect(() => {
    axios
      .get("https://s56-bizarre-hairstyles.onrender.com/getdata")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFilteredData(res.data);
        const users = new Set(res.data.map((item) => item.user));
        setUniqueUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (_id) => {
    try {
      console.log("Deleted ID:", _id);
      axios.delete(`https://s56-bizarre-hairstyles.onrender.com/delete/${_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedUser === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.user === selectedUser);
      setFilteredData(filtered);
    }
  }, [selectedUser, data]);

  return (
    <>
      <Navbar />
      <h1 className="explore-title">Explore</h1>
      <select
        className="drop-down"
        value={selectedUser}
        onChange={(event) => setSelectedUser(event.target.value)}
      >
        <option value="">All Users</option>
        {[...uniqueUsers].map((userName) => (
          <option key={userName} value={userName}>
            {userName}
          </option>
        ))}
      </select>
      {filteredData.map((info) => (
        <div className="explore" key={info._id}>
          <img className="explore-img" src={info.image} alt="Explore Img" />
          <div className="details">
            <h3 className="title">Name: {info.hairstyle_name}</h3>
            <h4 className="description-img">Description: {info.description}</h4>
            <h4 className="bizarreness">
              <strong>Bizarreness Level:</strong> {info.bizarreness_level}
            </h4>
            <h5 className="category">
              <strong>Category:</strong> {info.category}
            </h5>
            <h5 className="accessories">
              <strong>Accessories:</strong> {info.accessories_involved}{" "}
            </h5>
            <Link to={`/update/${info._id}`}>
              <button className="Update-button">Update</button>
            </Link>
            <button
              className="Delete-button"
              onClick={() => handleDelete(info._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
