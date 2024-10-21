import NavBar from "./components/navbar";
import MainSection from "./sections/main";

function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <NavBar />
      <main className="flex-grow">
        <MainSection />
      </main>
    </div>
  );
}

export default App;
