function upDate(previewPic){
    // 1) Change the url for the background image of the div with the id = "image" to the source file of the preview image
    document.getElementById("image").style.backgroundImage="url('"+previewPic.src+"')";
    document.getElementById("image").innerHTML=previewPic.alt;

}
function unDo(){  
    document.getElementById("image").style.backgroundImage='url()';
    document.getElementById("image").innerHTML='Hover over an image below.';
}