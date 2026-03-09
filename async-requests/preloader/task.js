const items = document.querySelector("#items");
const loaderImg = document.querySelector("#loader");

/*
          <div class="item">
            <!--<div class="item__code">
                    USD
                </div>
                <div class="item__value">
                    32
                </div>
                <div class="item__currency">
                    руб.
                </div>-->
          </div>

*/

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses",
);
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", function (event) {
  if (this.readyState == xhr.DONE && xhr.status === 200) {
    loaderImg.classList.remove("loader_active");

    let data = this.response;
    const currencies = data.response.Valute;
    for (let key in currencies) {
      items.insertAdjacentHTML("beforeend",`
                <div class="item">
                    <div class="item__code">
                        ${currencies[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${currencies[key].Value}
                    </div>
                    <div class="item__currency">
                        ${currencies[key].Name}
                    </div>
                </div>
            `);
    }
  }
});
