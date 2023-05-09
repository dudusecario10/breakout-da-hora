var tijolo,bola,raquete,estadojogo,bordas,tijolos,vidas,pontuacao

function setup() {
  
 createCanvas(400,400)
estadojogo = 'parado'
 montarjogo()
  pontuacao = 0
  vidas = 15
  }
  
  
  
  
  
  
  
 
  
  





function draw(){
  background(0)
  
  textSize(15)
    text('pontuacao:' +pontuacao, 40, 25)  
     text('vidas:' +vidas, 300, 25)
  
  if(estadojogo == "parado"){
    
    
    bola.velocityY = 0
    bola.velocityX = 0
    bola.x = 200
    bola.y = 250
    
   raquete.velocityY = 0
   raquete.velocityX = 0
   raquete.x = 200
   raquete.y = 350
    
    
    
    
    
    
    
    
    
    tijolos.setVelocityYEach(0)
    
    textSize(20)
    
    
    
    
    text("pressioneESPAÇO para iniciar", 60,200)
    
   if (keyDown("SPACE")){
     
  tijolos.setVelocityYEach(0.2)
     
     estadojogo = "play"; 
     bola.velocityY = -5;
     bola.velocityX = -6;
   }  
    
  }  
    
    
    
    
    
    
    
  
  
   if(estadojogo == "play"){
    
     if(!tijolos[0]){
       
       textSize(25)
    text('GAnhemo', 150, 150)
           bola.remove()
  raquete.remove()
       
       
   }  
     
     
     
    if(tijolos.isTouching(bordas[3])) {
       estadojogo = "gameOver"
       
    }  
   
       
     
     FIMDEJOGO()
     
    for (i = 0; i< 3;  i ++) {
      
       bola.bounceOff(bordas[i]);
    }
    
  
    
    if ( keyDown("left")){ 
     raquete.velocityX = -8
    }
     
      if ( keyDown("right")){ 
     raquete.velocityX = +8
     
      }
     
     raquete.collide(bordas)
     
    bola.bounceOff(raquete) 
     
    bola.bounceOff(tijolos, removertijolo) 
     
  } 
  
   if(estadojogo == "gameOver"){
    
    
    tijolos.destroyEach()
    
  
  
   textSize(30)
    text('GAMEOVER', 110, 220)  
     bola.remove()
  raquete.remove()
  
  } 
  
  
  
  
  
  drawSprites()
  
}
function FIMDEJOGO(){
  
  if(bola.y > 400){
    
               vidas = vidas - 1
    
                  if(vidas < 1){
                    estadojogo = "gameOver"
                    }else{
                    estadojogo = "parado"
                 
                
                      
                   }               
                    
              }    
  
}
















function removertijolo(bola,tijolo){
  
tijolo.remove() 
  
  pontuacao = pontuacao + 1
  
}


function montarjogo(){
  
  tijolos = createGroup()
  
  criarLinha(0,'rgb(188,2,253)') 
   criarLinha(29,'rgb(177,250,177)')
   criarLinha(29 + 29,'rgb(109,109,220)')
   criarLinha(29 + 29 + 29,'rgb(243,243,125)')
  
  bordas=createEdgeSprites()
  
  bola=createSprite(200,250,20,20)
  bola.shapeColor='rgb(246,164,12)'
  
 raquete=createSprite(200,350,120,10) 
  raquete.shapeColor='rgb(241,105,105)'
}



  
  
  
  
  

function criarLinha(y,cor){

for(i= 0; i<=5; i++){
    
    tijolo = createSprite(65 + 54 * i ,50 +  y  ,50,25 )
    tijolo.shapeColor= cor
  tijolos.add(tijolo)
}
  
} 
  