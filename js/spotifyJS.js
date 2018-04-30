$(document).ready(function() {
	jQuery('.upvote').each(function(index, element){
		jQuery(element).on('click', function(){

			if(!jQuery(element).hasClass('active-vote')){ 
				jQuery(element).addClass('active-vote');

				if(!jQuery(element).siblings('.downvote').hasClass('active-vote')){
					var songVote = jQuery(element).siblings('.voteCount');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote + 1);
				} else {
					jQuery(element).siblings('.downvote').removeClass('active-vote');
					var songVote = jQuery(element).siblings('.voteCount');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote + 2);
				}

			}else {
				jQuery(element).removeClass('active-vote');
				var songVote = jQuery(element).siblings('.voteCount');
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
					var songVote = jQuery(element).siblings('.voteCount');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote - 1);
				} else {
					jQuery(element).siblings('.upvote').removeClass('active-vote');
					var songVote = jQuery(element).siblings('.voteCount');
					var vote = parseInt(jQuery(songVote).html());
					jQuery(songVote).text(vote - 2);
				}

			} else {
				jQuery(element).removeClass('active-vote');

				var songVote = jQuery(element).siblings('.voteCount');
				var vote = parseInt(jQuery(songVote).html());
				jQuery(songVote).text(vote + 1);
			}
		})
	})

	function sortTable() {
		var table, rows, switching, i, x, y, shouldSwitch;
		table = document.getElementById("vote-table");
		switching = true;
		  while (switching) {
		    switching = false;
		    rows = table.getElementsByTagName("TR");
		    for (i = 1; i < (rows.length - 1); i++) {
		      shouldSwitch = false;
		      x = rows[i].getElementsByTagName("TD")[3];
		      y = rows[i + 1].getElementsByTagName("TD")[3];
		      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
		        shouldSwitch= true;
		        break;
		    }
		}
		if (shouldSwitch) {
		      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		      switching = true;
		  }
		}
	}
});