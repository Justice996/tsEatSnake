// 游戏控制器

import Snake from './Snake';
import Food from "./Food";
import ScorePanel from './ScorePanel';
class GameControl {
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;

    // 记录游戏是否结束
    isLive = true;
    
    //存储蛇的移动方向
    direction :string = '';
    constructor() {
        this.snake = new Snake;
        this.food = new Food;
        this.scorePanel = new ScorePanel;
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run();
    }
    keyDownHandler(event:KeyboardEvent){
        //         ArrowUp
       // ArrowDown
       //  ArrowLeft
        //  ArrowRight
        console.log(event.key);
        // 检查按键是否合法

        this.direction = event.key;
    }
    //控制蛇移动 
    run(){
        let x = this.snake.X;
        let y = this.snake.Y;
     switch (this.direction) {
        case 'ArrowUp':
            y-=10;
            break;
            case 'ArrowDown':
                y+=10;
            break;
            case 'ArrowLeft':
                x-=10;
            break;
            case 'ArrowRight':
                x+=10;
            break;
        default:
            break;
     }
     this.checkEat(x,y);
     try {
        this.snake.X = x;
     this.snake.Y = y;
     } catch (error) {
        if (error) {
            alert('game over');
            this.isLive=false;
        }
     }
     
     this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
    }

    // 检查蛇是否吃到了食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            console.log('ch');
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        };
    }
}

export default GameControl;