/*$("#px").on("click",function() {
 $("file:///C:/Users/Guest1/Desktop/55web/1w/flexbox/img/IMG_1992.jpg" ).fadeIn("slow");
})
*/

let oi = document.getElementById("oi");

oi.addEventListener("click",function(){
    let img3 = document.getElementsByClassName("img3");
    img3[0].src = "file:///C:/Users/Guest1/Desktop/55web/1w/flexbox/img/IMG_1992.jpg";
    console.log(img3);

    

})
