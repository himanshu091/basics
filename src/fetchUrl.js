import {useState,useEffect} from 'react';

const [articles,setArticles] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/articles')
    .then(res=>{
        return res.json();
    }).then (data=>{
        setArticles(data);
    })
  }
,[])