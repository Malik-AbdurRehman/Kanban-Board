import { useContext } from "react";
import { Container } from "./Container";
import { Context } from "./context"; 

const Tiles = () => {
  const { backlogTasks, doingTasks, reviewTasks, doneTasks } = useContext(Context);

  return (
    <div className="flex flex-row flex-wrap justify-center max-w-[1500px] mx-auto p-3">
      <Container color="#f88c94" items={backlogTasks} title="Backlog" />
      <Container color="#f8e48c" items={doingTasks} title="Doing" />
      <Container color="#90f48c" items={reviewTasks} title="Review" />
      <Container color="#90e4f4" items={doneTasks} title="Done" />
    </div>
  );
};

export default Tiles;
