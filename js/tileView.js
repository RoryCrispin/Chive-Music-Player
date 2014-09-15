$(".homeTile").hover(function(){
        $(this).find('.hoverOverlay').css("opacity","0.6");
        $(this).find('.hoverOverlay i').css("opacity","1");
    },function(){
        $(this).find('.hoverOverlay').css("opacity","0");
        $(this).find('.hoverOverlay i').css("opacity","0");
    }
);


