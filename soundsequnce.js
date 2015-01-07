window.addEventListener('load',init,false);

var sounArr;

function init()
{
    
   sounArr = document.getElementsByClassName("a01");
    
    for(var i=0;i<sounArr.length-1;i++)
    {
        sounArr[i].setAttribute("onended","ply("+i+")");
        
    }
    
}

function ply(num)
{
    sounArr[num+1].play();
    
    
}