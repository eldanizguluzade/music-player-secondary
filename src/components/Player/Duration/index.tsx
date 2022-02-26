interface Time {
  time: string;
}

function Duration(props: Time) {
  return (
    <div className="duration">
      <span>{props.time}</span>
    </div>
  );
}

export default Duration;
