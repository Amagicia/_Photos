arr=[
    {name:"John",img:"https://images.unsplash.com/photo-1708458927308-f798522882a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John2",img:"https://images.unsplash.com/photo-1700895718129-2b5651e9f8e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1672810579722-3fa2b4592e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1705261204230-bda3a0b1ca6f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1705261204214-c653ec631513?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1672811256374-137ece5d4316?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1705261204230-bda3a0b1ca6f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"John",img:"https://images.unsplash.com/photo-1586576858610-e4c2930456a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
function show(){
    var clutter="";
    arr.forEach(function(obj){
        clutter+=`<div class="card">
        <img class="pic" src="${obj.img}" alt="img" />
        <div>lorem uyqw ${obj.name}</div>
      </div>`;
        console.log(clutter)
    });
    document.querySelector(".main").innerHTML=clutter;
}
show();