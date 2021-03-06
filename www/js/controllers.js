angular.module('starter.controllers', [])

.controller('IndexCtrl',function ($scope) {
  var soundID = "BGM";

    createjs.Sound.registerSound("bgm/bgm.mp3" ,soundID);
    createjs.Sound.addEventListener("fileload", handleFileLoad);
  function handleFileLoad(event) {
    // A sound has been preloaded.
    console.log("Preloaded:", event.id, event.src);
    createjs.Sound.play(soundID);
  }

})


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


    //스테이지 드래그
    stage.mouseMoveOutside = true;
    var imagestage = new Array();
    var dragger = new createjs.Container();
    dragger.x =0;
    dragger.y =300;
    for(i=0;i<10;i++) {
      imagestage[i] = new createjs.Bitmap("img/stage.png");
      imagestage[i].scaleX = 0.5;
      imagestage[i].scaleY = 0.5;
      imagestage[i].x = 200 *i;
      dragger.addChild(imagestage[i]);
    }

    stage.addChild(dragger);
    dragger.on("mousedown", function (evt) {
      this.parent.addChild(this);
      this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    });

    dragger.on("pressmove", function (evt) {
      this.x = evt.stageX + this.offset.x;
    });


    stage.update();
  })

.controller('PlayCtrl', function($scope) {

  // 빵의 기본 좌표 설정
  var startPositionX = 140;
  var startPositionY = 230;

  var stage;
  var myAntList = [];
  var enemyAntList = [];


  var workAnt, fireAnt; //개미 추가
  var attack = function (ant) {
    enemyAntList[ant.enemy].hp -= ant.damage;
    enemyAntList[ant.enemy].health.text = enemyAntList[ant.enemy].hp;
  };
  var e_attack = function (ant) {
    myAntList[ant.enemy].hp -= ant.damage;
    myAntList[ant.enemy].health.text = myAntList[ant.enemy].hp;
  };

  var move = function (unit) {
    if (unit.x < 800) {
      // console.log("move function is called" + unit.x + ", " + unit.y);
      if (unit.direction == "down") {
        unit.x = unit.x + 2;
        unit.y = (Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (unit.direction == "up") {
        unit.x = unit.x + 1;
        unit.y = (-Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (unit.direction == "straight") {
        unit.x = unit.x + 2;
        unit.y = startPositionY;
      }
      unit.health.x = unit.x;
      unit.health.y = unit.y-50;
    }
    else {

    }
  };


  var rev_move = function (unit, direction) {
    if (unit.x >160) {
      // console.log("move function is called" + unit.x + ", " + unit.y);
      if (direction == "down") {
        unit.x = unit.x - 2;
        unit.y = (Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (direction == "up") {
        unit.x = unit.x - 1;
        unit.y = (-Math.sqrt((18000-(1/5)*((unit.x-450)*(unit.x-450)))) + startPositionY);
      } else if (direction == "straight") {
        unit.x = unit.x - 2;
        unit.y = startPositionY;
      }
      unit.health.x = unit.x;
      unit.health.y = unit.y-50;
    }
    else {

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
    //터치 가능
    createjs.Touch.enable(stage);
    //배경화면
    var background = new createjs.Bitmap("img/YMBplay.png");
    background.name = "nowhere";
    stage.addChild(background);

    //공격방향 변수
    var direction = "nowhere";

    //위 직진 아래 이미지
    var up = new createjs.Bitmap("img/up.png");
    up.x = 140;
    up.y = 155;
    up.name = "up";
    up.alpha = 0.3;
    stage.addChild(up);

    var straight = new createjs.Bitmap("img/straight.png");
    straight.x = 140;
    straight.y = 285;
    straight.name = "straight";
    straight.alpha = 0.3;
    stage.addChild(straight);

    var down = new createjs.Bitmap("img/down.png");
    down.x = 140;
    down.y = 285;
    down.name = "down";
    down.alpha = 0.3;
    stage.addChild(down);


    background.on("click", handleMouseEvent);
    background.on("dblclick", handleMouseEvent);
    up.on("click", handleMouseEvent);
    straight.on("click", handleMouseEvent);
    down.on("click", handleMouseEvent);

    function reset_dirAlpha(){
      up.alpha = 0.3;
      down.alpha = 0.3;
      straight.alpha = 0.3;
    }

    function handleMouseEvent(evt) {
      direction = evt.target.name;
      evt.target.alpha = 1.0;
      text.text = "direction: "+direction + evt.type;

      // to save CPU, we're only updating when we need to, instead of on a tick:1
      stage.update();
    }

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

    //상대빵 모양 및 위치 초기화
    var enemy_bread = new createjs.Shape();
    enemy_bread.graphics.beginFill("blue").drawCircle(0, 0, 30);
    enemy_bread.x = startPositionX+600;
    enemy_bread.y = 285;
    stage.addChild(enemy_bread);

    //TODO 선택된 개미 추가 등등..

    //////////////////////////기본 설정 끝

    //적 생성
    enemyId = 0;
    //빵 클릭시 이벤트
    bread.addEventListener("click", function(event) {
      if (direction !="nowhere") {
        makeUnit('workAnt');
      }
    });

    //상대 클릭시 이벤트
    enemy_bread.addEventListener("click", function(event) {
      if (direction !="nowhere") {
        makeEnemy('workAnt');
      }
    });

    //유닛 생성
    //방향 및 속성값을 받아 유닛 생성
    function makeUnit(type) {
      var ant = new createjs.Bitmap("img/workant.png");
      // image.prototype = new ant(1,type);
      ant.direction = direction;
      ant.x = startPositionX;
      ant.y = startPositionY;
      ant.hp = 1000;
      ant.damage = 10;
      ant.state = "move";
      direction = "nowhere";
      reset_dirAlpha();

      stage.addChild(ant);
      ant.health = new createjs.Text(ant.hp);
      ant.health.x = startPositionX;
      ant.health.y = startPositionY - 50;
      stage.addChild(ant.health);

      myAntList.push(ant);
    }


    function makeEnemy(type) {
      var enemy = new createjs.Bitmap("img/workant.png");
      // image.prototype = new ant(1,type);
      enemy.x = startPositionX+600;
      enemy.y = startPositionY;
      enemy.hp = 50;
      enemy.damage = 10;
      enemy.state = "move";
      enemyAntList.push(enemy);
      stage.addChild(enemy);

      enemy.health = new createjs.Text(enemy.hp);
      enemy.health.x = startPositionX+600;
      enemy.health.y = startPositionY - 50;
      stage.addChild(enemy.health);

    }

    stage.update(event);
    createjs.Ticker.addEventListener("tick", stateCheck);
    // createjs.Ticker.addEventListener("tick", enenmyStateCheck);
    createjs.Ticker.addEventListener("tick", doBehavior);
    createjs.Ticker.addEventListener("tick", doEnemyBehavior);
  }

  function stateCheck(event) {
      myAntList.forEach(function (ant,index) {
        //체력이 0일 경우
        if (ant.hp <= 0) {
          myAntList.splice(index,1);
        }
        ant.state = "move";
        if (ant.hp <= 0) {
            ant.state = "death";
          }
        else{
        enemyAntList.forEach(function (enemy, e_index){
         //체력이 0일 경우
          if (enemy.hp <= 0) {
            enemy.state="death";
          }
          else{
            var pt = enemy.localToLocal(0, 0, ant);
            if (ant.hitTest(pt.x, pt.y)) {
              ant.state = "attack";
              enemy.state = "attack";
              ant.enemy = e_index;
              enemy.enemy = index;
              // alert("attack");

            } else {
              ant.state = "move";
              ant.enemy = null;
            }
          }
       });
        // stage.update(event);
        }
      })
    }

  //
  // function enenmyStateCheck(event) {
  //   enemyAntList.forEach(function (enemy,index) {
  //     if (enemy.hp <= 0) {
  //       enemy.state = "death";
  //     }
  //     else {
  //       if(enemy.state == "attack" && !myAntList[enemy.enemy]){
  //           enemy.state = "move";
  //       }
  //
  //     }
  //     })
  //
  // }

  function doBehavior(event) {
    myAntList.forEach(function(ant,index) {
      if (ant.state =="attack") {
        attack(ant);
      } else if (ant.state == "move") {
        move(ant);
      }
      else if (ant.state == "death"){
        myAntList.splice(index,1);
        stage.removeChild(ant);
      }
    });
    stage.update(event);
  }
  function doEnemyBehavior(event) {
    enemyAntList.forEach(function(ant,index) {
      if (ant.state =="attack") {
        e_attack(ant);
      } else if (ant.state == "move") {
        rev_move(ant,"straight");
      }
      else if (ant.state == "death"){
        enemyAntList.splice(index,1);
        stage.removeChild(ant);
      }
    });
    stage.update(event);
  }
  init();
});


