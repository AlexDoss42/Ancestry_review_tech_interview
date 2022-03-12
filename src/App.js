

function App() {
  console.log(111, window.location.href)
  return (
    <div className="App">
      <nav>
        <h3  style={{ display: 'inline-block' }}>Ancestry</h3>
        <ul style={{ listStyleType: "none", display: 'inline-block' }}>
            <li style={{ display: 'inline-block' }}>Home</li>
            <li style={{ display: 'inline-block' }}>DNA</li>
            <li style={{ display: 'inline-block' }}>Tree Page</li>
            <li style={{ display: 'inline-block' }}>Search</li>
            <li style={{ display: 'inline-block' }}>Extras</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
