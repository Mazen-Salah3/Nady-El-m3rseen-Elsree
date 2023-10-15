let btn = document.getElementById('button')
let output = document.getElementById('output')



let Names = ['مازن', 'مازن' , 'مازن' , 'مازن' , 'مروان كيلانى' , 'جمعة' , 'محمد شريف' , 'محمد محمود' , 'فارس' ,
'مروان احمد' , 'محمد سامى'] 

btn.addEventListener('click', 
function(){
    var winner = Names[Math.floor(Math.random()*Names.length)]
    output.innerHTML=winner;
}
)