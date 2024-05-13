var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


document.getElementById("btn").onclick=function(){
  document.getElementById("copy").style.display="block"
  
}
document.getElementById("btn").onmouseover=function(){
  document.getElementById("copy").style.display="none"
}

document.getElementById("btn2").onclick=function(){
  document.getElementById("copy2").style.display="block"
  
}
document.getElementById("btn2").onmouseover=function(){
  document.getElementById("copy2").style.display="none"
}

document.getElementById("btn3").onclick=function(){
  document.getElementById("copy3").style.display="block"
  
}
document.getElementById("btn3").onmouseover=function(){
  document.getElementById("copy3").style.display="none"
}