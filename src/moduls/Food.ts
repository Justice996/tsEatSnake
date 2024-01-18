// 定义食物类
class Food {
    element:HTMLElement;
    
    

    constructor() {
        // 获取food元素
        this.element = document.getElementById('food')!;
       
    }
    //获取食物坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        // 生成随机位置
        // 0-290生成 并且是10的倍数
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        this.element.style.left = left+"px";
        this.element.style.top = top+"px";
    }
}

export default Food;
