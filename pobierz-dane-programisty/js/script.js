$(document).ready(function () {

    $("body").append('<div id="dane-programisty"></div>');

    function clickButton(e) {
        e.preventDefault

        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
        
        // console.log(JSON.parse(data));

        let dataObject = JSON.parse(data);

            $("#dane-programisty").append(
                "<br> Imię: " + data.imie, 
                // JSON.parse(data).imie
                // dataObject.imie
                "<br> Nazwisko: " + data.nazwisko, 
                "<br> Zawód: " + data.zawod, 
                "<br> Firma: " + data.firma, 
            )

        });
        
    }
    $("#btn").on("click", clickButton);

})



