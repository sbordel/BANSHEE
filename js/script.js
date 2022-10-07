$(document).ready(function () {

    let iconAudio = document.createElement('audio');
    for (let i = 1; i < 6; i++) {
        iconAudio[i] = new Audio();
        iconAudio[i].src = "assets/sounds/sound_" + i + ".mp3";
    }
    $(".index01").click(function () {
        window.location.href = "navigation-en.html";
    });
    $(".bg-overlay").click(function () {
        $(".bg-overlay").css("display", "none");
        $(".iconBtn").css("filter", "none");
        $(".popUp").css("display", "none");
        $(".v2").css("display", "none");
    });
    $(".popUp.v2").click(function () {
        $(".bg-overlay").css("display", "none");
        $(".iconBtn").css("filter", "none");
        $(".popUp").css("display", "none");
        $(".v2").css("display", "none");
    });
    $(".iconBtn").click(function () {
        $(this).css("filter", "invert(50%)");
        $(".popUp").css("display", "none");
        $(".bg-overlay").css("display", "block");
    });
    $("#icon-1").click(function () {
        $("#popUp1").css("display", "block");
        // $("#popUp1").show(100);
        iconAudio[1].play();
    });
    $("#icon-2").click(function () {
        $("#popUp2").css("display", "block");
        iconAudio[2].play();
    });
    $("#icon-3").click(function () {
        $("#popUp4").css("display", "block");
        iconAudio[3].play();
    });
    $("#icon-4").click(function () {
        $("#popUp3").css("display", "block");
        iconAudio[4].play();
    });
    $("#icon-5").click(function () {
        $(".v2").css("display", "flex");
        iconAudio[5].play();
    });
});
