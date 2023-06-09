var colors1 = "8e9aaf-cbc0d3-efd3d7-feeafa-dee2ff".split("-").map(a=>"#"+a)

class Monster{  //宣稱一個怪物類別。它稱為Monster
    constructor(args){  //預設值，基本資料(物件的顏色、移動的速度、大小、物件顯示的位置......)
        this.r = args.r || random(50,150)  //設計怪物的主體，如果傳參數args.r來設定怪物大小，沒有傳參數，就以100為主
        this.p = args.p || createVector(random(width),random(height))  //建立一個向量，(x:width/2,y:height/2)
        this.v = args.v || createVector(random(-1,1),random(-1,1))  //移動的速度，如果沒有傳參數args，就會利用亂數(-1,1)，抽出x,y軸的移動速度
        this.color = args.color || random(colors1)
        this.mode = random(["happy","bad"])
        this.dead = false  //代表還活著
        this.timenum = 0
      }
    draw(){  //畫出元件
        if(this.dead == false){
        }
        else{  //怪物死亡畫面
            this.timenum=this.timenum+1
            push() //把原點(0,0)座標移到物件中心位置
              translate(this.p.x,this.p.y)
              fill(this.color)
              noStroke()
              ellipse(0,0,this.r)
              stroke(255)
              line(-this.r/2,this.r/2,0)
              stroke(this.color)
             strokeWeight(4)
             noFill()
             //line(this.r/2,0,this.r,0)
             for(var j=0;j<8;j++){
                 rotate(PI/4)
                 line(this.r/2,0,this.r,0)
                 }
             pop() 
            }
        }
       
    update(){  //計算移動元件後的位置
        this.p.add(this.v)
        if(this.p.x<=0 || this.p.x>=width){  //x軸碰到左邊(<=0)，或是碰到右邊(>=width)
            this.v.x = -this.v.x  //把x軸方向、速度方向改變
          }
        if(this.p.y<=0 || this.p.y>=height){  //x軸碰到上邊(<=0)，或是碰到下邊(>=height)
            this.v.y = -this.v.y  //把y軸方向、速度方向改變
          }
    }
    isBallinRanger(x,y){  //功能：判斷滑鼠按下的位置是否在物件的範圍內
        let d = dist(x,y,this.p.x,this.p.y)  //計算兩點之間的距離，放到d變數內
        if(d<this.r/2){  
          return true  //滑鼠與物件的距離小於物件的寬度，代表碰觸了，則傳回ture的值(碰觸)
        }else{  
          return false  //滑鼠與物件的距離大於物件的寬度，代表碰觸了，則傳回false的值(未碰觸)
        }
  

}
}
