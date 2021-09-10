function App() {
  const name = 'Melih'
  const x = true
  return (
    <div className="container">
      <h1>Hi! {name}</h1>
      <h2> {x ? "Ja" : "Nein"} </h2>
    </div>
  );
}

export default App;
