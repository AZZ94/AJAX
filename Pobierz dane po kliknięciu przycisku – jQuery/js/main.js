$(document).ready(function() {

    $("#get-data").click(function() {
        $.get("https://akademia108.pl/api/ajax/get-post.php")
        .done(function(data) {

            let pUserID = $("<p></p>").text(`USER ID: ${data.uderId}`);
            let pID = $("<p></p>").text(`POST ID: ${data.id}`);
            let pTitle = $("<p></p>").text(`TITLE: ${data.title}`);
            let pBody = $("<p></p>").text(`BODY: ${data.body}`);

            let line = $("<hr />");

            $("body").append(pUserID);
            $("body").append(pID);
            $("body").append(pTitle);
            $("body").append(pBody);
            $("body").append(line);

            console.log(data);
        })
        .fail(function(error) {
            console.error(error);
        })
    })

    // ver.2 
    // $("#get-data").click(function() {
    //     $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
    //     .done(function(data) {

    //         let pUserID = $("<p></p>").text(`USER ID: ${data.uderId}`);
    //         let pID = $("<p></p>").text(`POST ID: ${data.id}`);
    //         let pTitle = $("<p></p>").text(`TITLE: ${data.title}`);
    //         let pBody = $("<p></p>").text(`BODY: ${data.body}`);

    //         let line = $("<hr />");

    //         $("body").append(pUserID);
    //         $("body").append(pID);
    //         $("body").append(pTitle);
    //         $("body").append(pBody);
    //         $("body").append(line);

    //         console.log(data);
    //     })
    //     .fail(function(error) {
    //         console.error(error);
    //     })
    // })


}) 