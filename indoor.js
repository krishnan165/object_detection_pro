objects=[];
function preload()
{
  nindoor=loadImage("mm.jpg")
}
function setup()
{
   canvas=createCanvas(640,500,0,0);
   canvas.position(450,200);
 
   object_detection=ml5.objectDetector("cocossd",modelLoaded);
}
function modelLoaded()
{
  console.log("Model is loading");
 
  object_detection.detect(nindoor,gotResult);
}
function gotResult(error,results)
{
  if(error)
  {
    console.log(error);
  }
  else{
    console.log(results);
    objects=results;
  }
}
function draw()
{
    image(nindoor,0,0,640,500);

    
       for(i=0;i<objects.length;i++)
       {
         
         fill("cyan");
         percent=floor(objects[i].confidence*100);
         textSize(20);
         text(objects[i].label+"  "+percent+" %",objects[i].x+10,objects[i].y+20);
         noFill();
         stroke("cyan");
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
 
     
 
}
