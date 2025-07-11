import { createContext, useState } from "react";

export const Context = createContext();


const TaskContext = ({ children, tasks }) => {
  const [backlogTasks, setBacklogTasks] = useState(tasks.filter(task => task.class === "Backlog"));
  const [doingTasks, setDoingTasks] = useState(tasks.filter(task => task.class === "Doing"));
  const [reviewTasks, setReviewTasks] = useState(tasks.filter(task => task.class === "Review"));
  const [doneTasks, setDoneTasks] = useState(tasks.filter(task => task.class === "Done"));

  return (
    <Context value={{
      backlogTasks,
      setBacklogTasks,
      doingTasks,
      setDoingTasks,
      reviewTasks,
      setReviewTasks,
      doneTasks,
      setDoneTasks,
    }}>
      {children}
    </Context>
  );
};

export default TaskContext;
