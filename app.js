

var load = false;
var loadtimer ;
var sc = 0;
var x = 1;
var y = x;
function d() {
    y = x;
}
var mm = 0;
var yp = 'pass("@admin.y");';
var flag = 0;
var body = document.getElementById("bo");
// function racesound{
    var racesound = new Audio();
    racesound.src = "Sound/carrace.mp3";
    racesound.volume = 0.3;
    // racesound.play();
// }
// function clapesound{
    var clapesound = new Audio();
    clapesound.src = "Sound/clape.mp3";
    clapesound.volume = 1;
    // clapesound.play();
// }
// function collidesound(){
    var collidesound = new Audio();
    collidesound.src = "Sound/carcollide.mp3";
    // collidesound.play();
    collidesound.volume = 0.9;
// }
var backgroundsound;
// function backgroundsound(){
    backgroundsound = new Audio();
    backgroundsound.src = "Sound/background.mp3";
    // backgroundsound.play();
    backgroundsound.volume = 0.5;
    // bleepb.pause();
// }
// function bonussound{
    var bonussound = new Audio();
    bonussound.src = "Sound/bonus.mp3";
    // bonussound.play();
    bonussound.volume = 1;
// }
// function ticksound{
    var ticksound = new Audio();
    ticksound.src = "Sound/tick.mp3";
    // ticksound.play();
    ticksound.volume = 1;
// }
// function buzzsound(){
    var buzzsound = new Audio();
    buzzsound.src = "Sound/buzz.mp3";
    // buzzsound.play();
    buzzsound.volume = 1;
// }
// function alertsound(){
    var alertsound = new Audio();
    alertsound.src = "Sound/fuelalarm.mp3";
    // alertsound.play();
    alertsound.volume = 0.5;
// }
// function ranksound(){
    var ranksound = new Audio();
    ranksound.src = "Sound/rank.mp3";
    // ranksound.play();
    ranksound.volume = 1;
// }
// function bombblastsound(){
    var bombblastsound = new Audio();
    bombblastsound.src = "Sound/bombblast.mp3";
    // bombblastsound.play();
    bombblastsound.volume = 0.1;
// }
// function misslelaunchsound(){
    var misslelaunchsound = new Audio();
    misslelaunchsound.src = "Sound/misslelaunch.mp3";
    // misslelaunchsound.play();
    misslelaunchsound.volume = 0.1;
// }
var twokey = {
    a: false,
    w: false,
    d: false,
    s: false
};
function dig(event) {
    if ((event.which + 32) === 119) { // w
        twokey.w = true;
    }
    else if ((event.which + 32) === 97) { // a
        twokey.a = true;
        
    }
    else if ((event.which + 32) === 100) { // d
        twokey.d = true;
    }
    else if ((event.which + 32) === 115) { // s
        twokey.s = true;
    }
}
function cod(et) {
    unicod = et.charCode;
}
var eleme = document.getElementById("lcar").getBoundingClientRect();
elemen = document.getElementById("lcar");
var unicod = 0;
var etop = 450;     //eleme.top;
var eleft = 300;    //eleme.left;
function myMove1() {
    if(mm === 1){
            // w = 119 , s = 115 , a = 97 , d = 100 ;     
    if (twokey.a && twokey.w  && (etop+7 > 0)   && (eleft-7 > 50) && flag === 0 ) {
        racesound.play();        
        elemen.style.top = (etop -= 6) + 'px';
        elemen.style.left = (eleft -= 6) + 'px';
        
    }
    else if (twokey.d && twokey.w && (etop-7 > 0)  && (eleft+7 < 875)  && flag === 0 ) {
        racesound.play();        
        elemen.style.top = (etop -= 6) + 'px';
        elemen.style.left = (eleft += 6) + 'px';
        
    }
            // w = 119 , s = 115 , a = 97 , d = 100 ;     
    else {
        if(unicod === 119 && ((etop-7) > 0)  && flag === 0 ) { // w
        racesound.play();        
             elemen.style.top = (etop -= 10) + 'px';                
        }
        else if(unicod === 97 && ((eleft-7) > 50)  && flag === 0 ){ // a
        racesound.play();        
             elemen.style.left = (eleft -= 10) + 'px';            
            }
        else if(unicod === 100 && ((eleft+7) < 875)  && flag === 0 ){ // d
        racesound.play();        
             elemen.style.left = (eleft += 10) + 'px';     
        }
        else if(unicod === 115 && ((etop+7) < 540)  && flag === 0  ){ // s
        racesound.play();        
             elemen.style.top = (etop += 7) + 'px';            
            }
    }
    }
    }


function resetob(event) {
    var ele = document.getElementById("lcar");
    var elegc = document.getElementById("lcar").getBoundingClientRect();
    var et = elegc.top;
    if(!twokey.a &&!twokey.w &&!twokey.s &&!twokey.d){
    }
     if (event.which + 32 === 100) { // d
        if(!twokey.a && !twokey.s && !twokey.w && twokey.d){
        }
        twokey.d = false;
    }
    else if (event.which + 32 === 119) { // w
        twokey.w = false;
    }
    else if (event.which + 32 === 97) { // a
        if(twokey.a && !twokey.s && !twokey.w && !twokey.d){
        }
        twokey.a = false;
    }
    else if (event.which + 32 === 115) { // s
        twokey.s = false;
    }
    if (twokey.w === true && twokey.a === false && twokey.d === false) {
        var id = setInterval(frame, 35);
        function frame() {
            if (twokey.w === true && twokey.a === false && twokey.d === false && ((etop-7) > 0)  && flag === 0) {
        racesound.play();        
                ele.style.top = (etop -= 6) + 'px';
                eleft = elegc.left;
            }
            else {
                clearInterval(id);
            }
        }
    }
} 

    var elemn1 = document.getElementById("l1");
    var elemn2 = document.getElementById("l2");
    var elemn3 = document.getElementById("l3");
    var elemn4 = document.getElementById("l4");
function all() {
    elemn1.style.top = "0px";
    elemn2.style.top = "219px";
    elemn3.style.top = "438px";
    elemn4.style.top = "-219px";
    var pos1 = 0;
    var pos2 = 219;
    var pos3 = 438;
    var pos4 = -219;
    var id = setInterval(frame, 10);
    function frame() {
        if(flag === 1){
            clearInterval(id);
        }
        if (parseInt(elemn1.style.top) === 657) {
            elemn1.style.top = -220 + "px";
            pos1 = -220;
        }
        else if (parseInt(elemn2.style.top) === 657) {
            elemn1.style.top = -220 + "px";
            pos2 = -220;
        }
        else if (parseInt(elemn3.style.top) === 657) {
            elemn1.style.top = -220 + "px";
            pos3 = -220;
        }
        else if (parseInt(elemn4.style.top) === 657) {
            elemn1.style.top = -220 + "px";
            pos4 = -220;
        }
        pos1++;
        pos2++;
        pos3++;
        pos4++;
        elemn1.style.top = (pos1) + "px";
        elemn2.style.top = (pos2) + "px";
        elemn3.style.top = (pos3) + "px";
        elemn4.style.top = (pos4) + "px";
    }
}

var previ ;
var posii ;
var inc = -130;
var posa = ["100px","275px","450px","625px","805px"];
var imgarr = ["c1.png","c2.png","c3.png","c4.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png"];
var cid = 1;
var apd = document.getElementById("back");
var remaincar;
var lastcar;

function makecar(){
var id5 = setInterval(frame5,cartime);
   function frame5() {
       if(flag === 1){
            clearInterval(id5);
       }
       else{
var imgcar = document.createElement("img");
// var imgcar = new Image();
    imgcar.onload = ()=>{
            // console.log('load');
        if(flag === 0){
            remaincar = imgcar;
            fire(imgcar);
            movecar(imgcar);
        }
    }
    imgcar.style.position = "Absolute"; 
    imgcar.style.top = "-155px";
    posii = Math.floor(Math.random() * 5);
    if(posii === previ){
        posii =  (Math.floor(Math.random() * 5)-1) ;
        if( posii < 0){
            posii=4;
        }
    }
    imgcar.style.left = posa[posii];    
    previ = posii;    
    imgcar.style.zIndex="+1";
    imgcar.style.height="160px";
    imgcar.style.width="110px";
    imgcar.style.display = 'block';
    // imgcar.style.border="1px solid green";
    // imgcar.style.outline='3px solid red';
    imgcar.src ="images/"+imgarr[Math.floor(Math.random() * 11)];
    imgcar.id="car"+cid;
    // var customimg = "<img style='left="+posa[posii]+"' class='oppocarmaker' src='+images/"+imgarr[Math.floor(Math.random() * 11)]+"' id='car"+cid+"' />"; 
    
        apd.appendChild(imgcar);
        
        // apd.appendChild(customimg);
    cid++;
    // setTimeout(()=>{
    
    // },4000);
   }
       }
}

var ll = 0;
var d = 0;
var incm = 5;
var lenum = 1; 
var bonus;
var  id23;
var highscores = [];
var backmain = document.getElementById("back");
var scsp = document.getElementById("scspan");
var s2 = document.getElementById('s2');
var collide1cheaker = 0;

document.getElementById('canclebtn').addEventListener('click',canfun);
function canfun() {
    ticksound.play();
        document.getElementById('awardimg').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('awardimg').style.display = 'none';
    }, 500);
}
function movecar(el){
    var oppocargc = document.getElementById(el.id).getBoundingClientRect();
    var usercargc = document.getElementById("lcar").getBoundingClientRect();
    var namein = document.getElementById('namein');
    var inc =-155;
    var speed = 2+Math.floor(Math.random() * 2)
    var id101 = setInterval(frame8, 10);
    // console.log(el.style.display);
    function frame8() {
       if(flag === 1 ){
            el.style.top = inc+"px";    
            inc+=speed;
       }
       if(flag === 0 && parseInt(el.style.top) < 650){
      oppocargc = document.getElementById(el.id).getBoundingClientRect();
      usercargc = document.getElementById("lcar").getBoundingClientRect();
      el.style.top = inc+"px";    
      inc+=speed;
      if(oppocargc.bottom-13 >= usercargc.top+13 && usercargc.bottom-13 >= oppocargc.top+13){
            if((usercargc.right-13 >= oppocargc.left+13 && usercargc.right <= oppocargc.right) // left half
            ||( usercargc.left+13 <= oppocargc.right-13 && usercargc.left >= oppocargc.left) // right half
            ||( usercargc.left+13 >= oppocargc.left+13 && usercargc.right-13 <= oppocargc.right-13) // small full 
            ||( usercargc.left+13 <= oppocargc.left+13 && usercargc.right-13 >= oppocargc.right-13))// large full
     { 
        // console.log("COLLIDE");
        lastcar = el;
        if(flag === 0){
        flag++;
        clearInterval(id101);  
        clearInterval(id23);            
        clearInterval(id20);            
        clearInterval(id21);            
        clearInterval(bonus);
        clearInterval(rocketrefill);
                    
        finalf();        
        var id33;
        function finalf(){
            collidesound.play();
            var final = document.getElementById("final");
            var finalimg = document.getElementById("finalimg");
            var finalp = document.getElementById("finalp");
            var finalb = document.getElementById("finalb");  
            var finalbb = document.getElementById("finalbb");  
            var awardimg = document.getElementById('awardimg');
            backgroundsound.pause();
            finalb.addEventListener("click",reset); 
            finalbb.addEventListener("click",resetbb); 
            if(scsp.innerHTML > parseInt(highscores[0].score)){  // 1st
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[0].style.display = "block";
                document.getElementById('fuelendwinp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[0].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[0].style.display = 'block';
                document.getElementById('fuelendwinp').innerHTML = '1st';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            else if(scsp.innerHTML > parseInt(highscores[1].score)){// 2nd
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[0].style.display = "block";
                document.getElementById('fuelendwinp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[0].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[0].style.display = 'block';
                document.getElementById('fuelendwinp').innerHTML = '2nd';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            else if(scsp.innerHTML > parseInt(highscores[2].score)){//3rd
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[0].style.display = "block";
                document.getElementById('fuelendwinp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[0].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[0].style.display = 'block';
                document.getElementById('fuelendwinp').innerHTML = '3rd';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            finalp.innerHTML = "Your Score "+scsp.innerHTML+"pt<br/>Level "+lenum ;
            final.style.display = "block";
            setTimeout(function () {    
                final.style.opacity = "1";
            },10);

            function reset(){
            document.getElementsByClassName('loader')[0].style.display = 'block';
            document.getElementsByClassName('carloader')[0].style.display = 'block';
            setTimeout(function() {
                document.getElementsByClassName('loader')[0].style.opacity = '1';
                document.getElementsByClassName('carloader')[0].style.opacity = '1';
            }, 0);
            finalb.removeEventListener("click",reset);
            finalbb.removeEventListener("click",resetbb);                    
            if(parseInt(scsp.innerHTML) >= 100){ 
                firebase.database().ref('/players/' + (highscores.length+1)).set({
                    name: namein.value,
                    level:lenum,
                    score: scsp.innerHTML, 
                    referer:document.referrer
                }
            );
            }
                ticksound.play();                
                if(collide1cheaker === 0){
                apd.removeChild(lastcar);       
                collide1cheaker++;
                setTimeout(function() {
                    document.getElementsByClassName('loader')[0].style.display = 'none';
                    document.getElementsByClassName('carloader')[0].style.display = 'none';
                setTimeout(function() {
                    document.getElementsByClassName('loader')[0].style.opacity = '0';
                    document.getElementsByClassName('carloader')[0].style.opacity = '0';
                }, 0);                        
                    collide1cheaker = 0;
                document.getElementsByClassName("fuelendwinimg")[0].style.display = "none";
                document.getElementById('fuelendwinp').style.display = 'none';
                document.getElementsByClassName('fuelcheare1')[0].style.display = 'none';
                document.getElementsByClassName('fuelcheare2')[0].style.display = 'none';
                final.style.display = "none";
                backmain.style.display = "none";
                main.style.display = "none";
                final.style.opacity = "0";                
                resettotal();
                }, 5000);
                } 
            }
            function resetbb(){
            document.getElementsByClassName('loader')[0].style.display = 'block';                
            document.getElementsByClassName('carloader')[0].style.display = 'block';                
            setTimeout(function() {
                document.getElementsByClassName('loader')[0].style.opacity = '1';
                document.getElementsByClassName('carloader')[0].style.opacity = '1';
            }, 0);
            finalb.removeEventListener("click",reset);
            finalbb.removeEventListener("click",resetbb);                    
            if(parseInt(scsp.innerHTML) >= 100){ 
                firebase.database().ref('/players/' + (highscores.length+1)).set({
                    name: namein.value,
                    level:lenum,
                    score: scsp.innerHTML, 
                    referer:document.referrer
                }
            );
            }
                ticksound.play();                
                if(collide1cheaker === 0){
                apd.removeChild(lastcar);       
                collide1cheaker++;
                setTimeout(function() {
                document.getElementsByClassName('loader')[0].style.display = 'none';                    
                document.getElementsByClassName('carloader')[0].style.display = 'none';                    
                setTimeout(function() {
                    document.getElementsByClassName('loader')[0].style.opacity = '0';
                    document.getElementsByClassName('carloader')[0].style.opacity = '0';
                }, 0);
                collide1cheaker = 0;
                document.getElementsByClassName("fuelendwinimg")[0].style.display = "none";
                document.getElementById('fuelendwinp').style.display = 'none';
                document.getElementsByClassName('fuelcheare1')[0].style.display = 'none';
                document.getElementsByClassName('fuelcheare2')[0].style.display = 'none';
                final.style.display = "none";
                backmain.style.display = "none";
                main.style.display = "none";
                final.style.opacity = "0";                
                resethalf();
                }, 5000);
                } 
            }
    }                        
     }
    }
   }//1
   }
    else if(parseInt(el.style.top) >= 650 && flag === 0){
      apd.removeChild(document.getElementById(el.id));
        if(flag === 0 && el.style.display == 'block' ){
            sc+=10;
        }   
      s2.innerHTML = sc;
      scsp.innerHTML = sc;
      clearInterval(id101);
    //   console.log('SC++');
    }
    if(parseInt(el.style.top) >= 650 && flag === 1 && remaincar != lastcar ){
        apd.removeChild(document.getElementById(el.id));
        clearInterval(id101);
    //   console.log('removble');
        
    }
}
}
var id21;
var alsoti;
var main = document.getElementById("main");
var main2 = document.getElementById("main2");;
var go = document.getElementById("go");
var play = document.getElementById("play");
var ins = document.getElementById("ins");
var highscore = document.getElementById("hs");
var exit = document.getElementById("exit");
var mb = document.getElementById("mb");
var mainins = document.getElementById("mainins");
var ins = document.getElementById("ins");
var mbb = document.getElementById("mbb");
var highsc = document.getElementById("highsc");
backmain = document.getElementById("back");


exit.addEventListener("click",back);
function back(){
    ticksound.play();    
    main2.style.display = "none";
    main.style.display = "block";
}

go.addEventListener("click",gof);
function gof(){
   var a = namein.value;
    if(a.length >= 3  && a.length <= 19  || a === yp ){
        if(a === yp){
            ticksound.play();
            document.getElementById('nameerror').style.display = 'none';        
            main.style.display = "none";
            document.getElementById('admin').style.display = "block";
        }
        else{
            document.getElementById('nameerror').style.display = 'none';        
            ticksound.play();
                clearInterval(loadtimer);            
             loadtimer = setInterval(()=>{
                // console.log('in intervel');
                if(load === true){
                    // console.log('in intervel if');                    
                    main.style.display = "none";
                    main2.style.display = "block";
                    clearInterval(loadtimer);
                }
            },500)
        }
    }
    else{
        ticksound.play();        
        document.getElementById('nameerror').style.display = 'block';
        document.getElementById('nameerror').innerHTML = "Name Must in between Three to Nineteen Charectors";
    }
}
mb.addEventListener("click",backmb);
function backmb(){
    ticksound.play();    
    mainins.style.display = "none";
    main2.style.display = "block";
}
ins.addEventListener("click",instr);
function instr(){
    ticksound.play();
    main2.style.display = "none";    
    mainins.style.display = "block";
}
mbb.addEventListener("click",backmbb);
function backmbb(){
    ticksound.play();
    highsc.style.display = "none";
    main2.style.display = "block";
}
highscore.addEventListener("click",hsf);
function hsf(){
    ticksound.play();
    main2.style.display = "none";   
    highsc.style.display = "block";
}       
var coup = document.getElementById('coup');        
var id20;
var id55;
var rocketrefill;
play.addEventListener("click",playgame);
function playgame(){
    ticksound.play();
    mm++;
    main2.style.display = "none";        
    backmain.style.display = "block";
    s2.innerHTML = 0;
    scsp.innerHTML = 0;
    sc = 0 ;
    setTimeout(function(){   
   makecar();        
   all();
     id20 = setInterval(funf,500);
     id23 = setInterval(patrolbonusfun ,fueltime );
     bonus = setInterval(bonusfun ,bonustime );
     rocketrefill = setInterval(rocketfun ,rockettime );
     id21 = setInterval(pbc,12000);
     alsoti = setInterval(al,500);
     
     setTimeout(function(){id55 = setInterval(level,30)},300);
     pbc();
        body.addEventListener('keypress',meterfun);
        body.addEventListener('keyup',meterrevfun);
        body.addEventListener("keydown", dig);
        body.addEventListener("keypress", cod);
        body.addEventListener("keyup", resetob);
        body.addEventListener("keypress", myMove1);
        body.addEventListener('keypress',rockettrigger);
    },4700);
    var cou = 1;
    couparr = [1,2,3,'Go...'];
    coup.innerHTML = couparr[0];
    coup.style.display = 'block';
    document.getElementById('wsadkey').style.display = 'block';
    document.getElementById('rofireins').style.display = 'block';
    document.getElementById('wsadkey').style.animation = 'initialkey 1s ease-in-out infinite alternate-reverse';
    document.getElementById('rofireins').style.animation = 'initialkey 0.5s ease-in-out infinite alternate-reverse';
setTimeout(function() {
    document.getElementById('wsadkey').style.display = 'none';
    document.getElementById('rofireins').style.display = 'none';
}, 5000);
    setTimeout(function () {    
document.getElementById('coup').style.WebkitTransition = "opacity 0.5s , textShadow 1s";
document.getElementById('coup').style.opacity = "1";
document.getElementById('coup').style.textShadow = "0px 0px 40px red";
},10);
        s2.innerHTML = 0;
        scsp.innerHTML = 0;
        sc = 0;
    var countdown = setInterval(function() {
        s2.innerHTML = 0;
        scsp.innerHTML = 0;
        sc = 0;
        if(cou > 3){
            clearInterval(countdown);
            coup.style.display = 'none';
        }
        else{
            ticksound.play();
            cou++;
            setTimeout(function () {    
                document.getElementById('coup').style.opacity = "0";
            },10);
            coup.innerHTML = couparr[cou-1];
            setTimeout(function () {    
                document.getElementById('coup').style.opacity = "1";
                document.getElementById('coup').style.textShadow = "0px 0px 40px red";
            },400);
        }
    },1400);
    
        ranker();
    }
         function pbc(){
            if(flag === 0){
                backgroundsound.play();
            }
            else{
                clearInterval(id21);
            }
         }
   var postop=['130px','150px','170px','200px','230px','250px','270px','300px','330px','350px','370px','400px','430px','450px','470px','500px']; //  range = 0 -- 300
   var posleft=['130px','150px','170px','200px','230px','250px','270px','300px','330px','350px','370px','400px','430px','450px','470px','500px','530px','550px','570px','600px','630px','650px','770px','800px']; //  range = 50 -- 900
   var bonusmake;
    function bonusfun(){
        if(flag === 0){
            bonusmake = document.createElement('div');
            bonusmake.style.width = '60px';
            bonusmake.style.height = '60px';
            // bonusmake.style.backgroundColor = 'red';
            bonusmake.style.position = 'Absolute'
            bonusmake.style.zIndex="+111";            
            bonusmake.style.top = postop[Math.floor(Math.random() * 17)];            
            bonusmake.style.left = posleft[Math.floor(Math.random() * 25)];            
            var bonusmakeimg = document.createElement('img');
            bonusmakeimg.style.width = '60px';
            bonusmakeimg.style.height = '60px';
            bonusmakeimg.src ="images/bonus.png";
            bonusmake.style.animation = 'rotastar 1.5s linear infinite';     
            bonusmake.appendChild(bonusmakeimg);
            body.appendChild(bonusmake);
            cheakbonus(bonusmake);
    }
    }

var mymcargc = document.getElementById("lcar").getBoundingClientRect();
var upb = document.getElementById('upb');

function cheakbonus(bonusgcmain){
    var bonusgc ; 
    var rf = 0;
    setTimeout(remflag,3500);
    function remflag() {
        rf = 1;
    }    
    var id18 = setInterval(cb,10);
    function cb() {
        if(rf === 0){
    bonusgc = bonusgcmain.getBoundingClientRect();
     mymycargc = document.getElementById("lcar").getBoundingClientRect();
     if(bonusgc.bottom >= mymycargc.top && mymycargc.bottom >= bonusgc.top){
            if(( mymycargc.right >= bonusgc.left && mymycargc.right <= bonusgc.right) 
            ||( mymycargc.left <= bonusgc.right && mymycargc.left >= bonusgc.left)
            ||(  mymycargc.left <= bonusgc.left && mymycargc.right >= bonusgc.right))
            
     {
        bonussound.play();
        sc+=50;
        s2.innerHTML = sc;      
        scsp.innerHTML = sc;
        upb.style.display = 'block';
        bonusgcmain.style.display = 'none';
        upb.style.top = (bonusgc.top + 0) + 'px'  ;      
        upb.style.left = (bonusgc.left + 5) + 'px';        
        
        setTimeout(function() {
            upb.style.transform = 'translate(0px,-40px)';
            upb.style.fontSize = '50px';
            upb.style.opacity = '0';
        }, 10);
        setTimeout(function() {
            upb.style.opacity = '1';
            upb.style.fontSize = '45px';
            upb.style.transform = 'translate(0px,0px)';  
            setTimeout(function() {
            upb.style.display = 'none';
            }, 10);          

        }, 1000);
    }
     }
        }
     else{
        body.removeChild(bonusgcmain);
        clearInterval(id18);
    }       
    }                        
}

var fuelscale = document.getElementById('fueldiv2');
var fuelite = 225;
    var patrolmake;
    function patrolbonusfun(){

        if(flag === 0){
                    
            patrolmake = document.createElement('div');
            patrolmake.style.width = '60px';
            patrolmake.style.height = '60px';
        //    patrolmake.style.backgroundColor = 'red';
            patrolmake.style.position = 'Absolute'
            patrolmake.style.zIndex="+111";            
            patrolmake.style.top = postop[Math.floor(Math.random() * 17)];            
            patrolmake.style.left = posleft[Math.floor(Math.random() * 25)];            
            var patrolmakeimg = document.createElement('img');
            patrolmakeimg.style.width = '60px';
            patrolmakeimg.style.height = '60px';
            patrolmakeimg.src ="images/fuelcan.png";
            patrolmake.style.animation = 'rotafuel 1s ease-in-out infinite alternate-reverse';                 
            patrolmake.appendChild(patrolmakeimg);
            body.appendChild(patrolmake);
            cheakpatrol(patrolmake);
    }
    }

var fuelalert = document.getElementById('fuelalert');                      
var ok = 0;
var mymydcargc = document.getElementById("lcar").getBoundingClientRect();
function cheakpatrol(bonusgcmain){
    var patrolgc; 
    var rf = 0;
    setTimeout(remflag,4000);
    function remflag() {
        rf = 1;
    }    
    var id18 = setInterval(cb,10);
    function cb() {
        if(rf === 0){
    patrolgc = bonusgcmain.getBoundingClientRect();
     mymydcargc = document.getElementById("lcar").getBoundingClientRect();
    if(patrolgc.bottom >= mymydcargc.top && mymydcargc.bottom >= patrolgc.top){
            if(( mymydcargc.right >= patrolgc.left && mymydcargc.right <= patrolgc.right) 
            ||( mymydcargc.left <= patrolgc.right && mymydcargc.left >= patrolgc.left)
            ||(  mymydcargc.left <= patrolgc.left && mymydcargc.right >= patrolgc.right))
     {
      bonussound.play();
      fuelite = 225 ;
      fuelalert.style.color = 'rgba(225,0,0,0.5)';
      bonusgcmain.style.display = 'none';        
     }
    }
}        
    else{
        body.removeChild(bonusgcmain);
        clearInterval(id18);
    }
    }
    }

function funf(){    
     if(fuelite === 128 && flag===0){
        flag = 1;
        clearInterval(id23);            
        clearInterval(id20);            
        clearInterval(id21);            
        clearInterval(bonus);
        clearInterval(rocketrefill);
        setTimeout(function() {
            buzzsound.play();            
        }, 500);
        fuelendfun();
     }
        else if(flag===0){
            fuelite--;
            fuelscale.style.WebkitTransform = "rotate("+fuelite+"deg)";   
        }
    }
function al() {
    if(flag === 1){
        clearInterval(alsoti);
    }
    if(fuelite < 160 && ok === 0){
            ok = 1;
                        alertsound.play();                   
                        fuelalert.style.boxShadow = '0px 0px 10px 5px  red , inset 0px 0px 30px 10px  red ';
                        fuelalert.style.color = 'rgba(225,0,0,1)';
                    setTimeout(function() {
                        alertsound.play();       
                        fuelalert.style.boxShadow = '0px 0px 0px 0px  rgba(225,0,0,0.2) ';
                        fuelalert.style.color = 'rgba(225,0,0,0.5)';
                        
                        ok = 0; 
                }, 300);
        }
}
        function fuelendfun(){
            var fuelend = document.getElementById("fuelend");
            var fuelendbtn = document.getElementById("fuelendbtn");
            var fuelendbtnbtn = document.getElementById("fuelendbtnbtn");
            var finalpp = document.getElementById("finalpp");
            var awardimg = document.getElementById("awardimg");
            if(scsp.innerHTML > parseInt(highscores[0].score)){
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[1].style.display = "block";
                document.getElementById('fuelendwinpp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[1].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[1].style.display = 'block';
                document.getElementById('fuelendwinpp').innerHTML = '1st';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            else if(scsp.innerHTML > parseInt(highscores[1].score)){
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[1].style.display = "block";
                document.getElementById('fuelendwinpp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[1].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[1].style.display = 'block';
                document.getElementById('fuelendwinpp').innerHTML = '2nd';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            else if(scsp.innerHTML > parseInt(highscores[2].score)){
                clapesound.play();                
                document.getElementsByClassName("fuelendwinimg")[1].style.display = "block";
                document.getElementById('fuelendwinpp').style.display = 'block';
                document.getElementsByClassName('fuelcheare1')[1].style.display = 'block';
                document.getElementsByClassName('fuelcheare2')[1].style.display = 'block';
                document.getElementById('fuelendwinpp').innerHTML = '3rd';
                    awardimg.style.display = "block";
                setTimeout(function () {    
                    awardimg.style.opacity = "1";
                    document.getElementById('cong').innerHTML = 'Congratulations '+namein.value;                
                },2000);
            }
            finalpp.innerHTML = "Score "+scsp.innerHTML+"pt <br/>Level "+lenum ;
            backgroundsound.pause();                
            fuelendbtn.addEventListener("click",reset);
            fuelendbtnbtn.addEventListener("click",resetbtn);
                document.getElementById('fuelend').style.display = "block";
            setTimeout(function () {    
                document.getElementById('fuelend').style.opacity = "1";
            },10); 

            function reset(){
                document.getElementsByClassName('loader')[1].style.display = 'block';
                document.getElementsByClassName('carloader')[1].style.display = 'block';
                setTimeout(function() {
                    document.getElementsByClassName('loader')[1].style.opacity = '1';
                    document.getElementsByClassName('carloader')[1].style.opacity = '1';
                }, 0);
                if(parseInt(scsp.innerHTML) >= 100){ 
                firebase.database().ref('/players/' + (highscores.length+1)).set({
                    name: namein.value,
                    level:lenum,
                    score: scsp.innerHTML, 
                    referer:document.referrer
                }
            );
            }
                ticksound.play();
                setTimeout(function() {
                    document.getElementsByClassName('loader')[1].style.display = 'none';
                    document.getElementsByClassName('carloader')[1].style.display = 'none';
                    setTimeout(function() {
                        document.getElementsByClassName('loader')[1].style.opacity = '0';
                        document.getElementsByClassName('carloader')[1].style.opacity = '0';
                    }, 0);
                    fuelendbtn.removeEventListener("click",reset);                
                    fuelendbtnbtn.removeEventListener("click",resetbtn);                
                    document.getElementsByClassName("fuelendwinimg")[0].style.display = "none";
                    document.getElementById('fuelendwinp').style.display = 'none';
                    document.getElementsByClassName('fuelcheare1')[0].style.display = 'none';
                    document.getElementsByClassName('fuelcheare2')[0].style.display = 'none';
                    fuelend.style.display = "none";
                    backmain.style.display = "none";
                    main.style.display = "none";
                    fuelend.style.opacity = "0";
                    resettotal();
                }, 5000);
            }
            function resetbtn(){
                document.getElementsByClassName('loader')[1].style.display = 'block';
                document.getElementsByClassName('carloader')[1].style.display = 'block';
                setTimeout(function() {
                    document.getElementsByClassName('loader')[1].style.opacity = '1';
                    document.getElementsByClassName('carloader')[1].style.opacity = '1';
                }, 0);
                if(parseInt(scsp.innerHTML) >= 100){ 
                firebase.database().ref('/players/' + (highscores.length+1)).set({
                    name: namein.value,
                    level:lenum,
                    score: scsp.innerHTML, 
                    referer:document.referrer
                }
            );
            }
                ticksound.play();
                setTimeout(function() {
                    document.getElementsByClassName('loader')[1].style.display = 'none';
                    document.getElementsByClassName('carloader')[1].style.display = 'none';
                    setTimeout(function() {
                        document.getElementsByClassName('loader')[1].style.opacity = '0';
                        document.getElementsByClassName('carloader')[1].style.opacity = '0';
                    }, 0);
                    fuelendbtn.removeEventListener("click",reset);                
                    fuelendbtnbtn.removeEventListener("click",resetbtn);                
                    document.getElementsByClassName("fuelendwinimg")[0].style.display = "none";
                    document.getElementById('fuelendwinp').style.display = 'none';
                    document.getElementsByClassName('fuelcheare1')[0].style.display = 'none';
                    document.getElementsByClassName('fuelcheare2')[0].style.display = 'none';
                    fuelend.style.display = "none";
                    backmain.style.display = "none";
                    main.style.display = "none";
                    fuelend.style.opacity = "0";
                    resethalf();
                }, 5000);
            }
    }

var meternumber = document.getElementById('meternumber'); 
var scale = document.getElementById('div2');
var x = 0.6;
var ite = 42 ; 
function meterfun(){
    if(twokey.w === true && flag === 0 || twokey.s === true && flag === 0){
        if(ite <= 310){
            ite +=  (Math.exp(x -= 0.007));
        }
     scale.style.WebkitTransform = "rotate("+ite+"deg)";
     meternumber.innerHTML = parseInt(ite - 42); 
}
}

function meterrevfun(){
    setTimeout(function () {
    if(!twokey.a && !twokey.d && !twokey.w && !twokey.s  && ite >= 42){
        var idrev = setInterval(function () {
            if(!twokey.a && !twokey.d && !twokey.w && !twokey.s  && ite>=42){
            ite-=4;      
            scale.style.WebkitTransform = "rotate("+ite+"deg)";        
            meternumber.innerHTML = parseInt(ite - 42); 
        }
        else{
            ite = 42;
            scale.style.WebkitTransform = "rotate(42deg)";
            meternumber.innerHTML = 0;                                 
            x = 0.6;                
            clearInterval(idrev);
        }
        },5);     
    }
    },10);

}

var fuelscale = document.getElementById('fueldiv2');
function fuelmeterfun(){
    fuelite--;
     fuelscale.style.WebkitTransform = "rotate("+fuelite+"deg)";   
}

function level() {
    ll+=incm;
    if(flag === 1){
        clearInterval(id55);
    }
    else if(ll >= 297){
        ll = 0;
        if(incm>1){
        incm--;
        }
        let i = 297;
        d++;
        var id77 = setInterval(dec,1);
        function dec() {
            document.getElementById('fill').style.width = i+'px';
            i-=2;
            if(i === 1){
                d = 0;
                ll = 0;
            lenum++;                
            document.getElementById('lp').innerHTML = 'Level ' + lenum;
                clearInterval(id77);
            }        
        }
    }
    else if(d === 0){
    document.getElementById('fill').style.width = ll+'px';
    }
}

var hslist = document.getElementById('hslistol');

//   firebase.database().ref('/players/' + 1).set({
//     name: "Yasir",
//     level: "12",
//     score : "50",
//     referer :'dfs'
//   });
// firebase.database().ref('/players/' + 2).set({
//     name: "Hasir",
//     level: "9",
//     score : "100",
//     referer :'dfs'
    
//   });
// firebase.database().ref('/players/3').set({
//     name: "Nasir",
//     level: "17",
//     score : "150",
//     referer :'dfs'
//   });

highscores = [];
var ranki = 1;
firebase.database().ref('/players/').on('value', function(snapshot) {
highscores = snapshot.val();
    // console.log(highscores);
    setTimeout(()=>{
        load = true;
        // console.log('load true');
    }, 3000);
    sortshift();
    makereferer();
});

function sortshift() { 
highscores.shift();
// console.log(highscores);    
highscores.sort(function (a, b) {
  return  parseInt(b.score) - parseInt(a.score);
});    
// console.log(highscores);    
ranki = 1;
var ol = document.getElementById('hslistol');
    ol.innerHTML = null;
    for (let i = 0; i < highscores.length; i++) {
var spanrank = document.createElement('span');
var spanname = document.createElement('span');
var spanlevel = document.createElement('span');
var spanscore = document.createElement('span');
var li = document.createElement('li');
if( i%2 === 0){
    li.style.backgroundColor = 'rgba(200,200,0,0.4)';
    li.style.boxShadow = 'inset 0px 0px 50px  rgba(200,255,0,0.7)';
}
else{
    li.style.backgroundColor = 'rgba(0,255,0,0.1)';
    li.style.boxShadow = 'inset 0px 0px 50px  rgba(0,255,0,0.5)';
}
spanrank.innerHTML = ranki;
if(i === 0 || i === 1 || i === 2){
    li.style.backgroundImage = 'url("images/bonus.png")';
    li.style.backgroundSize = '9%';
    li.style.backgroundRepeat = 'no-repeat';
    li.style.backgroundPositionX = '23px';
    li.style.backgroundPositionY = '0px';
    spanrank.style.top = '-10px';
    if(i === 0){
        li.style.backgroundColor = 'rgba(225,0,0,0.2)';
        li.style.boxShadow = 'inset 0px 0px 50px  rgba(225,0,0,0.6)';
    }
    else if(i === 1){
        li.style.backgroundColor = 'rgba(0,0,170,0.2)';
        li.style.boxShadow = 'inset 0px 0px 50px  rgba(0,0,170,0.4)';
        
    }
    else if(i === 2){
        li.style.backgroundColor = 'rgba(0,0,225,0.1)';
        li.style.boxShadow = ' inset 0px 0px 50px  rgba(2250,0,225,0.5)';
        
    }
}
spanrank.className = 'hsrank';
spanname.innerHTML = highscores[i].name;
spanname.className = 'hsname ';
spanlevel.innerHTML = highscores[i].level;
spanlevel.className = 'hslevel';
spanscore.innerHTML = highscores[i].score;
spanscore.className = 'hsscore';
li.appendChild(spanrank);
li.appendChild(spanname);
li.appendChild(spanlevel);
li.appendChild(spanscore);
ol.appendChild(li);
ranki++;   
    }
}
function ranker() {
    var s1 = document.getElementById('s1');
    var s3 = document.getElementById('s3');
    var s1rank = document.getElementById('s1rank');
    var s2rank = document.getElementById('s2rank');
    var s3rank = document.getElementById('s3rank');
    var myscore = 0;
    var ai = 1;
    var ranks = 0;
    var hsa = highscores;
    s1rank.innerHTML = '#'+(hsa.length);
    s1.innerHTML = hsa[hsa.length-1].score;
    s2rank.innerHTML = '#'+(hsa.length+1);
    s2.innerHTML = 0;
    s3rank.innerHTML = '-- -- ';
    s3.innerHTML = '-- -- --';
    var scorechake = setInterval(function() {
        if(flag === 0){
        myscore = parseInt(s2.innerHTML);
        if(myscore >= parseInt(s1.innerHTML) ){
            if( ranks === 0 ){
                ranksound.play(); 
                ranks++;
                setTimeout(function() {
                    ranks = 0;
                }, 500);
            }
            s1rank.innerHTML = '#'+(parseInt(s1rank.innerHTML.split("#").join(''))-1);
            if( parseInt(parseInt(s1rank.innerHTML.split("#").join(''))) === 0){
                s3rank.innerHTML = s2rank.innerHTML;
                s1rank.innerHTML = '-- --';
                s3.innerHTML = s1.innerHTML;
                s1.innerHTML = '-- -- --';
                s2rank.innerHTML = '#1';
                s2.style.fontSize = "40px";   
                s2rank.style.fontSize = "40px"; 
                setTimeout(function() {
                    s2.style.fontSize = "30px";               
                    s2rank.style.fontSize = "30px";                          
                }, 500);
                clearInterval(scorechake);
            }
            else{
                s3rank.innerHTML = s2rank.innerHTML;
                s3.innerHTML = s1.innerHTML;
                s2rank.innerHTML = '#' + (parseInt(s1rank.innerHTML.split("#").join('')) + 1);
                s1.innerHTML = hsa[parseInt(s1rank.innerHTML.split("#").join(''))-1].score;
                    s2.style.fontSize = "40px";   
                    s2rank.style.fontSize = "40px"; 
                    setTimeout(function() {
                        s2.style.fontSize = "30px";               
                        s2rank.style.fontSize = "30px";                          
                    }, 500);
                }
            }
        }
    else{
                clearInterval(scorechake);    
    }
    },50);
}

var bim = [1,2,3];
var rocket = document.getElementById('rd');
function fire(ell) {
var oppocargccc = ell;
var rocketgccc;
var id102 = setInterval(frame8, 10);
var blastimg = document.createElement('img');
    blastimg.id = 'blastimg';
    blastimg.src = 'images/blast1.gif';
    document.getElementById('back').appendChild(blastimg);
    
function frame8() {
    if(document.getElementById(ell.id).getBoundingClientRect().top < 600 && flag === 0){
        oppocargccc = document.getElementById(ell.id).getBoundingClientRect();
        rocketgccc = rocket.getBoundingClientRect();
        if(rocketgccc.bottom >= oppocargccc.top && oppocargccc.bottom >= rocketgccc.top){
            if(( oppocargccc.right >= rocketgccc.left && oppocargccc.right <= rocketgccc.right) 
            ||( oppocargccc.left <= rocketgccc.right && oppocargccc.left >= rocketgccc.left)
            ||(  oppocargccc.left <= rocketgccc.left && oppocargccc.right >= rocketgccc.right))
     {
       bombblastsound.play();
    //    blastimg = document.createElement('img');
        setTimeout(function () {
            // document.getElementById('back').removeChild(blastimg);
            blastimg.style.display = 'none';
        //    console.log(blastimg.style.display);
            
       },1200);
    //    blastimg.id = 'blastimg';
    //    blastimg.src = 'images/blast1.gif';
       blastimg.style.top = (rocket.getBoundingClientRect().top - 290) + "px";
       blastimg.style.left = (rocket.getBoundingClientRect().left - 150) + "px";
       blastimg.style.display = 'block';
    //    console.log(blastimg.style.display);
    
    //    document.getElementById('back').appendChild(blastimg);
       rocket.style.display = 'none';
       ell.style.display = 'none';
       clearInterval(id102);
     }
    }
}
else{
    clearInterval(id102);
}
}
}
var wait = 0;
var rocketaval = 1;
var rocketcount = document.getElementById('rocketstock').getElementsByTagName('span');
function rockettrigger(et) {
    if(et.charCode === 102 && flag === 0){
var inccc = parseInt(document.getElementById('lcar').getBoundingClientRect().top);
    if(rocketaval === 1){
    for (var rite = 0; rite < rocketcount.length; rite++) {
        if(rocketcount[rite].innerHTML != ''){
            rocketaval = 0;
            rocketcount[rite].innerHTML = '';
            break;
        }        
    }
 }
    if(wait === 0 && rocketaval === 0){
        wait++;
        setTimeout(function () {
           wait =0; 
            rocketaval = 1;
        },1200);
        misslelaunchsound.play();
        let usercar = document.getElementById('lcar').getBoundingClientRect();
        rocket.style.display = 'block';
        rocket.style.top = usercar.top + 'px';
        rocket.style.left = (usercar.left + 40) + 'px';
        let roter = setInterval(function () {            
        if(parseInt(rocket.style.top) > -50){
            inccc-=6;     
            rocket.style.top = inccc+"px";    
            }
        else{
            rocket.style.display = 'none';
            clearInterval(roter);
        }
        },5);
    }   
    }
}



   var rocketmake;
    function rocketfun(){
        
        if(flag === 0){
            rocketmake = document.createElement('div');
            rocketmake.style.width = '60px';
            rocketmake.style.height = '60px';
            rocketmake.style.position = 'Absolute'
            rocketmake.style.zIndex="+111";            
            rocketmake.style.top = postop[Math.floor(Math.random() * 17)];            
            rocketmake.style.left = posleft[Math.floor(Math.random() * 25)];            
            var rocketmakeimg = document.createElement('img');
            rocketmakeimg.style.width = '90px';
            rocketmakeimg.style.height = '90px';
            rocketmakeimg.src ="images/rocket.png";
            rocketmake.appendChild(rocketmakeimg);
            rocketmake.style.animation = 'rota 1.5s linear infinite';
            body.appendChild(rocketmake);
            cheakrocket(rocketmake);
    }
    }

function cheakrocket(bonusgcmain){
    var bonusgc ; 
    var rf = 0;
    setTimeout(remflag,6000);
    function remflag() {
        rf = 1;
    }    
    let id18 = setInterval(cb,10);
    function cb() {
        if(rf === 0){
     bonusgc = bonusgcmain.getBoundingClientRect();
     mymycargc = document.getElementById("lcar").getBoundingClientRect();
     if(bonusgc.bottom >= mymycargc.top && mymycargc.bottom >= bonusgc.top){
            if(( mymycargc.right >= bonusgc.left && mymycargc.right <= bonusgc.right) 
            ||( mymycargc.left <= bonusgc.right && mymycargc.left >= bonusgc.left)
            ||(  mymycargc.left <= bonusgc.left && mymycargc.right >= bonusgc.right))
     {
      bonussound.play();
      bonusgcmain.style.display = 'none';        
      for(let fr = 0; fr < rocketcount.length; fr++){
          if(rocketcount[fr].innerHTML === ''){
            var img = document.createElement('img');
            img.src = 'images/rocket.png';
            rocketcount[fr].appendChild(img);
        }
      }
     }
     }
        }
     else{
        body.removeChild(bonusgcmain);
        clearInterval(id18);
    }       
    }                        
}
function makereferer() {
    var oll = document.getElementById('reful');
    oll.innerHTML = null;
    for (let i = 1; i < highscores.length; i++) {
    var li = document.createElement('li'); 
    li.innerHTML = highscores[i].name+"  :  " +highscores[i].referer ;
    oll.appendChild(li);   
    }   
}

var  cartime ;
var  bonustime ;
var  fueltime ;
var  rockettime ;
function maketime() {
    cartime = parseInt(document.getElementById('admin').getElementsByTagName('span')[0].getElementsByTagName('select')[0].value);
    bonustime = parseInt(document.getElementById('admin').getElementsByTagName('span')[1].getElementsByTagName('select')[0].value);
    fueltime = parseInt(document.getElementById('admin').getElementsByTagName('span')[2].getElementsByTagName('select')[0].value);
    rockettime = parseInt(document.getElementById('admin').getElementsByTagName('span')[3].getElementsByTagName('select')[0].value);
    main.style.display = "block";
    document.getElementById('admin').style.display = "none";
}
maketime();
document.getElementById('admin').getElementsByTagName('button')[0].addEventListener('click',maketime);
function resettotal() {
        elemn1.style.top = "0px";
        elemn2.style.top = "219px";
        elemn3.style.top = "438px";
        elemn4.style.top = "-219px";
    for(let fr = 0; fr < rocketcount.length; fr++){
            if(rocketcount[fr].innerHTML === ''){
                var img = document.createElement('img');
                img.src = 'images/rocket.png';
                rocketcount[fr].appendChild(img);
            }
    }
    sc = 0;
    x = 1;
    y = x;   
    mm = 0;
    flag = 0;
    unicod = 0;
    etop = 450; 
    eleft = 300;
    inc = -130;
    ll = 0;
    d = 0;
    incm = 5;
    lenum = 1; 
    fuelite = 225;
    ok = 0;
    x = 0.6;
    s2.innerHTML = 0;
    scsp.innerHTML = 0;
    sc = 0 ;
            body.removeEventListener('keypress',meterfun);
            body.removeEventListener('keyup',meterrevfun);
            body.removeEventListener("keydown", dig);
            body.removeEventListener("keypress", cod);
            body.removeEventListener("keyup", resetob);
            body.removeEventListener("keypress", myMove1);
            body.removeEventListener('keypress',rockettrigger);

    document.getElementById('scspan').innerHTML = 0;
    document.getElementById('lp').innerHTML ='Level 1';
    document.getElementById('fill').style.width ='0px';
    document.getElementById('fill').style.top ='-20px';
    document.getElementById('filllimit').style.left ='0px';

    fuelscale.style.WebkitTransform = "rotate("+225+"deg)";   
    elemen.style.top = '450px';
    elemen.style.left = '300px';

    wait = 0;
    rocketaval = 1;
    backmain.style.display = "block";
    maketime();
    main.style.display = 'none';
    playgame();
}

function resethalf() {
        elemn1.style.top = "0px";
        elemn2.style.top = "219px";
        elemn3.style.top = "438px";
        elemn4.style.top = "-219px";
    for(let fr = 0; fr < rocketcount.length; fr++){
            if(rocketcount[fr].innerHTML === ''){
                var img = document.createElement('img');
                img.src = 'images/rocket.png';
                rocketcount[fr].appendChild(img);
            }
    }

    sc = 0;
    x = 1;
    y = x;   
    mm = 0;
    flag = 0;
    unicod = 0;
    etop = 450; 
    eleft = 300;
    inc = -130;
    ll = 0;
    d = 0;
    incm = 5;
    lenum = 1; 
    fuelite = 225;
    ok = 0;
    x = 0.6;
            body.removeEventListener('keypress',meterfun);
            body.removeEventListener('keyup',meterrevfun);
            body.removeEventListener("keydown", dig);
            body.removeEventListener("keypress", cod);
            body.removeEventListener("keyup", resetob);
            body.removeEventListener("keypress", myMove1);
            body.removeEventListener('keypress',rockettrigger);

    document.getElementById('scspan').innerHTML = 0;
    document.getElementById('lp').innerHTML ='Level 1';
    document.getElementById('fill').style.width ='0px';
    document.getElementById('fill').style.top ='-20px';
    document.getElementById('filllimit').style.left ='0px';

    fuelscale.style.WebkitTransform = "rotate("+225+"deg)";   
    elemen.style.top = '450px';
    elemen.style.left = '300px';

    wait = 0;
    rocketaval = 1;
    maketime();
    main.style.display = 'block';
}


