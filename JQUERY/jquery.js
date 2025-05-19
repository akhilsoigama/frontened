// $('selector').action()
$(document).ready(function () {

    $('.btn1').click(function () {
        console.log("you clicked on btn1");
    });
    $('.btn2').dblclick(function () {
        // $('.btn2').hide();  
        console.log("you double clicked on btn2");
    });
    $('.btn3').mouseenter(function () {
        // $('.btn2').hide();
        console.log("you entered on", this);
    });
    $('p').click(function () {
        // $('p').hide();
        $(this).hide();
        console.log("you hide on pera", this);
    });
    $('body').click(function(){
        $('body').css('background-color','crimson'); 
        $('body').css('color','#fff');   
    });
    $('button').on({
        click: function () {
            console.log("click",this);
        },
        mouseleave : function(){
            console.log("mouseleave",this);   
        }
    });
    $('#text').hide(2000,function(){
        console.log('hidden')
    });
    $('#text').show(2000,function(){
        console.log('show')
    });
    $("#toggle").click(function(){
        $('#text').toggle(1500);
    });
    $("#toggle").click(function(){
        $('#text').fadeOut(1500);
    });
    $("#toggle").click(function(){
        $('#text').fadeIn(1500);
    });
    $("#toggle").click(function(){
        $('#text').fadeToggle(1500);
    });
    $("#toggle").click(function(){
        $('#text').fadeTo(1500);
    });
    $('#toggle').click(function(){
        $('#text').slideUp(3000);
    });
    $('#toggle').click(function(){
        $('#text').slideDown(3000);
    });
    $('#toggle').click(function(){
        $('#text').slideToggle(3000);
    });
    $('#toggle').click(function(){
        $('#text').animate({
            opacity:0.7,
            height:'200px',
            width:'300px',       
        },3000);
    });

});