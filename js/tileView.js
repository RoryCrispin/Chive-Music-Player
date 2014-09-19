/**
 * Created by Rory on 14/09/2014.
 */
$(".homeTile").hover(function(){
    $(this).find('.hoverOverlay').css("opacity","0.6");
},function(){
    $(this).find('.hoverOverlay').css("opacity","0");
});