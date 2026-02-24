const search = () => {
    const searchItem = document.querySelector("#search-item").value.toLowerCase();
    const product = document.querySelectorAll(".product");
    const productName = document.querySelectorAll("p");

    for(let i = 0; i < productName.length; i++) {

        let match = product[i].getElementsByTagName("p")[0];

        if (match) {
            let textval = 
            match.textContent.toLowerCase() || match.innerHTML.toLowerCase();

            if (textval.toLowerCase().indexOf(searchItem) === -1) {
                product[i].style.display  = "none";
            }else {
                product[i].style.display  = "block";
            }
        }
    }

};