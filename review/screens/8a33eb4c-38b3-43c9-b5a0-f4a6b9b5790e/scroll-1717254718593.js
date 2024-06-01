(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-8a33eb4c-38b3-43c9-b5a0-f4a6b9b5790e .ui-page").overscroll({ showThumbs:false, direction:'none', roundCorners:false, backgroundColor:'', opacity:'', thickness:'', scrollSpacing:''});
            jQuery(".t-f39803f7-df02-4169-93eb-7547fb8c961a .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);