class FakeAPI{

  root = `{
    "type": "dir",
    "children": {
      "home": {
        "type": "dir",
        "children": [{
          "myname": {
            "type": "dir",
            "children": {
              "filea.txt": {
                "type": "file"
              },
              "fileb.txt": {
                "type": "file"
              },
              "projects": {
                "type": "dir",
                "children": {
                  "mysupersecretproject": {
                    "type": "dir",
                    "children": {
                      "mysupersecretfile": {
                        "type": "file"
                      }
                    }
                  }
                }
              }
            }
          }
        }]
      }
    }
  }`
    

    //replace "." in files extension names with "/" as "." 
    //will cause problems when reading nested object
    root2 = this.root.replace(".","/").replace("[","").replace("]","");
    cache = new Map() 
  
  

      
   // converting input to javascript objects
   s = JSON.parse(this.root2)
  
   //access methos return the correct nested path to get new childrens
   access = (path, object) => {
      return path.split('.').reduce((o, i) => o[i], object)
  }

  //return the array of directories for the crospending link
  fakeApI = (link) => {
      if (this.cache.has(link))return this.cache.get(link)
      var myDataresult = this.access(link,this.s)
        myDataresult = Object.keys(myDataresult).map(key => {
          return {type: myDataresult[key].type ,key};
        })
      this.cache.set(link,myDataresult)
      return myDataresult
  }
}


//config on server
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const fa = new FakeAPI()

//handels api request to "/api end point and extracts query link parameter from call"
//calling fakeapi method with the extracted link to get current directory items
//returning json respond
app.get("/path/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const arr = req.url.split("/") 
    const list = fa.fakeApI(arr[(arr.length)-1])
    res.json(list);

  });

//config server to list on PORT variable set above 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





