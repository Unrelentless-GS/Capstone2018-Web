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

	jQuery('.form-control').on('keypress', function(){
		console.log(jQuery('.form-control').val().length);
		if(jQuery('.form-control').val().length >= 0) {
			jQuery('.form-control').addClass('form-active');
			jQuery('.main-frame').addClass('display-hide');
			jQuery('.results-row').removeClass('display-hide');
		} else {
			jQuery('.form-control').removeClass('form-active');
			jQuery('.main-frame').removeClass('display-hide');
			jQuery('.results-row').addClass('display-hide');
		}
	});
	
	
	
});