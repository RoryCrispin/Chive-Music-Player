
jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).attr("href");
      });
});

function clickedRow(i){
	alert(i);
}

$("#playlistTable tbody").sortable().disableSelection();