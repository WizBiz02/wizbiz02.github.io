
  function luis_color_time(){
    let r=1
    let g=1
    let b=1
    let rr=0
    let gg=0
    let bb=0
    while( 1.05/(.2126*r+.7152*g+.0722*b)<=7){
      r=Math.random()
      g=Math.random()
      b=Math.random()
 }

 while((.2126*rr+.7152*gg+.0722*bb)/.05<=7 || (.2126*rr+.7152*gg+.0722*bb)/(.2126*r+.7152*g+.0722*b)<4.5){
      rr=Math.random()
      gg=Math.random()
      bb=Math.random()
 }
 document.querySelector(':root').style.setProperty("--darkcolor", "rgb("+ r*255+","+g*255+","+b*255+")");
 document.querySelector(':root').style.setProperty("--lightcolor", "rgb("+ rr*255+","+gg*255+","+bb*255+")");
  return
 
}