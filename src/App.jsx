import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {

  const api = "https://hacker-news.firebaseio.com/v0/topstories.json";

  const [hacker, setHacker] = useState([]);
  
  useEffect(() => {
      const fetchInfo = async () =>{
      const response = await fetch(api);
      const data = await response.json();
      //console.log(data);
      let mydata = [];
      for(let i = 0; i < data.length; i++) {
        if(i < 10) {
          mydata.push(data[i]);
        }
      }
      //console.log(mydata);
      return mydata;
    }
    const fetchData = async () => {
      let keys = await fetchInfo();
      let arr = [];
      for(let i in keys) {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${keys[i]}.json?print=pretty`);
        const data = await response.json();
        arr.push(data);
      }
      console.log(arr);
      setHacker(arr);
    }
    fetchData();
  }, [])


  return (
    <div className="container">
      <Header />
      <Posts hacker={hacker}/>
    </div>
  )
}

export default App;

