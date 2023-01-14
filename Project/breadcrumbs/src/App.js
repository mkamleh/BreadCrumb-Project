import './App.css';
import React from "react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import {useSelector} from "react-redux";
import Directories from "./components/Directories/Directories"
import File from "./components/Directories/File/File"
import {useState,useEffect} from "react";
  
function App() {
  //getting redux state
  const state = useSelector(state => state)
  const [myData, setMyData] = useState([])
  const isPage = state.isPage
  const link = state.link

  //function to fetch directory array after providing the right link
  //setting received data to mydate state variable
  const fetchData = async (link) => {
    try{
      const res = await fetch(link);
      const json = await res.json()
      setMyData(json)
    }catch(e){
      console.log(e)
    }
    
  }
  
  //use effect hooked to call whne item is mounted and on link change
  useEffect(() => {
    if (!isPage) fetchData(`http://localhost:3001/path/${link}`)
  },[link,isPage])

  //return breadcrumb component and directiory component 
  //file component represents open file
  return (
    <React.Fragment>
      <BreadCrumb className = "breadCrumbs" />
    { !isPage ? <Directories myData= {myData} className="directlyOptions"/> :  <File/>}
    </React.Fragment>
  );
}

export default App;
