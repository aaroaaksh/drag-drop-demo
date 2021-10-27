import React from "react";
import Card from '../Card'

const Bucket = ({
  id,
  title,
  tasks,
  bucketDropHandler
}) => {
  const dragOverHandler = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
  };
  const dropHandler = (evt) => {
    const taskId = evt.dataTransfer.getData('taskId');
    bucketDropHandler({id: taskId, bucket_id: id})
  }
  const TasksList = () => {
    if(tasks?.length) {
      return tasks.map(task => <Card key={task.id} id={task.id} title={task.title} parent={id} />)
    }
    return <></>;
  };

  return(
    <li className='bucket' id={id} onDragOver={dragOverHandler} onDrop={dropHandler}>
        <h3 className='bucket-name'>{title}</h3>
        <TasksList />
      </li>
  );
}

export default Bucket;