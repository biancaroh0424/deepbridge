$(function(){
$('#bottom_nav_main_btn').click(function(){
$('.sub_bottom_nav').animate({height: 'toggle'},200);
$('.bottom_menu_nav_main').animate
({width: 'toggle'},60);
$('#bottom_nav_right').slideToggle(20);
$('#close_nav').toggle(20);
$('#bottom_nav_main_btn').toggleClass('click_nav_bottom');
});
$('#bottom_nav_tablet').click(function(){
    $('#bottom_nav_tablet').toggleClass('bottom_nav_tablet_active');
    $('#subbottom_nav_tablet').animate({height: 'toggle'},200);
    $('#sub_bottom_nav_tablet_default').toggle();
    $('#sub_bottom_nav_tablet_active').toggle();
});
$('#nav_right_tablet').click(function(){
$('#lang_option_tablet').animate({height: 'toggle'},120)
});

$('#nav_right_phone').click(function(){
    $('#lang_option_phone').animate({height: 'toggle'},120)
    });

});