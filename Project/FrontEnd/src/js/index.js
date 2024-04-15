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

        let output = '';
        // let catagory = `${lists.catagorys}`

        for (let item of listsF) {
            let catagory = `${item.catagorys}`
            let capCatagory = catagory.toUpperCase()

            switch (capCatagory){
                case "TODAYS-SPECIAL":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;

                    document.querySelector('.food-card-list').innerHTML = output;
                    break;
                case "APPETIZER":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DESSRTS":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "LUANCHS":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "DINERS":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "FRUITS":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "JUICES":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "SOFTDRINKS":
                    output += `
                        <div class="menu-card">
                            <img src="${item.image}" alt="${item.alt}">
                            <h3>${item.name}</h3>
                            <a href="foodlist.html"><button>See More</button></a>
                        </div>
                    `;
                    break;
                case "aLCOHOLIC-DRINKS":
                    output += `
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



            // output += `
            //     <div class="menu-card">
            //         <img src="${item.image}" alt="${item.alt}">
            //         <h3>${item.name}</h3>
            //         <a href="foodlist.html"><button>See More</button></a>
            //     </div>
            // `;
        }

        // output the code on the menucat.html folder
        // document.querySelector('.food-card-list').innerHTML = output;
    }
};
