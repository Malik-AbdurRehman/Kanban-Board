import "./App.css";
import TaskContext from "./context";
import Tiles from "./tiles";

function App() {
  const tasks = [
    { id: 1, title: "Backlog 1", text: "This is Backlog 1", class: "Backlog" },
    { id: 6, title: "Backlog 2", text: "This is Backlog 2", class: "Backlog" },
    { id: 2, title: "Doing 1", text: "This is Doing 1", class: "Doing" },
    { id: 7, title: "Doing 2", text: "This is Doing 2", class: "Doing" },
    { id: 3, title: "Review 1", text: "This is Review 1", class: "Review" },
    { id: 4, title: "Done 1", text: "This is Done 1", class: "Done" },
    { id: 5, title: "Done 2", text: "This is Done 2", class: "Done" },
  ];

  return (
    <>
      <div className="flex item-center justify-center mt-4 mb-8">
        <h1 className="text-5xl text-white font-bold">Kanban Board</h1>
      </div>
      <TaskContext tasks={tasks}>
        <Tiles />
      </TaskContext>
    </>
  );
}

export default App;
