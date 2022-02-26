interface Item {
  title: string;
  duration: string;
  image: string;
}

function Item(props: Item) {
  return (
    <div className="item-container">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="title">{props.title}</div>
      <div className="duration">{props.duration}</div>
    </div>
  );
}

export default Item;
