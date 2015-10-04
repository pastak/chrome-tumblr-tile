$(function() {

    tumblrTile.loadConfig();

    var $apiKey    = $('#setting input[name="apiKey"]');
    var $tag  = $('#setting input[name="tag"]');
    var $baseWidth = $('#setting input[name="baseWidth"]');
    var $margin    = $('#setting input[name="margin"]');

    $apiKey.val(tumblrTile.config.apiKey);
    $tag.val(tumblrTile.config.tag);
    $baseWidth.val(tumblrTile.config.baseWidth);
    $margin.val(tumblrTile.config.margin);

    $("#setting").submit(function() {
        var hash = {
            apiKey   : $apiKey.val(),
            tag : $tag.val(),
            baseWidth: parseInt($baseWidth.val()),
            margin   : parseInt($margin.val())
        };

        tumblrTile.saveConfig(hash);
        return false;
    });
});
