import React, { useState } from "react";
import ReactPlayer from "react-player";

import Item from "../PlayList/Item";
import PlayerControls from "./Controls";

function Player(props: any) {
  const [config, setConfig] = useState<any>({ isPlay: true });

  return (
    <div id="player-container">
      <div id="player-content">
        <Item
          title={props?.item?.title}
          image={props?.item?.image}
          duration={props?.item?.duration}
          path={props?.item?.path}
          isDuration={false}
        />
        <ReactPlayer
          url={props?.item?.path}
          width="0"
          playing={config?.isPlay}
        />
        <PlayerControls
          currentPlay={config.isPlay}
          isPlay={(isActive) => setConfig({ isPlay: isActive })}
        />
      </div>
    </div>
  );
}
export default Player;
