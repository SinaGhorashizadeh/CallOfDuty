
var ATVI = ATVI || {};

(function($, ATVI) {

	var ld = ATVI.localeDetector,
        region = undefined;

    var init = function() {
		if (ld.region && ld.region == 'ca') addPrivacyLink();
        else {
			document.addEventListener('localeDetectionReady', function() {
                if (ld.region == 'ca') addPrivacyLink();
            });
        }
    };

    var addPrivacyLink = function() {
        var anchor = $('<a/>', { 'href':'https://support.activision.com/privacyrequest?st=ca', 'text': 'Do Not Sell My Personal Information', 'target': '_blank' }),
            item = $('<li/>');
        item.append(anchor);
        $('.footer-container .footer-right .footer-links > ul').append(item);
    };

    $(init);

})(jQuery, ATVI);