class SnackFood{
    constructor(width,height,img,SnackMap){
        this.width=width;
        this.height=height;
        this.img=img;
        this.SnackMap=SnackMap;
        // 获取地图宽高
        let mapStyle=getComputedStyle(this.SnackMap.oMap);
        let mapWidth=parseInt(mapStyle.width);
        let mapHeight=parseInt(mapStyle.height);
        this.colNum=mapWidth / this.width;
        this.rowNum=mapHeight / this.height;
    }
    render(){
        // 创建节点
        let oDiv=document.createElement("div");
        oDiv.style.width=this.width+"px";
        oDiv.style.height=this.height+"px";
        oDiv.style.background=`url(${this.img})`;
        // 设置随机位置
        let {x,y}=this.generateLocation(SnackMap);
        this.x=x;
        this.y=y;
        oDiv.style.position="absolute";
        oDiv.style.left=x * this.width+"px";
        oDiv.style.top=y * this.height+"px";
        // 加入地图中
        this.SnackMap.oMap.appendChild(oDiv);
        this.oFood=oDiv;
    }
    remove(){
        this.oFood.parentNode.removeChild(this.oFood);
    }
    generateLocation(){
        // 生成随机位置
        let x = getRandomIntInclusive(0,this.colNum-1);
        let y = getRandomIntInclusive(0,this.rowNum-1);
        return {x:x,y:y};
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}