
$(document).ready(function () {
    $('iframe').each(function () {/*fix youtube z-index*/
        var url = $(this).attr("src");
        if (url.indexOf("youtube.com") >= 0) {
            if (url.indexOf("?") >= 0) {
                $(this).attr("src", url + "&wmode=transparent");
            } else {
                $(this).attr("src", url + "?wmode=transparent");
            }
        }
    });

    $('.ddmenu li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
    });
	
	
    // index page expand and close close link
	$(".showMore").css({"cursor":"pointer"});
	$(".showMore").click(function() {
	  $(this).prev().prev().toggleClass("hidden");
	  if ($(this).is(":contains('mehr')")) { $(this).html("&laquo; weniger")}
	  else{$(this).html ("mehr &raquo;")};
	});

    // externe links werden in einen neuem Fenster geöffnet
    // function makes sure that external links open in new window
    function handleExternalLinks() { 
        var hostName = window.location.hostname;
        var links = document.getElementsByTagName("a");
        for(var i = 0; i < links.length; i++) {
            if(links[i].href.indexOf(hostName) == -1) {
                var curTitle = (links[i].getAttribute("title")) ? links[i].getAttribute("title") + " - ": "";
                links[i].setAttribute("target", "_blank");
                links[i].setAttribute("title",  curTitle + "Link wird in einem Neuen Fenster geöffnet");
            }
        }
    }




    // SIDEBAR RANDOM INFORMATION
    var quotes = {
        1 : {
            img : 'khalifa2.jpg',
            author : 'Hazrat Khalifa-tul-Massih II',
            title : 'Ziele von Waqar-e-Amal',
            content : 'Es ist sehr wichtig, dass man sich angewöhnt, stets zu arbeiten und es ist sehr wichtig, dass dieses Bewusstsein in der Jamaat erweckt wird, damit die Schwachen fleißig werden und damit es keinen mehr gibt, der Arbeit als niederträchtig betrachtet.'
        }
    };

    function pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1/++count)
               result = prop;
        return result;
    }

    function createSidebarContent() {
        var generatedHtml = '';
        var quote = quotes[pickRandomProperty(quotes)];
        var img = quote['img'];
        var author = quote['author'];
        var title = quote['title'];
        var content = quote['content'];
        var link = quote['link'];
        

        if (typeof img != "undefined") {
            generatedHtml += "<img src='img/quotes/" + img + "' class='img-rounded' />";
            generatedHtml += "<br />";
        }
        if (typeof title != "undefined") {
            generatedHtml += "<h4>" + title + "</h4>";
        }
        if (typeof content != "undefined") {
            generatedHtml += "<p>" + content;
            if (typeof author != "undefined") {
                generatedHtml += "<br/><small>" + author + "</small></p>";
            } else {
                generatedHtml += "</p>";
            }
        }

        if (typeof link != "undefined") {
            generatedHtml += "<a href='" + link + "'>mehr &raquo;</a>";
        }


        $('.sidebox').html(generatedHtml);
    }
    

    // Call the function
    createSidebarContent();
    handleExternalLinks();


});
