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

}else{
    stateSet(row,column,-1)
}
}
function stateGet(row,column) {
    return JSON.parse(localStorage.getItem('weekData'))[row][column]
}