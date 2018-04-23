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



$(document).ready(function() {
	jQuery(".party-category").on('click', function(){
    	// jQuery(".vote-selector").css('display', 'initial');
    	// jQuery(".playlist-content:not(.vote-selector)").css('display', 'none');


    	jQuery(".playlist-content:not(.vote-selector)").fadeOut(function(){
    		jQuery(".vote-selector").fadeIn();	
    	});
	});
});

$(document).ready(function() {
	jQuery(".playlist-category").on('click', function(){
    	// jQuery(".playlist-selector").css('display', 'initial');
    	// jQuery(".playlist-content:not(.playlist-selector)").css('display', 'none');

    	jQuery(".playlist-content:not(.playlist-selector)").fadeOut(function(){
    		jQuery(".playlist-selector").fadeIn();	
    	});
	});
});

$(document).ready(function() {
	jQuery(".album-category").on('click', function(){
    	// jQuery(".album-selector").css('display', 'initial');
    	// jQuery(".playlist-content:not(.album-selector)").css('display', 'none');

    	jQuery(".playlist-content:not(.album-selector)").fadeOut(function(){
    		jQuery(".album-selector").fadeIn();	
    	});
	});
});

$(document).ready(function() {
	jQuery(".artist-category").on('click', function(){
    	// jQuery(".artist-selector").css('display', 'initial');
    	// jQuery(".playlist-content:not(.artist-selector)").css('display', 'none');

    	jQuery(".playlist-content:not(.artist-selector)").fadeOut(function(){
    		jQuery(".artist-selector").fadeIn();	
    	});
	});
});

$(document).ready(function() {
	jQuery(".song-category").on('click', function(){
    	// jQuery(".song-selector").css('display', 'initial');
    	// jQuery(".playlist-content:not(.song-selector)").css('display', 'none');

    	jQuery(".playlist-content:not(.song-selector)").fadeOut(function(){
    		jQuery(".song-selector").fadeIn();	
    	});
	});
});



/*$(document).ready(function() {
	jQuery(".party-category").on('click', function(){
    	jQuery(".main-content").attr('src', 'vote.html');
	});
});

$(document).ready(function() {
	jQuery(".playlist-category").on('click', function(){
    	jQuery(".main-content").attr('src', 'playlist.html');
	});
});

$(document).ready(function() {
	jQuery(".album-category").on('click', function(){
    	jQuery(".main-content").attr('src', 'album.html');
	});
});

$(document).ready(function() {
	jQuery(".artist-category").on('click', function(){
    	jQuery(".main-content").attr('src', 'artist.html');
	});
});

$(document).ready(function() {
	jQuery(".song-category").on('click', function(){
    	jQuery(".main-content").attr('src', 'songs.html');
	});
});*/


