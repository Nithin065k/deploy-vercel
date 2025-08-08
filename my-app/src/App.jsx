import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>🚀 My Simple React Site</h1>
      </header>

      <main>
        <p>
          Welcome to my deployed React site!  
          This is a single-page example ready for Vercel.
        </p>

        <button onClick={() => alert("Hello from React!")}>
          Click Me
        </button>
      </main>

      <footer>
        <p>© 2025 My React Site</p>
      </footer>
    </div>
  );
}

export default App;
