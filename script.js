let allbtns=document.getElementsByTagName('button')


let copyarray=[];

for(let i=0;i<allbtns.length;i++){
    copyarray.push(allbtns[i].classList[1])
}


function btncolorchange(tag){
    if(tag.value==='red'){
        redcolorchange();
    }else if(tag.value=='green'){
        greencolorchange();
    }else if(tag.value=='random'){
        randomcolorchange();
    }else if(tag.value=='reset'){
        resetcolor();
    }
}

function redcolorchange(){
    for(let i=0;i<allbtns.length;i++){
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add('btn-danger')
    }
}

function greencolorchange(){
    for(let i=0;i<allbtns.length;i++){
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add('btn-success')
    }
}

function randomcolorchange(){
    colors=['btn-success','btn-info','btn-primary','btn-danger','btn-warning']
    

    for(let i=0;i<allbtns.length;i++){
        let index=Math.floor(Math.random()*5)
        color=colors[index]
        console.log(color)
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add(color)
    }
}

function resetcolor(){
    for(let i=0;i<allbtns.length;i++){
        allbtns[i].classList.remove(allbtns[i].classList[1])
        allbtns[i].classList.add(copyarray[i])
    }
}


