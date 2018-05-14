$(document).ready(function() {

	jQuery('.upvote').each(function(index, element){
		jQuery(element).on('click', function(){
			console.log(element);

			if(!jQuery(element).hasClass('active-vote')){ 
				jQuery(element).addClass('active-vote');

				if(!jQuery(element).siblings('.downvote').hasClass('active-vote')){
					var songVote = jQuery(element).siblings('.voteContent');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote + 1);
				} else {
					jQuery(element).siblings('.downvote').removeClass('active-vote');
					var songVote = jQuery(element).siblings('.voteContent');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote + 2);
				}

			}else {
				jQuery(element).removeClass('active-vote');
				var songVote = jQuery(element).siblings('.voteContent');
				var vote = parseInt(jQuery(songVote).html());
				jQuery(songVote).text(vote - 1);
			}
		})
	})

	jQuery('.downvote').each(function(index, element){
		jQuery(element).on('click', function(){		

			if(!jQuery(element).hasClass('active-vote')){ 
				jQuery(element).addClass('active-vote');

				if(!jQuery(element).siblings('.upvote').hasClass('active-vote')){    
					var songVote = jQuery(element).siblings('.voteContent');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote - 1);
				} else {
					jQuery(element).siblings('.upvote').removeClass('active-vote');
					var songVote = jQuery(element).siblings('.voteContent');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote - 2);
				}

			} else {
				jQuery(element).removeClass('active-vote');

				var songVote = jQuery(element).siblings('.voteContent');
				var vote = parseInt(jQuery(songVote).html());
				jQuery(songVote).text(vote + 1);
			}
		})
	})

	jQuery('.searchbar').on('keypress', function(){
		jQuery('.searchbar.section').addClass('header-active');
		jQuery('.main-frame').fadeOut();
		jQuery('.results-row').fadeIn();
	});
	
	
	
});