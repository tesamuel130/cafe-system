// var listProductHTML = document.querySelector('.menu-card');

// let listProducts = []

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // Simulate fetching data asynchronously
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000);
//     });
// }

// function initApp() {
//     fetchData()
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// // Call initApp to start the application
// initApp();

// let http = new XMLHttpRequest()

// http.open('get', 'menulist.json', true)

// http.send();

// http.onload = function(){
//     if(this.readyState == 4 && this.readyState == 200){
//         let lists = JSON.parse(this.responseText);

//         let output = '';

//         for(let item of lists){
//             output += `
//                 <div class="menu-card">
//                     <img src="${item.image}" alt="today's special food">
//                     <h3>${item.name}</h3>
//                     <a href="foodlist.html"><button>See More</button></a>
//                 </div>
//             `
//         }

//         document.querySelector('.menu-card-list').innerHTML = output;
//     }
// }




// data featching for the menu list and the foodlist files
let httpM = new XMLHttpRequest();

httpM.open('GET', 'menulist.json', true);

httpM.send();

httpM.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let lists = JSON.parse(this.responseText);

        let output = '';

        for (let item of lists) {
            output += `
                <div class="menu-card">
                    <img src="${item.image}" alt="${item.alt}">
                    <h3>${item.name}</h3>
                    <a href="foodlist.html"><button>See More</button></a>
                </div>
            `;
        }

        // output the code on the menucat.html folder
        document.querySelector('.menu-card-list').innerHTML = output;
    }
};





let httpF = new XMLHttpRequest();

httpF.open('GET', 'foodlist.json', true);

httpF.send();

httpF.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let listsF = JSON.parse(this.responseText);
        
        // food catahory varibles
        let tdsList, cakeList, appList, desList, luncList, dinList, fruList, jucList, sdirList, alcoList = '';

        for (let item of listsF) {
            let catagory = `${item.catagorys}`
            let capCatagory = catagory.toUpperCase()

            switch (capCatagory){
                case "TODAYS-SPECIAL":
                    tdsList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "CAKE":
                    cakeList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "APPETIZER":
                    appList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DESSRTS":
                    desList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "LUANCHS":
                    luncList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DINERS":
                    dinList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "FRUITS":
                    fruList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "JUICES":
                    jucList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "SOFTDRINKS":
                    sdirList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "ALCOHOLIC-DRINKS":
                    alcoList += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                default:
                    break;
            }
        }

        // output the foodlist on the foodlist.html folder

        document.querySelector('.tdsList').innerHTML = tdsList;
        document.querySelector('.cakeList').innerHTML = cakeList;
        document.querySelector('.appetizerList').innerHTML = appList;
        document.querySelector('.dessertList').innerHTML = desList;
        document.querySelector('.luanchList').innerHTML = luncList;
        document.querySelector('.dinerList').innerHTML = dinList;
        document.querySelector('.fruitsList').innerHTML = fruList;
        document.querySelector('.juicesList').innerHTML = jucList;
        document.querySelector('.softdrinkList').innerHTML = sdirList;
        document.querySelector('.alcoholdrinkList').innerHTML = alcoList;
    }
};
