const api_url = "https://api.covid19api.com/summary";

function getAPIData(URL) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let country = data.Countries[77].Country;
      let totalcases = data.Countries[77].TotalConfirmed;
      let totaldeaths = data.Countries[77].TotalDeaths;
      let newcases = data.Countries[77].NewConfirmed;
      let newdeaths = data.Countries[77].NewDeaths;
      let today = new Date().toDateString();

      displayData(country, totalcases, totaldeaths, newcases, newdeaths, today);
    })
    .catch((error) => console.log(error.message));
}

function displayData(c, tc, td, nc, nd, t) {
  let pre = document.createElement("pre");
  pre.innerHTML = ` <span id="1">Country Name:</span> ${c}\n\n <span>Date:</span> ${t}\n\n <span>Total Cases:</span> ${tc}\n\n <span>Total Deaths:</span> ${td}\n\n <span>New Cases:</span> ${nc}\n\n <span>New Deaths:</span> ${nd} `;

  document.getElementById("box").appendChild(pre);
}

getAPIData(api_url);
