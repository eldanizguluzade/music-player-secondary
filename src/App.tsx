import React, { useEffect, useState } from "react";
import "./styles/index.css";
import PlayList from "./components/PlayList";
import Player from "./components/Player";
import { IItem } from "./models";

function App() {
  const [data, setData] = useState<any>([
    {
      id: 0,
      title: "Elovset.D - Diamonds",
      image:
        "https://damassets.autodesk.net/content/dam/autodesk/www/homepage/fy22/me-industry-solutions-thumb-720x480.jpg",
      duration: "3:11",
      path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 1,
      title: "Elovset.D - Diamonds",
      image:
        "https://damassets.autodesk.net/content/dam/autodesk/www/homepage/fy22/me-industry-solutions-thumb-720x480.jpg",
      duration: "3:11",
      path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id:2,
      title: "Elovset.D - Diamonds",
      image:
        "https://damassets.autodesk.net/content/dam/autodesk/www/homepage/fy22/me-industry-solutions-thumb-720x480.jpg",
      duration: "3:11",
      path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
  ]);
  const [item, setItem] = useState<IItem>();

  return (
    <div className="App">
      <PlayList data={data} choosed={(item: IItem) => setItem(item)} />
      <Player item={item} />
    </div>
  );
}

export default App;
