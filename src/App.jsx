import React, {useState, useEffect} from 'react';

const App = () => {

  const api = "https://hacker-news.firebaseio.com/v0/topstories.json";

  const [hacker, setHacker] = useState([]);
  

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
        .then((data) => {
          for(let i = 0; i < data.length; i++) {
            if(i < 10) {
                fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
                .then((response) => response.json())
                  .then((data) => {
                  console.log(data)
                  setHacker(data);
                })
            }
          }
        })
  }, []);

  

  return (
    <div>
      <h1>{hacker.by}</h1>
    </div>
  )
}

export default App;

