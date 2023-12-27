$(function(){
    $("#toggle_btn").on('click',function(){
        if ($("#mask").hasClass("open")) {
            $("#mask").removeClass('open');
        } else {
            $("#mask").addClass('open');
        }
        console.log("click");      
    })
    console.log("hello!live");  

})