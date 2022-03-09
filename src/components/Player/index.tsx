import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IItem } from "../../models";

import Item from "../PlayList/Item";
import PlayerControls from "./Controls";

function Player(props: any) {
  const [config, setConfig] = useState<any>({ isPlay: true });
  const [item, setItem] = useState<IItem>();

  const currentlyMusic = () => {
    if (props?.data)
      props.data.map(
        (item: IItem) => item.id === props.choosedId && setItem(item)
      );
  };

  const changeMusic = (itemId: any) => {
    if (props?.data)
      props.data.map((item: IItem) => item.id === itemId && setItem(item));
  };

  useEffect(() => {
    if (props?.data) currentlyMusic();
  }, [props]);

  return (
    <div id="player-container">
      <div id="player-content">
        {item && (
          <Item
            title={item?.title}
            image={item?.image}
            duration={item?.duration}
            path={item?.path}
            isDuration={false}
          />
        )}

        <ReactPlayer url={item?.path} width="0" playing={config?.isPlay} />
        <PlayerControls
          currentId={item?.id}
          currentPlay={config.isPlay}
          isPlay={(isActive) => setConfig({ isPlay: isActive })}
          nextPlay={(nextId: any) => changeMusic(nextId)}
          prevPlay={(prevId: any) => changeMusic(prevId)}
        />
      </div>
    </div>
  );
}
export default Player;
