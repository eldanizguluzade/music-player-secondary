type TControls = {
  currentPlay: boolean;
  isPlay: (isPlay: boolean) => void;
};

const PlayerControls: React.FC<TControls> = (props) => {
  return (
    <div className="control-btn">
      <button className="btn-primary">Skip Previous</button>
      <button
        className="btn-primary"
        onClick={() => props.isPlay(!props.currentPlay)}
      >
        {!props.currentPlay ? "Play" : "Pause"}
      </button>
      <button className="btn-primary">Next Previous</button>
    </div>
  );
};

export default PlayerControls;
