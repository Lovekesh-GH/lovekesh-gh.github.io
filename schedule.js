if(!localStorage.getItem('weekData')){
    let emptyMat=[
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],

        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],

        [0,0,0,0,0,0,0],
    ]
localStorage.setItem('weekData',JSON.stringify(emptyMat))
}

function stateSet(row,column,state){
let matrix=JSON.parse( localStorage.getItem('weekData'));
matrix[row][column]=state;
localStorage.setItem('weekData',JSON.stringify(matrix));
}

function askUser(row,column){
let usrSaidYes=confirm('set this task as done?');
if(usrSaidYes){
    stateSet(row,column,1);
    document.querySelectorAll('td')[(row+1)*8+column+1].style.color='green'

}else{
    stateSet(row,column,-1);
    document.querySelectorAll('td')[(row+1)*8+column+1].style.color='red'
}
}
function stateGet(row,column) {
    return JSON.parse(localStorage.getItem('weekData'))[row][column]
}
function colorise(){
    let weekData=JSON.parse( localStorage.getItem('weekData'));
    for(let row=0;row<11;row++){
        for(let col=0;col<7;col++){
            let state=weekData[row][col];
          if(state==1)  document.querySelectorAll('td')[(row+1)*8+col+1].style.color='green'
        else  if(state==-1)  document.querySelectorAll('td')[(row+1)*8+col+1].style.color='red'
        //  else if(state==0)  document.querySelectorAll('td')[(row+1)*8+col+1].style.color='yellow'
        // else debugger
        }
    }

}
colorise()