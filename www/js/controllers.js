angular.module('starter.controllers', [])



.controller('ModeCtrl', function($scope,$state) {

  level_value=Math.PI /180  * 12 * 11;
  exp_value = Math.PI / 180 * 3.6 * 70;

  stage = new createjs.Stage("modeCanvas");

  rect = new createjs.Shape();
  rect.graphics.beginFill("#ff9600").drawRoundRect(260,270,200,150,30,30,30,30);
  rect.shadow = new createjs.Shadow('#000', 4, 4, 5);
  stage.addChild(rect);

  rect.addEventListener("click", function(event) {
      $state.go("play");
     })

  rect2 = new createjs.Shape();
  rect2.graphics.beginFill("#ff9600").drawRoundRect(500,270,200,150,30,30,30,30);
  rect2.shadow = new createjs.Shadow('#000', 4, 4, 5);
  stage.addChild(rect2);

  pie1 = new createjs.Shape().set({x:280, y:150});
  pie1.rotation = -90;
  pie1.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0,0,70,0,-level_value ,true);
  stage.addChild(pie1);

  pie2 = new createjs.Shape().set({x:680, y:150});
  pie2.rotation = -90;
  pie2.graphics.setStrokeStyle(20).beginStroke("#ff0000").arc(0,0,70,0,-exp_value ,true);

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

.controller('PlayCtrl', function($scope) {


  var workAnt, fireAnt; //개미 추가

  var enemy;
  var ant;

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  console.log(winWidth + "" + winHeight);

  $scope.myAntList = [];
  $scope.enemyAntList = [];


  var stage;

  function init() {

    var id;

    var ant = function (team, type) {
      id++;
      var antId = id;
      var type = type;
      var team = team;
      var state;
      var health;
      var speed;
      var atkSpeed;
      var damage;
      var skill;
      var x;
      var y;
      var enemy = null;
      return this
    };

    // 빵의 기본 좌표 설정
    var startPositionX = 140;
    var startPositionY = 230;

    //canvas와 js 연동
    stage = new createjs.Stage("demoCanvas");
    var image = new createjs.Bitmap("img/YMBplay.png");
    stage.addChild(image);

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

    //빵 모양 및 위치 초기화
    var enemy = new createjs.Shape();
    enemy.graphics.beginFill("blue").drawCircle(0, 0, 30);
    enemy.x = 450;
    enemy.y = 420;
    stage.addChild(enemy);


    //빵 클릭시 이벤트
    bread.addEventListener("click", function(event) {
      makeAnt('down', 800);});


    //유닛 생성
    //방향 및 속성값을 받아 유닛 생성
    function makeUnit(type) {
      var image = new createjs.Bitmap("img/workant.png");
      stage.addChild(image);
      image.x = startPositionX;
      image.y = startPositionY;
      new ant(1, type);

      return image;
    }


    var makeAnt = function (direction, type) {
      var ant = makeUnit(type);
      setInterval(function () {
//                    checkState(ant);
//                    if (ant.state == "attack") {
//                        attack(ant);
//                    } else if (ant.state == "move") {
        move(ant, direction)
//                    }
//
      }, (100))
    };

    var checkState = function checkState(ant) {
//                if ((ant.x - enemy.x) <= 50 && (ant.y - enemy.y) <= 50) {
//                    ant.enemy = enemy;
//                    ant.state = 'attack';
//                } else {
      ant.state = 'move';
//                }
    };


    var attack = function (ant) {
      ant.enemy.health -= ant.damage;
    };

    var move = function move(unit, direction) {

      //////////////////////////이동
      if (unit.x < 800) {
        console.log("move function is called" + unit.x + ", " + unit.y);
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
      /////////////////////////이동 끝
    };




    createjs.Ticker.addEventListener("tick", stage);

    makeAnt("up", 'workAnt');
    makeAnt("straight", 'workAnt');
  }

  function tick(event) {

//            var pt = enemy.localToLocal(100,0,target);
//            if (ant.hitTest(pt.x, pt.y)) { ant.state = "attack"; }
//            else {ant.stage = 'move'}
    stage.update(event);
  }

  init();
});


