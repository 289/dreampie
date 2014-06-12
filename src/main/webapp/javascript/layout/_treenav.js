$(function () {
    $(".treenav li").click(function () {
        var li = $(this);
        if (!li.parent().parent().is(".treenav")) {
            $(".treenav li").removeClass("active");
            li.parents(".treenav li").addClass("active");
            li.addClass("active");
            li.siblings().removeClass("active");
            li.siblings().children("li.active").removeClass("active");
            var icon = li.find("i:first");
            var children = li.children("ul.nav");
            if (children.length > 0) {
                icon.toggleClass("glyphicon-minus-sign");
                icon.toggleClass("glyphicon-plus-sign");
            }
            children.toggleClass("hide");
        }
        event.stopPropagation();    //  阻止事件冒泡
    });
})
