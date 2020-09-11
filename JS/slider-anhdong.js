$(document).ready(function () {
    var stt = 0;
    starimg = $("img.slideanh:first").attr("stt");
    endimg = $("img.slideanh:last").attr("stt");
    $("img.slideanh").each(function () {
        if ($(this).is('visible'))
            stt = $(this).attr("stt");

    });
    $("#next").click(function () {
        if (stt == endimg) {
            stt = -1;
        }
        next =++stt;
        $("img.slideanh").hide();
        $("img.slideanh").eq(next).show();
    });
    $("#prev").click(function () {
        if (stt == 0) {
            stt = endimg;
            prev = stt++;
        }
        prev = --stt;
        $("img.slideanh").hide();
        $("img.slideanh").eq(prev).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);

});
 