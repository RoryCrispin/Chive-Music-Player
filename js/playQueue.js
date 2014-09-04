function getAllSongsInTable(){
    var data = Array();

    $("table tr").each(function(i, v){
        data[i] = Array();
        data[i][5] = $(this).attr("ytid");
        data[i][6] = $(this).find("img").attr("src");
        $(this).children('td').each(function(ii, vv){
            data[i][ii] = $(this).text();

        });
    })

    console.log(data);
    return data;
}
function findSongWithYtID(ytID){
    console.log(getAllSongsInTable().indexOf(ytID));
}