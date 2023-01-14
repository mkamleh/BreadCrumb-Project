import BreadCrumbsItem from "./BreadCrumbsItem/BreadCrumbsItem"   
import {useSelector} from "react-redux";
import "./BreadCrumb.css";



const BreadCrumb = () =>{
    //calling breadCrub array which has all sub paths from  redux state
    const linkArray = useSelector(state => state.linkArray)

    return (
        <div className= "parent">
            {/* adding root to enable going back to root */}
            <BreadCrumbsItem name =".root" key = {-1} id={-1} /> 
            { 
            // going through subpaths and mapping them to breadCrub item
            // only map to breadCrub item if subpath is valid folder name because Bcramb array also contains childrens path to simplify program
            linkArray.map( (item,idx)  => ( 
                (item !==".children" && item !=="children") ?  <BreadCrumbsItem  key={idx} id={idx} name = {item}/>  : null
            ))    
            }
        </div>
    );
}

export default BreadCrumb