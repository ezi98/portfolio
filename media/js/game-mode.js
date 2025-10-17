(function() {

    let editionSelected = "vault";
    let platformSelected = "xbox";

    let init = function() {

		initCarousel();
        initEditionSelect();
		initPlatformSelect();
        initUpgradeVault();
        /*$(window).on("load", function() {
            equalizeHeights();
            $(window).on("resize", equalizeHeights);
        });*/
    };

    let equalizeHeights = function() {
        let maxHeight = 0;
        let $descriptions = $('.bo7-buy_bundle-text');
        
        // Reset heights to auto to properly calculate natural heights
        $descriptions.css('height', 'auto');
        
        // Find the maximum height
        $descriptions.each(function() {
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        
        // Apply the maximum height to all divs
        $descriptions.css('height', maxHeight + 'px');
    }

    let initCarousel = function() {

        let $carousel = $(".bo7-carousel ul");
        let startX = 0;
        let isMouseDown = false; // Track mouse down state

        // For Touch Devices
        $carousel.on("touchstart mousedown", function(event) {
            let touch = event.type === "mousedown" ? event : event.originalEvent.touches[0];
            startX = touch.clientX;
            isMouseDown = true;
        });
    
        $carousel.on("touchend mouseup", function(event) {
            if (!isMouseDown) return; // Ignore if mouse wasn't down
    
            let touch = event.type === "mouseup" ? event : event.originalEvent.changedTouches[0];
            let endX = touch.clientX;
            let diffX = startX - endX;
            isMouseDown = false; // Reset mouse down state
    
            if (Math.abs(diffX) > 50) { // Adjust sensitivity
                if (diffX > 0) {
                    console.log("Swiped Left");
                    carouselNavClick();
                    //$("button.carousel-next").trigger("click");
                } else {
                    console.log("Swiped Right");
                    carouselNavClick();
                    //$("button.carousel-prev").trigger("click");
                }
            }
        });
    
        // Prevent unintended behavior when dragging on desktop
        $carousel.on("mousemove", function(event) {
            if (!isMouseDown) return;
            event.preventDefault();
        });

        $(".carousel-arrows button").on("click", function() {

            carouselNavClick();    
        });

    };

    let carouselNavClick = function() {

        var selectedEdition;

        if($(".bo7-buy_content-container").attr("data-edition") == "vault") {
            selectedEdition = "standard";
        } else {
            selectedEdition = "vault";
        }
        
        updateEdition(selectedEdition);

    };

    let initEditionSelect = function() {

        $(".bo7-buy_select-edition ul li button").on("click", function() {

            $(".bo7-buy_select-edition button").removeClass("active");

            if(!$(this).hasClass("active")) {
                var selectedEdition = $(this).attr("data-edition").replace("-edition","");
                updateEdition(selectedEdition);
            }

        });

    };

    let updateEdition = function(edition) {

        editionSelected = edition;

        //Update content container. Displays the proper bundle description text
        $(".bo7-buy_content-container").attr("data-edition", editionSelected);

        //Update active state on edition button
        $(".bo7-buy_select-edition button").removeClass("active");
        $(".bo7-buy_select-edition button[data-edition='" + editionSelected + "-edition']").addClass("active");

        //Update active state on box art
        $(".bo7-carousel li").removeClass("active");
        $(".bo7-carousel li[data-edition='" + editionSelected + "']").addClass("active");

        //Update cta color
        $(".bo7-buy_cta").removeClass("vault standard");
        $(".bo7-buy_cta").addClass(editionSelected);
        $(".bo7-buy_cta").attr("data-edition", editionSelected);

        //Update platform to xbox
		let $setPlatformBtn = $(".bo7-buy_select-platform[data-edition='" + editionSelected + "'] li button[data-platform='" + platformSelected + "']");
        if(platformSelected == 'game-pass') {
            $setPlatformBtn = $(".bo7-buy_select-platform[data-edition='" + editionSelected + "'] li button[data-platform='xbox']");
        }
        setPlatform($setPlatformBtn);

    };

    let initPlatformSelect = function() {

		//On page load, set both editions to  xbox
        $(".bo7-buy_select-platform li button[data-platform='" + platformSelected + "']").addClass("active");

        //Set default to digital deluxe xbox
        var $selectedPlatform = $(".bo7-buy_select-platform[data-edition='" + editionSelected + "'] li button[data-platform='" + platformSelected + "']");
        setPlatform($selectedPlatform);

        //On platform button click
        $(".bo7-buy_select-platform li button").on("click", function() {

            //Remove active class from all platform buttons in selected edition
            $(".bo7-buy_select-platform li button").removeClass("active");

            platformSelected = $(this).attr("data-platform");
            setPlatform($(this));

        });

    };

    let setPlatform = function($el) {

        //Highlight/select platform

        $(".bo7-buy_select-platform li button[data-platform='" + platformSelected +"']").addClass("active");
        var getPlatformLink = $el.attr("data-retail-url");

        //If game pass was selected on Standard edition
        if(platformSelected == 'game-pass') {
            //Set selected platform on digital deluxe to be xbox
			$(".bo7-buy_select-platform[data-edition='vault'] li button[data-platform='xbox']").addClass("active");
        }

        //Set url in cta
        $(".bo7-buy_cta a").attr("href", getPlatformLink);
        $(".bo7-buy_cta").attr("data-platform", platformSelected);

    };

    let initUpgradeVault = function() {

		let $ub = $(".upgrade-vault-btn");

        $ub.on("click", function() {

			let $veBtn = $(".ve-btn-modal");

            $veBtn.trigger("click"); //click hidden modal button

            $(".cod-play-now-card_back-section-2-header").trigger("click"); //click Upgrade accordion header

        });

    };

    
    $(init);
    
})();

(function() {

    var init = function() {

		initAnalytics();

    };

    var initAnalytics = function() {

        //On Select Edition
        $("#bo7-buy .bo7-buy_select-edition li button").on("click", function() {

			if(!dataLayer && !digitalData) return;

            dataLayer.push({

                action: "buy:" + $(this).data("entext"),
                category: "interaction:" + digitalData.page.pageInfo.pageName, 
                event: "interaction",
                label: window.location.href,
                link_text: $(this).data("entext"),
                link_url: "internal link",
                module: "buy"

            });
        });


        //On Platform Edition

        $("#bo7-buy .bo7-buy_select-platform li button").on("click", function() {

			if(!dataLayer && !digitalData) return;

            dataLayer.push({

                action: "buy:" + $(this).data("platform"),
                category: "interaction:" + digitalData.page.pageInfo.pageName, 
                event: "interaction",
                label: window.location.href,
                link_text: $(this).data("platform"),
                link_url: "internal link",
                module: "buy"

            });
        });

        //On Preorder Btn
        $("#bo7-buy .bo7-buy_cta a").on("click", function() {

			if(!dataLayer && !digitalData) return;

            dataLayer.push({

                action: "bo7:" + $(this).closest(".bo7-buy_cta").attr("data-platform"),
                category: "purchase",
                destinationURL: $(this).attr("href"),
                event: "purchase",
                gameName: "bo7",
                itpType: "purchase",
                label: "bo7:" + $(this).closest(".bo7-buy_cta").attr("data-edition") + ":" + $(this).attr("href"),
                module: "buy",
                pageURL: window.location.href,
                platform: $(this).closest(".bo7-buy_cta").attr("data-platform"),
                productBundle: $(this).closest(".bo7-buy_cta").attr("data-edition"),
                purchaseLink: $(this).attr("href"),
                purchaseType: $(this).closest(".bo7-buy_cta").attr("data-edition")

            });

        });

    };

	$(init);

})();

