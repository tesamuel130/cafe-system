function AddCart(){
    document.querySelector('.trycl').addEventListener('click', ()=>{
        document.querySelector('.carts').innerHTML = `
            <div class="cart-card-list">
                <div class="cart-card">
                    <img src="/Project/FrontEnd/src/css/img/appetizer.png" alt="food image">
                    <div class="ord-dit">
                        <h1>appetizer</h1>
                        <p>price: 20$</p>
                    </div>
                </div>
            </div>
        `
    })

}

export default AddCart;