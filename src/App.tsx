import './App.css';
import Title from './components/title.tsx';
import Intro from './components/Syed/intro.tsx';
import Basketball from './components/Doanh/basketball.tsx';
import Cooking from './components/Syed/Cooking.tsx';

function App() {
    return (
        <div className="App">
            <Title />
            <Intro name1="Doanh Phung" name2="Syed Shazli" />
            <Basketball />
            <Cooking />
        </div>
    );
}

export default App;