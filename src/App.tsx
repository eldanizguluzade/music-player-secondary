import React, { useEffect, useState } from "react";
import "./styles/index.css";
import PlayList from "./components/PlayList";
import Player from "./components/Player";
import { IItem } from "./models";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>();
  const [item, setItem] = useState<IItem>();

  const fetchPosts = async () => {
    const res = await axios.get("db.json");
    setData(res?.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <PlayList data={data} choosed={(item: IItem) => setItem(item)} />
      {item && <Player item={item} />}
    </div>
  );
}

export default App;
