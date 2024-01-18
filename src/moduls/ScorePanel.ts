// 定义记分牌
class ScorePanel{
    score=0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    // 设置一个限制等级的变量
    maxLevel:number;

    upScore:number;
    constructor(maxLevel:number = 10,upScore:number=10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel =maxLevel;
        this.upScore = upScore;
    }

    // 设置加分方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score% this.upScore ===0){
            this.levelUp();
        }
    }
    // 升级
    levelUp(){
        if(this.level <this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
       
    }
}

export default ScorePanel;