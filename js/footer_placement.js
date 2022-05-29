let app = document.querySelector('#footer');
let details = app.getBoundingClientRect();
//console.log(details)

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

//console.log(viewportHeight, viewportWidth);
//console.log("@@@@@@",details.bottom)

if (details.bottom<viewportHeight)
{
    // add <br> tags
    var s1= document.getElementById('fufu');
    var s2 = s1.getElementsByTagName("p");
    //console.log("#####",s2)
    var i=details.bottom;
    for(;i<=viewportHeight;i=i+23)
    {
        var newElem = document.createElement("BR");
        s1.insertBefore(newElem, s2[0]);
    }  
}
