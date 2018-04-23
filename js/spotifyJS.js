$(document).ready(function() {
    jQuery('.upvote').each(function(index, element){
        jQuery(element).on('click', function(){
            if(jQuery(element).css('color') == 'rgb(255, 255, 255)'){ 
                jQuery(element).css('color', '#1db954');
                jQuery(element).siblings('.downvote').css('color', '#fff');
                jQuery(element).siblings('.voteCount').stepUp(1);
            }else {
                jQuery(element).css('color', '#fff');
            }
        })
    })
});

$(document).ready(function() {
    jQuery('.downvote').each(function(index, element){
        jQuery(element).on('click', function(){
            if(jQuery(element).css('color') == 'rgb(255, 255, 255)'){ 
                jQuery(element).css('color', '#f44b42');
                jQuery(element).siblings('.upvote').css('color', '#fff');
            } else {
                jQuery(element).css('color', '#fff');
            }
        })
    })
});

$(document).ready(function() {
    var voteNumber = 5;
    jQuery('.voteCount').each(function(index, element){
    	jQuery(element).html(voteNumber);
    })
});
