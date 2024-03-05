var getdata = (async () => {
    let a = await fetch("https://fakestoreapi.com/products");
    let change = await a.json();
    let emptystr = "";

    change.map((value) => {
        emptystr +=`
            <div class="card card1" style="width: 18rem;">
                <img src="${value.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${value.title}</h5>
                        <p class="card-text">${value.description}</p>     
                    </div>
            </div>`
    })
    document.getElementById('van').innerHTML=emptystr;
})

