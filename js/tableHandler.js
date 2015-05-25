function clickedRow(event) {
    var idsInOrder = $("#songTableView tbody").sortable("toArray");
    console.log(idsInOrder);
    console.log(event.target.id);
}

$(function() {

    enableEditables();
    ytGetPlaylist("PLLF9xRBewdFae_xTw1q9AUW-Vma6B5PWU");
    //ytGetPlaylist(demoPlaylist());
    refreshTableGlyphs();
});

function enableEditables(){
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
}

function loadYTVideo_TableClick(id) {
    ytLoadVideo(id);
}
function loadYTVideo_ContextClick(id) {
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
        td1.html("<span class='idPlayButton glyphicon glyphicon-play' title='Play'></span>");
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

function appendToMainTable(id, col1, col2, col3, cover0, explicit){

    //$("#playgroup").append(" <a id='" + id + "' class='list-group-item ripplex playerlist'>" + title + "</a>");
    $("#songListTitle").append("  <tr class='ripplex' ytID='" +id+ "'> <td class='table_playId alignTable' id='" + id+"'></td> <td> " + tableCover(cover0)+"</td> <td class='alignTable'>"+ col1 +"<div id='table-righxt'  style='float:right;'>   " + explicit +" </div></td><td class='alignTable'>"+ col2+"</td> <td class='alignTable'> " + col3 +"</td> </tr> ");
  refreshTableGlyphs();
}
function tableCover(url){
    if(url != ""){
        return "<img src='"+url+"'>";

    } else {
        return "";
    }
}
