$.get('https://jsonplaceholder.typicode.com/users/1', function(data) {
    console.log(data);
});

let data = $.getfjkdlsfjkdls



$.get('https://jsonplaceholder.typicode.com/users/1')
    .done(function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);            
    })


    // kiedy uzywac ktorej opcji
    // .pipe i .promise - ?



// przy $.get -> czy można użyć pobranych danych w innej funkcji, np.
// $.get('https://jsonplaceholder.typicode.com/users/1', function(data) {
// });
// i później np. button ktory wyswietli część danych

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json()) ---> struktura 
// .then((data) => {...}

.then(response => response.json())