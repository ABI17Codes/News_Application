import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar.jsx'
import NewsBoard from './Components/NewsBoard.jsx';

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div>
      <NavigationBar setCategory={setCategory} />
      <NewsBoard category={category}/>
    </div>
  )
}

export default App