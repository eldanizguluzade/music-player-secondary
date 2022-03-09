type TControls = {
  currentId: any;
  currentPlay: boolean;
  isPlay: (isPlay: boolean) => void;
  nextPlay: (itemId: any) => void;
  prevPlay: (itemId: any) => void;
};

const PlayerControls: React.FC<TControls> = (props) => {
  return (
    <div className="control-btn">
      <button className="btn-primary" onClick={() => props.prevPlay(props.currentId - 1)}>
        Previous
      </button>
      <button
        className="btn-primary"
        onClick={() => props.isPlay(!props.currentPlay)}
      >
        {!props.currentPlay ? "Play" : "Pause"}
      </button>
      <button className="btn-primary" onClick={() => props.nextPlay(props.currentId + 1)}>
        Next
      </button>
    </div>
  );
};

export default PlayerControls;
