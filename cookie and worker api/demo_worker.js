let i = 0;
function timeCount(){
    i++;
    postMessage(i);
    setTimeout("timeCount()",1000);
}
timeCount();