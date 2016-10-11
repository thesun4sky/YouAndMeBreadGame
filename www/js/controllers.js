angular.module('starter.controllers', [])



.controller('ModeCtrl', function($scope,$state) {


  stage = new createjs.Stage("modeCanvas");
  createjs.Touch.enable(stage);

  var image = new createjs.Bitmap("img/bread.png");
  stage.addChild(image);

  image.x=830;
  image.y=0;
  image.scaleX =0.2;
  image.scaleY = 0.2;


  var image1 = new createjs.Bitmap("img/ant.png");
  stage.addChild(image1);


  //유저 프로필 로드
  image1.x=20;
  image1.y=420;
  image1.scaleX =0.3;
  image1.scaleY = 0.3;

  var image2 = new createjs.Bitmap("img/user.png");
  stage.addChild(image2);

  image2.x=420;
  image2.y=100;
  image2.scaleX =0.3;
  image2.scaleY = 0.3;

  //내 빵
  my_bread = new createjs.Text("죽빵", "40px Arial", "#FFF0A0");
  my_bread.x = 440;
  my_bread.y = 20;
  stage.addChild(my_bread);

  //빵
  bread = new createjs.Text("My Bread", "20px Arial", "#6F2500");
  bread.x = 440;
  bread.y = 60;
  stage.addChild(bread);


  //빵
  user_name = new createjs.Text("한성_이문성", "20px Arial", "white");
  user_name.x = 425;
  user_name.y = 230;
  stage.addChild(user_name);


  //페이지 하단 싱글 & 멀티 플레이 버튼
  rect = new createjs.Shape();
  rect.graphics.beginFill("#ff9600").drawRoundRect(260,280,200,150,30,30,30,30);
  rect.shadow = new createjs.Shadow('#000', 4, 4, 5);
  stage.addChild(rect);

  rect.addEventListener("click", function(event) {
      $state.go("single");
     })

  rect2 = new createjs.Shape();
  rect2.graphics.beginFill("#ff9600").drawRoundRect(500,280,200,150,30,30,30,30);
  rect2.shadow = new createjs.Shadow('#000', 4, 4, 5);
  stage.addChild(rect2);

  pie1 = new createjs.Shape().set({x:280, y:150});
  level_value =1;
  pie1.rotation = -90;
  pie1.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0,0,70,0,-(Math.PI /180  * 12 * level_value) ,true);
  stage.addChild(pie1);

  createjs.Ticker.addEventListener("tick", levelTick);
  createjs.Ticker.setFPS(100);
  function levelTick() {
    if(!createjs.Ticker.getPaused()){
      if(level_value <=11){
        level_value += 0.2;
      }
      if(exp_value <= 70){
        exp_value +=1;
      }
      if(level_value == 11 &&exp_value ==70 )
      {
        var paused = !createjs.Ticker.getPaused();
        createjs.Ticker.setPaused(paused);
      }
      pie1.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0, 0, 70, 0, -(Math.PI / 180 * 12 * level_value), true);
      pie2.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0, 0, 70, 0, -(Math.PI / 180 * 3.6 * exp_value), true);
      stage.update();
    }
  }

  pie2 = new createjs.Shape().set({x:680, y:150});
  exp_value =1;
  pie2.rotation = -90;
  pie2.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0,0,70,0,-(Math.PI / 180 * 3.6 * exp_value) ,true);

  stage.addChild(pie2);



  //레벨
  text1 = new createjs.Text("Level. 11", "20px Arial", "#ff0000");
  text1.x = 240;
  text1.y = 140;
  stage.addChild(text1);

  //경험치
  text2 = new createjs.Text("Exp. 70%", "20px Arial", "#ff0000");
  text2.x = 640;
  text2.y = 140;
  stage.addChild(text2);


  //싱글
  single = new createjs.Text("싱글 플레이", "25px Arial", "#ff0000");
  single.x = 295;
  single.y = 320;
  stage.addChild(single);

  single2 = new createjs.Text("Single Play", "15px Arial", "#ff0000");
  single2.x = 325;
  single2.y = 350;
  stage.addChild(single2);

  //멀티
  single = new createjs.Text("멀티 플레이", "25px Arial", "#ff0000");
  single.x = 535;
  single.y = 320;
  stage.addChild(single);

  single2 = new createjs.Text("Multi Play", "15px Arial", "#ff0000");
  single2.x = 565;
  single2.y = 350;
  stage.addChild(single2);

  stage.update();
})

//싱글 플레이 모드 화면

  .controller('SingleCtrl', function($scope,$state) {


    stage = new createjs.Stage("singleCanvas");
    createjs.Touch.enable(stage);

    var image = new createjs.Bitmap("img/bread.png");
    stage.addChild(image);

    image.x=830;
    image.y=0;
    image.scaleX =0.2;
    image.scaleY = 0.2;

    var ant_image = new createjs.Bitmap("img/FireAnt.png");
    stage.addChild(ant_image);

    ant_image.x=650;
    ant_image.y=70;
    ant_image.scaleX =0.35;
    ant_image.scaleY = 0.35;
    //개미 텍스트
    my_ant = new createjs.Text("불개미", "30px Arial", "#ff9600");
    my_ant.x = 640;
    my_ant.y = 150;
    stage.addChild(my_ant);


    rect = new createjs.Shape();
    rect.graphics.beginFill("#ff9600").drawRoundRect(380,50,200,150,30,30,30,30);
    rect.shadow = new createjs.Shadow('#000', 4, 4, 5);
    stage.addChild(rect);

    rect.addEventListener("click", function(event) {
      $state.go("play");
    })
    //싱글
    single = new createjs.Text("싱글 플레이", "25px Arial", "#ff0000");
    single.x = 415;
    single.y = 90;
    stage.addChild(single);

    single2 = new createjs.Text("Single Play", "15px Arial", "#ff0000");
    single2.x = 445;
    single2.y = 120;
    stage.addChild(single2);

  //스테이지 그래프
    pie1 = new createjs.Shape().set({x:280, y:135});
    level_value =1;
    pie1.rotation = -90;
    pie1.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0,0,70,0,-360 ,true);
    stage.addChild(pie1);

    //스테이지 텍스트트
   text1 = new createjs.Text("Stage. 3 ", "20px Arial", "#ff9600");
    text1.x = 240;
    text1.y = 125;
    stage.addChild(text1);

    stage.update();
  })

.controller('PlayCtrl', function($scope) {

  // 빵의 기본 좌표 설정
  var startPositionX = 140;
  var startPositionY = 230;
  var enemyStartPositionX = 800;
  var enemyStartPositionY = 230;

  var stage;
  var myAntList = [];
  var enemyAntList = [];


  var workAnt, fireAnt; //개미 추가
  var attack = function (ant) {
    enemyAntList[ant.enemy].hp -= ant.damage;
  };

  var move = function (unit, direction) {
    if (unit.x < 800) {
      // console.log("move function is called" + unit.x + ", " + unit.y);
      if (direction == "down") {
        unit.x = unit.x + 2;
        unit.y = (Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (direction == "up") {
        unit.x = unit.x + 1;
        unit.y = (-Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (direction == "straight") {
        unit.x = unit.x + 2;
        unit.y = startPositionY;
      }
    }
    else {
      unit.x = startPositionX;
      unit.y = startPositionY;
    }
  };


  var enemyMove = function (unit, direction) {
    if (unit.x > startPositionX) {
      // console.log("move function is called" + unit.x + ", " + unit.y);
      if (direction == "down") {
        unit.x = unit.x - 2;
        unit.y = (Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + enemyStartPositionY);
      } else if (direction == "up") {
        unit.x = unit.x - 1;
        unit.y = (-Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + enemyStartPositionY);
      } else if (direction == "straight") {
        unit.x = unit.x - 2;
        unit.y = enemyStartPositionY;
      }
    }
    else {
      unit.x = enemyStartPositionX;
      unit.y = enemyStartPositionY;
    }
  };


  function init() {

    var ant = function (team, type) {
      var type = type;
      var team = team;
      var state;
      var health;
      var speed;
      var atkSpeed;
      var damage;
      var skill;
      var enemy = null;
    };

    ///////////////////기본 설정////////////////


    //canvas와 js 연동
    stage = new createjs.Stage("demoCanvas");
    var image = new createjs.Bitmap("img/YMBplay.png");
    stage.addChild(image);
    createjs.Touch.enable(stage);
    // 빵의 생산량
    var text = new createjs.Text("2000", "60px Arial", "#ffffff");
    text.x = 380; text.y = 10;
    stage.addChild(text);

    //빵 모양 및 위치 초기화
    var bread = new createjs.Shape();
    bread.graphics.beginFill("blue").drawCircle(0, 0, 30);
    bread.x = startPositionX;
    bread.y = 285;
    stage.addChild(bread);


    //TODO 선택된 개미 추가 등등..

    //////////////////////////기본 설정 끝

    //적 생성
    enemy0 = new createjs.Shape();
    enemy0.graphics.beginFill("blue").drawCircle(0, 0, 30);
    enemy0.x = 450;
    enemy0.y = 420;
    enemy0.hp = 1000;
    stage.addChild(enemy0);
    enemyAntList.push(enemy0);

    enemy1 = new createjs.Shape();
    enemy1.graphics.beginFill("blue").drawCircle(0, 0, 30);
    enemy1.x = 350;
    enemy1.y = 400;
    enemy1.hp = 1000;
    stage.addChild(enemy1);
    enemyAntList.push(enemy1);




    //빵 클릭시 이벤트
    bread.addEventListener("click", function(event) {
      makeUnit('workAnt');
    });

    makeUnit('workAnt');

    //유닛 생성
    //방향 및 속성값을 받아 유닛 생성
    function makeUnit(type) {
      var image = new createjs.Bitmap("img/workant.png");
      // image.prototype = new ant(1,type);
      image.x = startPositionX;
      image.y = startPositionY;
      image.hp = 100;
      image.damage = 10;
      stage.addChild(image);
      myAntList.push(image);
    }

    stage.update(event);
    createjs.Ticker.addEventListener("tick", stateCheck);
    createjs.Ticker.addEventListener("tick", doBehavior);
  }

  function stateCheck(event) {

    for (var i=0; i<myAntList.length; i++) {
      myAntList.forEach(function (ant) {
        //체력이 0일 경우
        if (ant.hp <= 0) {
          myAntList.splice(i,1);
        }
        ant.state = "move";


        /*for (var j = 0; j < enemyAntList.length; j++) {
          if (enemyAntList[j].hp <= 0) {
            enemyAntList.splice(j,1);
            stage.removeChild(enemy1);
            alert("적 체력 0");
          }
          var pt = enemyAntList[j].localToLocal(-50, 0, ant);
          if (ant.hitTest(pt.x, pt.y)) {
            ant.state = "attack";
            ant.enemy = j;
          } else {
            ant.state = "move";
            ant.enemy = null;
          }
        }*/

        enemyAntList.forEach(function (enemy,index) {
          if (enemy.hp <= 0) {
            enemyAntList.splice(index,1);
            stage.removeChild(enemy);
            alert("적 체력 0");
          }
          var pt = enemy.localToLocal(-50, 0, ant);
          if (ant.hitTest(pt.x, pt.y)) {
            ant.state = "attack";
            ant.enemy = index;
          } else {
            ant.state = "move";
            ant.enemy = null;
          }
        });

      })
    }

      /*enemyAntList.forEach(function (enemy) {
        var pt = enemy.localToLocal(-50, 0, ant);
        if (ant.hitTest(pt.x, pt.y)) {
          ant.state = "attack";
          ant.enemy = this;
        } else {
          ant.state = "move";
        }
      });*/
    // stage.update(event);
  }


  function doBehavior(event) {
    myAntList.forEach(function(ant) {
      if (ant.state =="attack") {
        attack(ant);
      } else if (ant.state == "move") {
        move(ant,"down");
      }
    });
    stage.update(event);
  }

  init();
});


