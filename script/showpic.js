function showpic(whichpic){
  var source=whichpic.getAttribute("href");
  var placeholder=document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var txet=whichpic.getAttribute("title");
  var description=document.getElementByld("description");
  description.firstChild.nodeValue=text;
}
  
