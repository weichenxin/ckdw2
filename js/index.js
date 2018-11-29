$(document).ready(function () {

    // $('#content_body').load('./html/page1.html');
    initialize();
    bindEvent();
});

function initialize() {
    $('#page1').show();
}

function bindEvent() {
    $(".btn").click(function () {
        var index = '#page' + this.getAttribute("value");
        $(".page").hide();
        $(index).show();
    });
}