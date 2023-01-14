import {useSelector} from "react-redux";
import "./File.css"
import fileInside from "../../../assets/images/fileInside.jpeg"


const File =  ()=> {
    //getting gloabal redux state
    const linkArray = useSelector(state => state.linkArray)
    //this component is for open files 
    //imges is added and file name is printed using the the last element in linkArray array
    return (
        <div className="parentt"> 
        <div className="img2Parent"> <img src={fileInside} alt="img"/> </div>
        {  `this is page ${linkArray[(linkArray.length)-1].replace("/",".") }` }</div>
    );
}

export default File