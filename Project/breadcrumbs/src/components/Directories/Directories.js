
import Folder from "./Folder/Folder";
import FileFolder from "./FileFolder/FileFolder"
import "./Directories.css";
const Directories =  (props) => {
    

    return (
        //go through childrens of last path item in breadcrumbs and return folder or file component
        //depending on item type
        //chidldrens elements are passed from app.js as props
        <div className="directories">
        {props.myData.map( (item,idx) => { 
            return  item.type === "dir" ? <Folder key = {idx}  type = {item.type} name={item.key}/> : <FileFolder key = {idx} type= {item.type} name={item.key}/> 
        })}
        </div>
    );

}


export default Directories