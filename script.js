function showProducts(category) {
    const products = document.getElementById("products");

    if (category === "new") {
        products.innerHTML = `
            <h2>New Arrivals</h2>

            <article>
                <img src="newGuitars/new 1.1.webp"
                     alt="Front of red electric guitar"
                     width="200"
                     onclick="showMorePhotos()"
                     style="cursor: pointer;">

                <div id="morePhotos" hidden>
                    <img src="newGuitars/new 1.2.webp"
                         alt="Back of electric guitar"
                         width="200">

                    <img src="newGuitars/new 1.3.webp"
                         alt="Full view of electric guitar"
                         width="200">
                </div>

                <p>New guitar — $200</p>
            </article>
        `;
    } else if (category === "used") {
        products.innerHTML = `<h2>New Arrivals</h2>

            <article>
                <img src="usedGuitars/used 1.1.jpg"
                     alt="Front of red electric guitar"
                     width="200"
                     onclick="showMorePhotos()"
                     style="cursor: pointer;">

                <div id="morePhotos" hidden>
                    <img src="usedGuitars/used 1.2.jpg"
                         alt="Back of electric guitar"
                         width="200">
                   
                </div>

                <p>Used guitar = $200</p>
            </article>
        `;
    } else if (category === "deals") {
        products.innerHTML = `<h2>New Arrivals</h2>

            <article>
                <img src="e_guitarDeals/deals 1.1.jpg"
                     alt="Front of red electric guitar"
                     width="200"
                     onclick="showMorePhotos()"
                     style="cursor: pointer;">

                <div id="morePhotos" hidden>
                    <img src="e_guitarDeals/deals 1.2.jpg"
                         alt="Back of electric guitar"
                         width="200">

                    <img src="e_guitarDeals/deals 1.3.jpg"
                         alt="Full view of electric guitar"
                         width="200">
                </div>

                <p>Used guitar = $200</p>
            </article>
        `;
    }
}

function showMorePhotos() {
    const photos = document.getElementById("morePhotos");
    photos.hidden = !photos.hidden;
}

showProducts("new");