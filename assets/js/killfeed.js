$(function() {
    var tKillNames = ["arryk"];//you can add or remove here more "teammates"
    var ctKillNames = ["s1mple", "skeet.cc user", "frogling", "franzj", "f0rest"]; //you can add here more "enemies"
    var weapons = ["ak47", "deagle", "awp" /*, "ssg", "g3sg1", "m4a4"*/]; //you can add or remove here more images of weapons here
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', './assets/img/csgo/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png'); //drawing a weapon
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(2000).fadeOut(1000, function() {
            $(this).remove()
        }))
    }
    $(document).on("contextmenu", function(e) {
        e.preventDefault()
    });
    window.setInterval(handleKillFeed, 850)// time between kills
}); 
