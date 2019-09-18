function addLength(string) 
{
var atskiri = string.split(" ");
var zodis;
var rezultatas;
var galutinis = [];
for ( var i = 0; i < atskiri.length; i++)
  {    
   zodis = atskiri[i];
   rezultatas = zodis + " " + zodis.length;
   galutinis.push(rezultatas);
   
  }
