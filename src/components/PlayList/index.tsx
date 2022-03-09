import Item from "./Item";
import { IItem } from "../../models";
import Visible from "./Visible";

type TPlayList = {
  data: any;
  choosed: (id: any) => void;
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
                  onClick={() => props.choosed(item.id)}
                >
                  <Item
                    title={item.title}
                    image={item.image}
                    duration={item.duration}
                    path={item.path}
                    isDuration={true}
                  />
                </button>
                <Visible />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PlayList;
