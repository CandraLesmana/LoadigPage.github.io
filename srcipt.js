var p = document.getElementById('pholder');
var load = 0;

setInterval(()=>{
    if(load == 100){
        clearInterval();
        window.close('index.html');
        window.open('menu.html');
    }else{
        load += 1;
        p.innerHTML = "<b>" + load + "%</b>";
    }
},40)