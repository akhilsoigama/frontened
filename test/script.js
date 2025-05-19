let dataRecive = document.getElementById("reciveData");

dataRecive.addEventListener("click", function reqvest() {
    const xhttp = new XMLHttpRequest("https://cat-fact.herokuapp.com/facts");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.write(this.responseText);
        }
    }
    xhttp.open("GET", "https://cat-fact.herokuapp.com/facts", true);
    xhttp.send();
});
