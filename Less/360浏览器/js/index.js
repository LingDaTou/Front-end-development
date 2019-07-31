window.onload = function () {
    new fullpage('#fullpage', {
        //options here
        sectionsColor : ['#0da5d6', '#2ab561','#de8910',"#16ba9d",'#0da5d6'],
        verticalCentered: false,

        afterLoad : function (origin, destination, direction) {
            if(origin!==null){
                origin.item.className = origin.item.className.replace("current","");
            }
            destination.item.className = destination.item.className+" current";
        }
    });
};