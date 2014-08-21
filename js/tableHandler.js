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



    //ytGetPlaylist("PLLF9xRBewdFae_xTw1q9AUW-Vma6B5PWU");
    refreshRipple();
});

function loadYTVideo_TableClick(id) {
    ytLoadVideo(id);
}
function makePlaylistClickable() {

    $('#playgroup').find('a').dblclick(function() {
        var row = $(this).attr("id");
        //alert('You clicked ' + row);
        loadYTVideo_TableClick(row)
    });

//tappable
    /*
    $('#playgroup').find('a').on("tap",function(){
        var row = $(this).attr("id");
        //alert('You clicked ' + row);
        loadYTVideo_TableClick(row);
    }); */

    $(".table_playId").click(function() {
        loadYTVideo_TableClick($(this).attr("id"));
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

function loadTableIDPlayButtons() {
    $(".table_playId").hover(function () {
        prev = $(this).text();
        $(this).html("<span class='idPlayButton glyphicon glyphicon-play' title='Play'></span>");
    }, function () {
        $(this).text(prev)
    });
}


function refreshTableGlyphs(){
    makePlaylistClickable();
    refreshRipple();
    refreshContextMenu();
   // $("#playgroup a").sortable().disableSelection();
    loadTableIDPlayButtons();

}

function appendToMainTable(id,title, album, artist){

    //$("#playgroup").append(" <a id='" + id + "' class='list-group-item ripplex playerlist'>" + title + "</a>");
    $("#songListTitle").append("  <tr> <td class='table_playId' id=''" + id+"'> 1 </td><td>"+ title +"<div id='table-righxt' style='float:right;'>   <span class='explicit glyphicon glyphicon-flag' title='Explicit'></span> </div></td><td>"+ artist+"</td> <td> " + album +"</td> </tr> ");
}
