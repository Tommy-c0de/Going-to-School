$(".next").dblclick(function() {
    $(".begin").hide();
    $("h1").text("Alarm goes off. Do you get up?");
    $(".alarm").show();
    $(".yes").show();
    $(".no").show();
    $(".next").hide();
    $("body").css("background-color", "red");
    $("h2").hide();
});
$(".no").click(function() {
    $(".alarm").hide();
    $("h1").text("Lucky you, the lava that magically appeared on your floor disappeared. After 5 minutes, you get up.");
    $(".cleanFloor").show();
    $(".yes").hide();
    $(".no").hide();
    $(".afterLava").show();
    $("body").css("background-color", "#98a3f5");
});
$(".yes").click(function() {
    $(".alarm").hide();
    $("h1").text("As soon as you get up, you step on floor covered in lava.");
    $(".lavaFloor").show();
    $(".yes").hide();
    $(".no").hide();
    $(".end1").show();
    $("body").css("background-color", "black");
});
$(".afterLava").click(function() {
    $(".cleanFloor").hide();
    $("h1").text("After your morning routine, do you take the bus or walk to school?");
    $(".bus").show();
    $(".walk").show();
    $(".afterLava").hide();
    $("body").css("background-color", "#a5f0ea");
    $(".busButton").show();
    $(".walkButton").show();
});
$(".end1").click(function() {
    $(".begin").hide();
    $("h1").text("Do you get up when your alarm goes off?");
    $(".alarm").show();
    $(".yes").show();
    $(".no").show();
    $(".next").hide();
    $("body").css("background-color", "red");
    $(".end1").hide();
    $(".lavaFloor").hide();
    $(".dehydration").hide();
});
$(".busButton").click(function() {
    $(".costCo").show();
    $(".bus").hide();
    $(".walk").hide();
    $("h1").text("You decide to take the bus, you end up taking the wrong bus and get dropped off at Costco.");
    $(".busButton").hide();
    $(".walkButton").hide();
    $(".next2").show();

});
$(".walkButton").click(function() {
    $(".dehydration").show();
    $(".bus").hide();
    $(".walk").hide();
    $("h1").text("You get tired from walking due to lack of exercise and die from dehydration. ");
    $(".end1").show();
    $(".busButton").hide();
    $(".walkButton").hide();
    $("body").css("background-color", "black");
});
$(".next2").click(function() {
    $(".costCo").hide();
    $(".next2").hide();
    $("h1").text("Get back to school or shop at costco?");
    $(".shopping").show();
    $(".school").show();
    $(".shop").show();
});
$(".shop").click(function() {
    $(".mayo").show();
    $(".shopping").hide();
    $("h1").text("When you were searching for mayonnaise in aisle 7, you find a check for 1 million dollars. You invest in stocks and dropout. ");
    $(".shop").hide();
    $(".walk").hide();
    $(".school").hide();
    $(".nice").show();
});
$(".nice").click(function() {
    $(".mayo").hide();
    $(".nice").hide();
    $("h1").text("Alarm goes off. Do you get up?");
    $(".alarm").show();
    $(".yes").show();
    $(".no").show();
    $(".next").hide();
    $("body").css("background-color", "red");
    $("h2").hide();
});
$(".school").click(function() {
    $(".shopping").hide();
    $(".school").hide();
    $(".shop").hide();
    $("h1").text("On the walk to school, Jason muggs your lunch money. *Dies of hunger*");
    $(".end2").show();
    $(".robber").show();
    $("body").css("background-color", "black");
});
$(".end2").click(function() {
    $(".robber").hide();
    $(".end2").hide();
    $("h1").text("Alarm goes off. Do you get up?");
    $(".alarm").show();
    $(".yes").show();
    $(".no").show();
    $(".next").hide();
    $("body").css("background-color", "red");
    $("h2").hide();
});