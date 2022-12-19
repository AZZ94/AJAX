let btnGetData = document.getElementById("get-data");

const getData = () => {
    
    fetch("https://akademia108.pl/api/ajax/get-post.php")
        .then(res => res.json())
        .then(data => {

            let pID = document.createElement("p");
            let pUserID = document.createElement("p");
            let pTitle = document.createElement("p");
            let pBody = document.createElement("p");

            let line = document.createElement("hr")

            pID.innerText = `POST ID: ${data.id}`;
            pUserID.innerText = `USER ID: ${data.userId}`;
            pTitle.innerText = `TITLE: ${data.title}`;
            pBody.innerText = `BODY: ${data.body}`;

            // console.log(data);

            document.body.appendChild(pID);
            document.body.appendChild(pUserID);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(line);

        })
}


btnGetData.addEventListener("click", getData);