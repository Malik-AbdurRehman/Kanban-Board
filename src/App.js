import "./App.css";
import TaskContext from "./context";
import Tiles from "./tiles";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Research API",
      text: "Explore available APIs for weather data",
      class: "Backlog",
    },
    {
      id: 2,
      title: "Create Wireframes",
      text: "Design rough layout for user dashboard",
      class: "Backlog",
    },
    {
      id: 3,
      title: "Implement Login",
      text: "Create login form with validation",
      class: "Doing",
    },
    {
      id: 4,
      title: "Set up Firebase",
      text: "Connect project to Firebase for auth and DB",
      class: "Doing",
    },
    {
      id: 5,
      title: "UI Cleanup",
      text: "Check margin and padding consistency",
      class: "Review",
    },
    {
      id: 6,
      title: "Project Setup",
      text: "Initialized project structure and dependencies",
      class: "Done",
    },
    {
      id: 7,
      title: "GitHub Repo Created",
      text: "Set up Kanban_Board repository on GitHub",
      class: "Done",
    },
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
