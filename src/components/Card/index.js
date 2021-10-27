import React from "react";

const Card = ({id, title}) => {
  const onDragStart = (evt) => {
    evt.dataTransfer.setData('taskId', id);
  };
  return(
    <div className='task-card' draggable onDragStart={onDragStart}>{title}</div>
  );
};

export default Card;
