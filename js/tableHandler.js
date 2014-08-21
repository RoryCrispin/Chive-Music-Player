function clickedRow(event) {
    var idsInOrder = $("#songTableView tbody").sortable("toArray");
    console.log(idsInOrder);
    console.log(event.target.id);
}

$(function() {
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
    });




    ytGetPlaylist("PLLF9xRBewdFae_xTw1q9AUW-Vma6B5PWU");
    refreshRipple();
});

function makePlaylistClickable() {

    $('#playgroup').find('a').dblclick(function() {
        var row = $(this).attr("id");
        //alert('You clicked ' + row);
        ytLoadVideo(row);
    });

//tappable
    $('#playgroup').find('a').on("tap",function(){
        var row = $(this).attr("id");
        //alert('You clicked ' + row);
        ytLoadVideo(row);
    });

}

function renamedPlaylist(newName) {
    console.log(newName);
}


// $('.context').contextmenu({
//   target:'#context-menu', 
//   before: function(e,context) {
//     // execute code before context menu if shown
//   },
//   onItem: function(context,e) {
//     // execute on menu item selection
//   }
// })

function refreshTableGlyphs(){
    makePlaylistClickable();
    refreshRipple();
    refreshContextMenu();
    $("#playgroup a").sortable().disableSelection();

}
