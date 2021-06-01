class Game{
    constructor(){

    }
 play(){
 background("white")
 drawSprites()    
form.greeting1.hide()
form.greeting2.hide()

    player.getPlayerInfo() 
 if(allPlayers!==undefined){
     var index=0
     var x=200
     var y=0
if(keyDown(UP_ARROW)){
    player.distance=player.distance+10
    player.update()
}     
 var textPosition=150
 for(var plr in allPlayers){
     index=index+1
     x=x+150
     y=displayHeight-allPlayers[plr].distance
     cars[index-1].x=x
     cars[index-1].y=y
     textPosition=textPosition+20
     if(plr=="player"+player.index){
         fill("red")
         cars[index-1].shapeColor="red"
         camera.position.y=y
     }
     else{
         fill("yellow")
     }
     text(allPlayers[plr].name+" : "+ allPlayers[plr].distance,100,textPosition)
 }
}

}

    getState(){
database.ref('gameState')
.on("value",function(data){
gameState=data.val()
})
 }   
 updateState(x){
     database.ref('/')
     .update({
         gameState:x
     })
 }
}