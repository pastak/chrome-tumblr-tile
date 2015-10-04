$(function() {
    tumblrTile.draw();
	a=document.getElementById("commonlink");
a.addEventListener("click",function(){
	chrome.tabs.update( {url:"chrome://apps/"} );
},true);
});
