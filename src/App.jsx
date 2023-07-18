import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import ActionPage from './Components/ActionPage';

function App() {
  const [showActionPage, setShowActionPage] = useState(false);

  function handleSearchClick(){
    setShowActionPage(true);
  }

  return (
    <>
      {showActionPage ? (
        <ActionPage />
      ) : (
        <>
          <Navbar />
          <Search onSearchClick={handleSearchClick} />
        </>
      )}
    </>
  );
}

export default App;
