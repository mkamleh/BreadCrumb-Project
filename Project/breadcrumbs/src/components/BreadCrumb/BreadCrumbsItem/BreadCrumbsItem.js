import {useDispatch} from "react-redux";
import "./BreadCrumbsItem.css"

const BreadCrumbsItem = (props) =>{
    // returning the path name and adding onclick method for
    //redux dispatch func so when path is clicked the state changes to the right path
    const dispatch = useDispatch()

    return (
        <span className = "item" onClick={ ()=> dispatch(  {type:"goBack", payload:{id:props.id} }) }>{props.name.slice(1).replace("/",".")}</span>
    );
}

export default BreadCrumbsItem