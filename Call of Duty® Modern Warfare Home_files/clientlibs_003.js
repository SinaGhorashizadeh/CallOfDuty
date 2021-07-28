var COD = COD || {};

(function($) {

    var init = function() {

		toggleMenu();

        var url = window.location.href;
        if(url.indexOf("my.callofduty.com") > 0) {
            myCod();
        }

    };

    var toggleMenu = function() {

        var $flagBtn = $(".atvi-locale-selector .cur-locale-selector-btn button");

        $flagBtn.click(function() {

			$(".atvi-locale-selector .locale-panel").toggle();

            if($(".atvi-locale-selector .locale-panel").is(":visible")) {
				$(this).attr("aria-expanded", "true");
            }

            else {
        		$(this).attr("aria-expanded", "false");
            }

        });

        var $closeBtn = $(".atvi-locale-selector .close-btn button");

        $closeBtn.click(function() {

			$(".atvi-locale-selector .locale-panel").hide();
            $(this).attr("aria-expanded", "false");

        });

    };

    var getNewLangUrl = function(code) {

        var newUrl;
		var curUrl = window.location.href; //https://my.callofduty.com/uk/en/player/store
        var curLocale = ATVI.pageLocale;

        if(curLocale == "es_MX" || curLocale == "en_GB" || curLocale == "en_AU" || curLocale == "en_CA" || curLocale == "fr_CA" || curLocale == "pt_BR") {

            var codeUrl;
            if(code == "es_mx") codeUrl = "/mx/es";
            else if(code == "en_gb") codeUrl = "/uk/en";
            else if(code == "en_au") codeUrl = "/au/en";
            else if(code == "en_ca") codeUrl = "/ca/en";
            else if(code == "fr_ca") codeUrl = "/ca/fr";
            else if(code == "pt_br") codeUrl = "/br/pt";
            else codeUrl = "/" + code;
            if(code == "en") codeUrl = "";

			var splitUrl = curUrl.split("/").splice(5).join("/"); // player/store
            newUrl = "https://my.callofduty.com" + codeUrl + "/" + splitUrl;

        }

        else {
			var splitUrl = curUrl.split("/").splice(4).join("/");
            var codeUrl;
            if(code == "es_mx") codeUrl = "/mx/es";
            else if(code == "en_gb") codeUrl = "/uk/en";
            else if(code == "en_au") codeUrl = "/au/en";
            else if(code == "en_ca") codeUrl = "/ca/en";
            else if(code == "fr_ca") codeUrl = "/ca/fr";
            else if(code == "pt_br") codeUrl = "/br/pt";
            else codeUrl = "/" + code;
            if(code == "en") codeUrl = "";

            newUrl = "https://my.callofduty.com" + codeUrl + "/" + splitUrl;
        }

        return newUrl;

    };

    var myCod = function() { 


            $(".locale-panel ul li").each(function() {
                var lang = $(this).data("lang"); //en, es, es_mx, fr, fr_ca, en_gb
                var newUrl = getNewLangUrl(lang);
                $(this).find("a").attr("href", newUrl);
    
            });


    };

    $(init);

    COD.updateLocales = myCod;

})(jQuery);
