import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-6xl">
      <Navbar />
      <div className="flex items-center flex-grow">
        <Hero />
      </div>
    </div>
  );
}

export default App;
