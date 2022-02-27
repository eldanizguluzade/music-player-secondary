import PlayerControls from "./Controls";

function Player(props:any) {
  return (
    <div id="player-container">
      <div id="player-content">
        <PlayerControls />
      </div>
    </div>
  );
}
export default Player;
