function diplayCountry() {

    var request = new XMLHttpRequest()
    request.open("get", "https://restcountries.eu/rest/v2/all")

    request.send()
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) & (request.status < 300)) {
                var data = JSON.parse(request.responseText);
                console.log(data);
                html_3 = ""
                for (ob of data) {
                    //console.log(ob.name);

                    html_3 += `<option value=${ob.name}>${ob.name}</option>`

                }
                document.querySelector("#details").innerHTML = html_3
            }

        }
    }
}
function viewCountry() {
    let name = document.querySelector("#details").value

    var request = new XMLHttpRequest()
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}?fullText=true`)//to get india
    request.send()
    request.onreadystatechange = () => {

        if (request.readyState == 4) {
            if ((request.status >= 200) & (request.status < 300)) {

                var data = JSON.parse(request.responseText)
                console.log(data)
                let cname = data[0].name
                let flag = data[0].flag
                let population = data[0].population
                let currency = data[0].currencies[0].name
                html_data = ""
                html_data = `
                <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="">Country name:-${cname}</h5>
    <h5 class="">population:-${population}</h5>
    <h5 class="">currency:-${currency}</h5>
  </div>
</div>`
                document.querySelector("#result").innerHTML = html_data


            }
        }
    }


}