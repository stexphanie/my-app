import React from "react";

export default function Movie(props) {
  let star = [];
  for (let i = 0; i < props.item.grade; ++i) {
    star += (`<img src='images/star.png' alt='Star'>`);
  }
  return (
    <li className="list-group-item">
      {props.item.title}

      <button className="btn btn-sm btn-danger float-end" onClick={() => props.deleteItem(props.item.id)} >X</button>
      <image className="float-end" dangerouslySetInnerHTML={{ __html: star }}></image>

    </li>

  );
}