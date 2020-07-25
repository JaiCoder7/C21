function bounceOff(obj,obj1){


    if (obj.x - obj1.x < obj1.width/2 + obj.width/2
      && obj1.x - obj.x < obj1.width/2 + obj.width/2) {
        obj.velocityX = obj.velocityX * (-1);
        obj1.velocityX = obj1.velocityX * (-1);
    }
    if (obj.y - obj1.y < obj1.height/2 + obj.height/2
    && obj1.y - obj.y < obj1.height/2 + obj.height/2){
        obj.velocityY = obj.velocityY * (-1);
        obj1.velocityY = obj1.velocityY * (-1);
    }
    }

    function isTouching(ob1,ob2){
if(ob1.x-ob2.x < ob1.width/2 + ob2.width/2
   && ob2.x-ob1.x < ob1.width/2 + ob2.width/2 && ob1.y-ob2.y < ob1.height/2 + ob2.height/2
   && ob2.y-ob1.y < ob1.height/2 + ob2.height/2 ){

return true;


}

else {

    return false
}
    }

    