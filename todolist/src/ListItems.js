import React from "react";
import "./ListItems.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  console.log("items === ", items);
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <input
          type="text"
          id={item.key}
          value={item.text}
          onChange={e => {
            props.setUpdate(e.target.value, item.key);
          }}
        ></input>
        <span onClick={() => props.deleteItem(item.key)}>
          {/* <FontAwesomeIcon className="faicons" icon="trash" /> */}
          Delete
        </span>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
