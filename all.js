$(document).ready(function() {
    var images = ["", "", "", "", "", ""]; // replace with your images

    function getRandomImage() {
        var index = Math.floor(Math.random() * images.length);
        return images[index];
    }

    function scrollColumn(column) {
        var speed = Math.random() * 5000 + 30000; // adjust as needed for slower scroll speed
        column.animate({ scrollTop: column.prop("scrollHeight") - column.height() }, speed, "linear", function() {
            column.append('<img src="' + getRandomImage() + '" alt="Random Image" style="width:100%">');
            column.prop("scrollTop", 0);
            scrollColumn(column);
        });
    }

    $(".column").each(function() {
        for (var i = 0; i < 5; i++) {
            $(this).append('<img src="' + getRandomImage() + '" alt="Random Image" style="width:100%">');
        }
        scrollColumn($(this));
    });
});
