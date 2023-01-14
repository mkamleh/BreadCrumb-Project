import { useDispatch } from "react-redux";
import fileImg from "../../../assets/images/fileImg.png"
import "./FileFolder.css"

const FileFolder= (props) => {
    //subscribing to redux reduce function
    const dispatch = useDispatch()
    return (
        //this component represents file in directory
        //return div with img inside and adding onclick listner to div to activate redux reduce fucntion
        //payload is component type and component name which is passes thorogh props
        <div className="parent">
            <div onClick={() =>  dispatch( {type:"goForward", payload:{type:props.type, parent:props.name} }) }> 
            <div className="imgParent" ><img src= {fileImg}    alt="fileImg"/> </div>
            <span className="title"> {props.name.replace("/",".")}   </span> </div>  


        </div>

    );
}

export default FileFolder