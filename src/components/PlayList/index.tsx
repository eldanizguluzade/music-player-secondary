import Item from "./Item";
import { IItem } from "../../models";

type TPlayList = {
  data: any;
  choosed: (item: IItem) => void;
  //Types of data
};

const PlayList: React.FC<TPlayList> = (props) => {
  return (
    <div id="playlist">
      <h2>PlayList</h2>
      <ul>
        {props.data &&
          props.data.map((item: IItem) => {
            return (
              <li key={item.id}>
                <button
                  className="item-btn"
                  onClick={() => props.choosed(item)}
                >
                  <Item
                    title={item.title}
                    image={item.image}
                    duration={item.duration}
                    path={item.path}
                    isDuration={true}
                  />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PlayList;
