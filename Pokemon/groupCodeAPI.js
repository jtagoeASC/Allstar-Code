
var url="http://maps.googleapis.com/maps/api/staticmap?";
var center= "center=601 26th St. NYC";
var zoom = "zoom=16";
var size= "size=600x300";

url=url + center + "&" + zoom + "&" + size;
url=encodeURI(url);
var htmlIMG=document.createElement('img');

//for (var i =0; i<pikas.length; i >= 0; i++) {
	//url= url + markerStart + encodeURI(pikas[i]); 

//}
$("body").append(htmlIMG);
$("img").attr("src",url);