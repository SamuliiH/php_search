var vastArr;

function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {


                var vastaus = this.responseText;
                vastArr = vastaus.split(/\s/g);


                document.getElementById("txtHint").innerHTML = `
                ${vastArr.map((item, index) => `
                  <option onclick="alert()" value=${item}>${item}</option>
                  `.trim()).join('')}`;



            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}
