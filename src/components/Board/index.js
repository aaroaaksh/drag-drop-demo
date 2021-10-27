import React, { useState } from "react";
import Bucket from "../Bucket";
import mockData from "../../mock";

const Board = () => {
  const [tasks, setTasks] = useState(mockData.tasks);

  const dropHandler = (draggedTask) => {
    const modifiedTasks = tasks.map(task => {
      if(task.id === draggedTask.id) {
        task.bucket_id = draggedTask.bucket_id;
      }
      return task;
    });
    setTasks(modifiedTasks);
  };
  const BucketsList = () => {
    return mockData.buckets.map( ({bucket_id, title}) => {
      const bucketTasks = tasks.filter(task => task.bucket_id === bucket_id);
      return <Bucket bucketDropHandler={dropHandler} key={bucket_id} id={bucket_id} title={title} tasks={bucketTasks} />
    });
  }
  return(
    <ul className='board'>
      <BucketsList />
    </ul>
    );
  };
  
  export default Board;