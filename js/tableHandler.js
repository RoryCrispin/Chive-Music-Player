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
    refreshTableGlyphs();
});

function loadYTVideo_TableClick(id) {
    ytLoadVideo(id);
}
function makePlaylistClickable() {

    $('tbody').find('tr').dblclick(function() {
        console.log("Click");
        var row = $(this).attr("ytID");
        //alert('You clicked ' + row);
        console.log(row);
        loadYTVideo_TableClick(row)
    });

//tappable
    /*
    $('#playgroup').find('a').on("tap",function(){
        var row = $(this).attr("id");
        //alert('You clicked ' + row);
        loadYTVideo_TableClick(row);
    }); */




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
    $("tr").hover(function () {
        var td1 = $(this).find(".table_playId");
        prev = td1.text();
        td1.html("<span class='idPlayButton glyphicon glyphicon-play' title='Play' cursor='pointer' ></span>");
    }, function () {
        $(this).find(".table_playId").text("");
    });

    $(".table_playId").click(function() {
        loadYTVideo_TableClick($(this).attr("id"));
    });



}


function refreshTableGlyphs(){
    makePlaylistClickable();
   // refreshRipple();
    refreshContextMenu();
   // $("#playgroup a").sortable().disableSelection();
    loadTableIDPlayButtons();

}

function appendToMainTable(id,title, album, artist){

    //$("#playgroup").append(" <a id='" + id + "' class='list-group-item ripplex playerlist'>" + title + "</a>");
    $("#songListTitle").append("  <tr class='ripplex' ytID='" +id+ "'> <td class='table_playId' id='" + id+"'>  </td><td>"+ title +"<div id='table-righxt' style='float:right;'>   <span class='explicit glyphicon glyphicon-flag' title='Explicit'></span> </div></td><td>"+ artist+"</td> <td> " + album +"</td> </tr> ");
  refreshTableGlyphs();
}
