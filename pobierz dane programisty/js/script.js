$(document).ready(function () {

    $("body").append('<div id="dane-programisty"></div>');

    function clickButton(e) {
        e.preventDefault

        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
        
        // console.log(JSON.parse(data));


            $("#dane-programisty").append(
                "<br> Imię: " + data.imie, 
                "<br> Nazwisko: " + data.nazwisko, 
                "<br> Zawód: " + data.zawod, 
                "<br> Firma: " + data.firma, 
            )

        });
        
    }
    $("#btn").on("click", clickButton);

})

// $(document).ready(function () {

//     $("body").append('<div id="dane-programisty">data</div>');

//     function clickButton(e) {
//         e.preventDefault

     
//         $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
//             let dane = data;
//             console.log(dane);
        
//             $("#dane-programisty").text(dane);
//         });
        
//     }
//     $("#btn").on("click", clickButton);

// })

