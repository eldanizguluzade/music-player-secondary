import React, { useEffect, useState } from "react";
import "./styles/index.css";
import PlayList from "./components/PlayList";
import Player from "./components/Player";
import axios from "axios";

function App() {
  const [data, setData] = useState<any>();
  const [itemId, setItemId] = useState<number>();

  const fetchPosts = async () => {
    const res = await axios.get("db.json");
    setData(res?.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <PlayList data={data} choosed={(id: any) => setItemId(id)} />
      {itemId && <Player data={data} choosedId={itemId} />}
    </div>
  );
}

export default App;
