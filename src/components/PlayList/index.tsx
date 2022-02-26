import Item from "./Item";

type PlayList = {
  //Types of data
};

const PlayList: React.FC<PlayList> = (props) => {
  return (
    <div id="playlist">
      <h2>PlayList</h2>
      <ul>
        <li>
          <button className="item-btn">
            <Item
              title="Elovset Dayi - Diamonds"
              image="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
              duration="3:59"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PlayList;
