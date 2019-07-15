function getTimeDifference (remoteDate,currentDate){
    remoteDate= new  Date(remoteDate);
    let differTime= currentDate - remoteDate;
    let differSeconds = differTime / 1000;
    let day =  Math.floor(differSeconds / (60*60*24) );
    day = day<10 ? "0"+day : day;
    let hours =  Math.floor(differSeconds /(60*60)%24);
    hours = hours<10 ? "0"+hours : hours;
    let minutes = Math.floor(differSeconds / 60%60);
    minutes = minutes<10 ? "0"+minutes : minutes;
    let seconds = Math.floor(differSeconds % 60);
    seconds = seconds<10 ? "0"+seconds : seconds;
    return {
        day:day,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
}
