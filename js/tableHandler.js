function clickedRow(event) {
	var idsInOrder = $("#songTableView tbody").sortable("toArray");
	console.log(idsInOrder);
	console.log(event.target.id);
}

function fillTable(){
	$("#songListTitle").append("<tr><td>linch Infxxxxxxxxxxx) (Trolley Sn</td><td>3:00</td><td>214,641</td></tr>");

}
$(function() {




	//$('#playlistTitle').editable();
				tinymce.init({
    selector: "h1.editable",
    inline: true,
    toolbar: false,
    menubar: false,

      setup: function(editor) {
        editor.on('change', function(e) {
            renamedPlaylist(e.target.targetElm.firstChild.textContent);
        });
    }

    	

	//document.getElementById("testProgressSlider").value = 3;




});


$("#playlistTable tbody").sortable().disableSelection();

	ytGetPlaylist("PLLF9xRBewdFae_xTw1q9AUW-Vma6B5PWU");

});

function makePlaylistClickable(){

	$('#playlistTable').find('tr').dblclick(function() {
		var row = $(this).attr("id");
		//alert('You clicked ' + row);
		ytLoadVideo(row);
	});
}

function renamedPlaylist(newName){
	console.log(newName);
}

function focus(){
	while (1) {
		 window.setInterval(function(){
                            
                    console.log(player.getCurrentTime());
                        },1000);
	}
}