import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';
import {MovieProvider} from './MovieContext';

function App() {

  

  return (
    <MovieProvider>
      <div className="App">
        <Header /> 
        <AddMovie />
        <MovieList />
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
