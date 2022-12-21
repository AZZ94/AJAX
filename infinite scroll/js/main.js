console.log("WARSZTAT - INFINITE SCROLL");

let endScroll = 0;

let preloading = false;
// zapobieganie pobieraniu danych kilka razy przy jednym scrollu / flaga

const showPreloader = () => {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "block";
}

const hidePreloader  = () => {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}

const getData = () => {
    
    if (!preloading) {

    preloading = true;
    fetch("https://akademia108.pl/api/ajax/get-users.php")
        .then(res => res.json())
        .then(data => {

            let body = document.body;

            let hr = document.createElement("hr");
            body.appendChild(hr);

            // dane w tablicy -> tworzymy pętlę

            for (let user of data) {
                let pID = document.createElement("p");
                let pName = document.createElement("p");
                let web = document.createElement("p");
                

                pID.innerText = `USER ID: ${user.id}`; 
                pName.innerText = `USER NAME: ${user.name}`;
                web.innerHTML = `USER URL: ${user.website}<br />--------`;
                // iterujemy po userze nie data


                body.appendChild(pID);
                body.appendChild(pName);
                body.appendChild(web);
            }

            preloading = false;

            hidePreloader();

            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

const scrollToEndOfPage = () => {
    // console.log("funkcja działa");

    // d od document
    let d = document.documentElement;

    let scrollH = d.scrollHeight;
    // cala wysokosc strony mozliwa do przescrollowania

    let scrollT = d.scrollTop;
    // juz przescrollowane od gory w px

    let clientH = d.clientHeight;
    // wys okna przegladarki 
    // scroll top + client height = jezeli = scroll height to jestesmy na koncu strony

    let sumScroll = Math.ceil(scrollT + clientH);
    // math.ceil - zaokrąglanie ułamków w górę

    if (sumScroll >= scrollH) {

        endScroll += 1;

        console.log(`reached the end of the site: ${endScroll} times `);
    }


    console.log(`SH: ${scrollH}`);
    console.log(`ST: ${scrollT}`);
    console.log(`CH: ${clientH}`);
    console.log("=============");
    console.log(sumScroll);

    showPreloader();

    getData();
}


window.addEventListener("scroll", scrollToEndOfPage);

