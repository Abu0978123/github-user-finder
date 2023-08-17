import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

export default function Profile() {
  const [username, setUserName] = useState("");
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson)
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);
    if (profile) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <div>
      <div
        className="flex justify-center h-[100px] items-end"
        id="input-search"
      >
        <input
          className="rounded mx-2"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="bg-blue-400 rounded-lg px-6 text-white hover:text-black hover:bg-red-500"
        >
          Search
        </button>
      </div>
      {/* here is the display table tab */}
      <DisplayTable data={data} repositories={repositories} />
    </div>
  );
}
