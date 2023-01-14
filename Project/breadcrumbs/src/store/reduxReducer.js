const intialState = {link:"children" , linkArray: ["children"] , isPage:false}

//state contains three variables
//1) link: represnts current path in tree
//2) linkedArray: represents all the subpaths taken to reach this stage
//3)isPage : boolean variable that represents if opened directory is page is folder

//if action is "goforward" then add pressed subpath to link and arraylink 
//differnt action are taken if clicked directory is file or folder

//if action is "gobackward" which mean an item from the breadcrumb is clicked so we need 
//to go back
const reduxReducer = (state = intialState ,action) => {
  var newState = {...state}
  if (action.type === "goForward"){
      if (action.payload.type === "dir"){
          const newLink = state.link + "." + action.payload.parent +".children"
          newState = {link: newLink , linkArray: [...state.linkArray,`.${action.payload.parent}`,".children"] , isPage : false }
        }else{
          const newLink = state.link + "." + action.payload.parent
          newState = {link: newLink , linkArray: [...state.linkArray,`.${action.payload.parent}`]  , isPage : true }
        }
  }else if(action.type === "goBack"){
      //create new Array from root to clicked path and remove the rest
      //creating link to be used in api call by joing the newArray
      const newArr = state.linkArray.slice(0,action.payload.id+2)
      const newLink = newArr.join("")
      newState = {link: newLink , linkArray: newArr  , isPage : action.payload.id!==state.linkArray.length-1?false:true }
  }
  return newState
}

export default reduxReducer