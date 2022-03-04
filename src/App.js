import './App.css';
import ShowSetList from './pages/ShowSetList';
import ShowSet from './pages/ShowSet';
import { PATH_REGEX } from './utils/constants';
import Header from './components/Header/Header';

function App() {    
  let path = window.location.pathname
  path = path.match(PATH_REGEX)
  let CurrentView
  
  if(path !== null) {
    if(path[2] === 'set/' && path[3] !== "") {
      CurrentView = ShowSet(path[3])
    }
  }
  
  if(CurrentView === undefined) {
    CurrentView = ShowSetList()
  }

  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
        {CurrentView}
      </div>      
    </div>
  );
}

export default App;
