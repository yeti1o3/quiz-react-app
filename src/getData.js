function getData(){
    const[data,setData]=useState([]);
  useMemo(()=>{
  axios.get("https://opentdb.com/api.php?amount=10")
  .then(function(response){
    console.log("response",response.data.results);
    setData(response.data.results);
  })
  .catch(function(error){
    console.log("its an error",error);
  })},[])
}