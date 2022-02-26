import PlayerControls from "./Controls";
import Duration from "./Duration";

function Player() {
  return (
    <div id="player-container">
      <div id="player-content">
        <PlayerControls />
        <Duration time="3:58" />
      </div>
    </div>
  );
}
export default Player;
