class Snack{
    // constructor(width,height,headerImg,bodyImg){
    constructor(obj){
        obj=obj || {};
        this.width=obj.width || 100;
        this.height=obj.height || 100;
        this.headerImg=obj.headerImg || "images/head.png";
        this.bodyImg=obj.bodyImg || "images/body.png";
        this.SnackMap=obj.snackMap || {};
        this.bodies=[
            {x:2,y:1,type:1},
            {x:1,y:1,type:0},
            {x:0,y:1,type:0}
        ];
        document.body.onkeydown=(event)=>{
            this.key=event.key;
        };
        // 获取地图宽高
        let mapStyle=getComputedStyle(this.SnackMap.oMap);
        let mapWidth=parseInt(mapStyle.width);
        let mapHeight=parseInt(mapStyle.height);
        this.colNum=mapWidth / this.width;
        this.rowNum=mapHeight / this.height;
    }
    move(){
        for(let i=this.bodies.length-1;i>0;i--){
            this.bodies[i].x=this.bodies[i-1].x;
            this.bodies[i].y=this.bodies[i-1].y;
            this.bodies[i].type=0;
        }
        let head=this.bodies[0];
        switch (this.key) {
            case "a": head.x=head.x-1;
                break;
            case "d": head.x=head.x+1;
                break;
            case "w": head.y=head.y-1;
                break;
            case "s": head.y=head.y+1;
                break;
            default:
                head.x=head.x+1;
                break;
        }
    }
    checkBoundary(snackFood){
        let head=this.bodies[0];
        if(head.x <0 || head.x > this.colNum-1 || head.y <0 || head.y > this.rowNum-1 ){
            alert("Game Over!");
            clearInterval(this.timer);
            return false;
        }

        if(head.x === snackFood.x && head.y===snackFood.y){
            let lastBody=this.bodies[this.bodies.length-1];
            let newBody={x:lastBody.x,y:lastBody.y,type:lastBody.type};
            switch (this.key) {
                case "a": newBody.x=newBody.x+1;
                    break;
                case "d": newBody.x=newBody.x-1;
                    break;
                case "w": newBody.y=newBody.y+1;
                    break;
                case "s": newBody.y=newBody.y-1;
                    break;
                default:
                    newBody.x=newBody.x-1;
                    break;
            }
            this.bodies.push(newBody);
            snackFood.remove();
            snackFood.render();
        }
        return true;
    }
    update(snackFood){
        this.timer = setInterval(()=>{
            // 修改蛇身位置、修改蛇头位置
            this.move();

            // 判断是否越界
            let flag = this.checkBoundary(snackFood);
            if(!flag){
                return;
            }

            // 重新渲染
            this.render();
        },500)
    }
    render(){
        // 删除原有的蛇身
        let snacks=document.querySelectorAll(".snack");
        for(let i=snacks.length-1;i>=0;i--){
            let oDiv=snacks[i];
            oDiv.parentNode.removeChild(oDiv);
        }
        // 创建
        for(let value of this.bodies){
            let oDiv=document.createElement("div");
            oDiv.className="snack";
            oDiv.style.width=this.width+"px";
            oDiv.style.height=this.height+"px";
            oDiv.style.position="absolute";
            oDiv.style.left=value.x * this.width+"px";
            oDiv.style.top=value.y * this.height+"px";
            if(value.type==1){
                oDiv.style.background=`url(${this.headerImg})`
            }else{
                oDiv.style.background=`url(${this.bodyImg})`
            }
        // 添加到地图
            this.SnackMap.oMap.appendChild(oDiv);
        }
    }
}