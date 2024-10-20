import { DarkThemeToggle, Flowbite } from "flowbite-react";
import NavBar from "./components/navbar";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <NavBar/>
    </main>
  );
}

export default App;
