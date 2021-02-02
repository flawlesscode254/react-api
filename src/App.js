import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div className="App">
      {
        data.map(item => (
          <p><strong>Post</strong>{item.id}: {item.title}</p>
        ))
      }
    </div>
  );
}

export default App;
