$(document).ready(function() {
    jQuery('.upvote').each(function(index, element){
        jQuery(element).on('click', function(){
            if(jQuery(element).css('color') == 'rgb(0, 0, 0)'){ 
                jQuery(element).css('color', '#1db954');
                jQuery(element).siblings('.downvote').css('color', '#000');
                jQuery(element).siblings('.voteCount').stepUp(1);
            }else {
                jQuery(element).css('color', '#000');
            }
        })
    })
});

$(document).ready(function() {
    jQuery('.downvote').each(function(index, element){
        jQuery(element).on('click', function(){
            if(jQuery(element).css('color') == 'rgb(0, 0, 0)'){ 
                jQuery(element).css('color', '#f44b42');
                jQuery(element).siblings('.upvote').css('color', '#000');
            } else {
                jQuery(element).css('color', '#000');
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
