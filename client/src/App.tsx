import { MUIRLT } from '@app/MUIRLT';
import { AppRouter } from '@appRouter';
import { AddSet } from '@pages/stock';
import './App.css';

function App() {

  return (
    <div className="App">
      <MUIRLT>
        <AppRouter />
      </MUIRLT> 
    </div>
  );
}

export default App;
