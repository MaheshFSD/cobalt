console.log("hello from Js")
var dis=document.getElementById('menuId')
var lis=document.getElementById('list')
dis.addEventListener('click',display)
var i=1;
function display(){
    if(i==1)
    {
        i=0;
        lis.style.display="block";
    }
    else
    {
        i=1;
        lis.style.display="none";
    }
}