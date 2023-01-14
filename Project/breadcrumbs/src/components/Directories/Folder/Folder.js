import {useDispatch} from "react-redux";
import  folderImg from  "../../../assets/images/folderImg.png";
import "./Folder.css";


const Folder = (props) => {
    //getting redux reduxer func
    const dispatch = useDispatch()

    return (
        //returing div which represents folder and adding onclick lisntner to move to next path
        //onclick redux reduce function is called

        <div onClick={() =>  dispatch( {type:"goForward", payload:{type:props.type, parent:props.name} }) } > 
            <div className="imgDiv"> <img src ={folderImg} alt="folderimg"/> </div>
        
             <span className="title"> {props.name} </span>
        </div>
    );
}

export default Folder