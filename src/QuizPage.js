import React ,{useState,useMemo} from 'react'
import "./QuizPage.css"
import QuestionAns from './QuestionAns'
import axios from 'axios'
function QuizPage() {
   const[data,setData]=useState()
   
   useMemo(()=>{
    axios.get("https://opentdb.com/api.php?amount=10&category=23")
    .then((res)=>setData(res.data.results))
  },[])
  console.log("data",data);
  if(!data)
  {
    return <div>loading</div>
  }
return (
    <div className='QuizPage'>
      {data.map((item)=>{
        return <QuestionAns question={item.question} ans0={item.correct_answer}/>})}
      
    </div>
  )
}

export default QuizPage