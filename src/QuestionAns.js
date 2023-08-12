import React, {useMemo,useState} from 'react'
import "./QuestionAns.css"
import axios from 'axios'

function QuestionAns() {
  const[data,setData]=useState()
  
  useMemo(()=>{
    axios.get("https://opentdb.com/api.php?amount=10")
    .then((res)=>setData(res.data.results))
  },[])
  
 
  
  if(!data)
  {
    return <div>loading</div>
  }
  return(
    <div>
      < div className="question">{data.map((item)=>{
        return (<>
        <div>{item.question}</div>
        <div>{item.correct_answer}</div>
        </>)
        })}</div> 
      
    </div>
  )
}

export default QuestionAns