import Duration from "../../Player/Duration";
import { IItem } from "../../../models";

function Item(props: IItem) {
  return (
    <div className="item-container">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="title">{props.title}</div>
      {props?.isDuration && <Duration time={props.duration} />}
    </div>
  );
}

export default Item;
