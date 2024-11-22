let nav_list = document.getElementById("nav_list")
nav_list.style.maxHeight = "0px"; 

function toggleMenu(){
    if(nav_list.style.maxHeight == "0px"){

        nav_list.style.maxHeight = "300px";
    }else{
        nav_list.style.maxHeight = "0px";
    }
}