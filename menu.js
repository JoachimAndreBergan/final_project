function filterObjects(c){
    let x, i;
    x = document.getElementsByClassName("item");
    if (c =="all") c = "";
    for (i = 0; i< x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}