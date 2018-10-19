$(document).ready(function() {
	blogPosts = 4; // How many blog posts to display

	// @source https://stackoverflow.com/a/6271906
	function parseRSS(url, callback) {
		$.ajax({
			url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
			dataType: 'json',
			success: function(data) {
				if (data.responseData != null) {
					callback(data.responseData.feed);
				} else {
					$("#blog-posts").html("Cannot retrieve latest posts. <a href='https://blog.piston.rs'>Go to blog directly &raquo;</a>");
					$('.piston-blog-posts .piston-more').remove();
				}
			}
		});
	}

	// Get blog posts feed and display in website
	parseRSS("https://blog.piston.rs/atom.xml", function(data) {
		count = 0;
		$("#blog-posts").html("");
		data.entries.forEach(function(post) {
			date = new Date(post.publishedDate);
			if (count < blogPosts) {
				$("#blog-posts").append("<a href='" + post.link + "'><li><h4>" + post.title + "</h4><span class='date'>" + date.strftime("%B %d, %Y") + "</span><i class='fa fa-angle-right'></i></li></a>")
				count++;
			}
		});
	});

	// Enable syntax highlighting
	hljs.initHighlightingOnLoad();
});
