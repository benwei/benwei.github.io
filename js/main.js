
$( document ).ready(function() {
        $('.dropable').bind("mouseenter",function(){
            $(this).children('.hoverDrop').stop(true,true).show();
        }).bind("mouseleave",function(){
            $(this).children('.hoverDrop').stop(true,true).hide();
        });

});
