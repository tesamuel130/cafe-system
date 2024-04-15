// data featching for the menu list 

function MenuList(){
    let httpM = new XMLHttpRequest();

httpM.open('GET', 'menulist.json', true);

httpM.send();

httpM.onload = function() {

    // return
    if (this.readyState == 4 && this.status == 200) {
        try {
            let lists = JSON.parse(this.responseText);

            let menulist = '';

            for (let item of lists) {
                menulist += `
                    <div class="menu-card">
                        <img src="${item.image}" alt="${item.alt}">
                        <h3>${item.name}</h3>
                        <a href="foodlist.html"><button>See More</button></a>
                    </div>
                `;
            }

            // output the code on the menucat.html folder
            document.querySelector('.menu-card-list').innerHTML = menulist;
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    } else {
        console.error('Request failed:', this.status);
    }
};
};

export default MenuList;