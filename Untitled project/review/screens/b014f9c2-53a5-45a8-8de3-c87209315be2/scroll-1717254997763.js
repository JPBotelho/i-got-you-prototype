(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-b014f9c2-53a5-45a8-8de3-c87209315be2 .ui-page").overscroll({ showThumbs:false, direction:'none', roundCorners:false, backgroundColor:'', opacity:'', thickness:'', scrollSpacing:''});
            jQuery(".t-f39803f7-df02-4169-93eb-7547fb8c961a .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);