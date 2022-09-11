(async function () {
    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    const treandingProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/trending`);

    async function showTrendingProduct(treandingProduct) {
        for (let i = 0; i < treandingProduct.length; i++) {
            const singleProduct = treandingProduct[i];
            console.log("singleProduct", singleProduct);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleProduct?._id}/${singleProduct?.image}`;

            const s0507_trending_items_single_product = elementMaker("div", ["s0507_trending_items_single_product"]);

            const s0507_product_top_area = elementMaker("div", ["s0507_product_top_area"]);
            s0507_trending_items_single_product.appendChild(s0507_product_top_area);
            const s0507_product_bottom_area = elementMaker("div", ["s0507_product_bottom_area"]);
            s0507_trending_items_single_product.appendChild(s0507_product_bottom_area);

            const s0507_product_img_wrapper = elementMaker("div", ["s0507_product_img_wrapper"]);
            s0507_product_top_area.appendChild(s0507_product_img_wrapper);
            const productImage = elementMaker("img", ["product_img"]);
            s0507_product_img_wrapper.appendChild(productImage);
            setAttributes(productImage, { "src": `${FeatureImage}` });

            const s0507_product_badge_area_wrapper = elementMaker("div", ["s0507_product_badge_area_wrapper"]);
            s0507_product_top_area.appendChild(s0507_product_badge_area_wrapper);
            const s0507_text_badge_wrapper = elementMaker("div", ["s0507_text_badge_wrapper"]);
            s0507_text_badge_wrapper.textContent = `Sale`;
            s0507_product_badge_area_wrapper.appendChild(s0507_text_badge_wrapper);

            const s0507_wishlist_area_wrapper = elementMaker("div", ["s0507_wishlist_area_wrapper"]);
            s0507_product_badge_area_wrapper.appendChild(s0507_wishlist_area_wrapper);
            s0507_wishlist_area_wrapper.style.cursor = "pointer";
            s0507_wishlist_area_wrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="9.375"
           viewBox="0 0 10 9.375">
           <g id="Heart_Icon" data-name="Heart Icon" transform="translate(2 -2.5)">
               <g id="ICon" transform="translate(-1.995 1.583)" fill="none"
                   stroke-linecap="square">
                   <path
                       d="M7.286.917A2.664,2.664,0,0,0,5,2.3,2.664,2.664,0,0,0,2.7.917,2.841,2.841,0,0,0,0,3.869C0,6.705,4.56,9.982,4.754,10.121L5,10.292l.241-.171c.194-.138,4.757-3.415,4.757-6.252A2.841,2.841,0,0,0,7.286.917Z"
                       stroke="none" />
                   <path
                       d="M 2.718051433563232 1.917600631713867 C 1.728583335876465 1.977002143859863 0.9588022232055664 2.82913875579834 0.9964237213134766 3.83128833770752 L 0.9971237182617188 3.86879825592041 C 0.9971237182617188 5.470685482025146 3.273587703704834 7.747171401977539 4.993274211883545 9.054264068603516 C 5.425553321838379 8.721973419189453 6.208822250366211 8.088056564331055 6.972303867340088 7.307478427886963 C 8.275383949279785 5.975208282470703 8.993023872375488 4.753998279571533 8.993023872375488 3.86879825592041 L 8.99372386932373 3.83128833770752 C 9.031345367431641 2.82913875579834 8.261564254760742 1.977002143859863 7.272096633911133 1.917600631713867 C 6.689487934112549 1.937135696411133 6.154672145843506 2.265909194946289 5.871083736419678 2.780988693237305 L 4.995073795318604 4.372078418731689 L 4.119063854217529 2.780988693237305 C 3.835475444793701 2.265909194946289 3.300659656524658 1.937135696411133 2.718051433563232 1.917600631713867 M 2.704343795776367 0.9169988632202148 C 3.658963680267334 0.9319286346435547 4.53274393081665 1.458958625793457 4.995073795318604 2.298687934875488 C 5.457403659820557 1.458958625793457 6.331183910369873 0.9319286346435547 7.28580379486084 0.9169988632202148 C 8.842193603515625 0.9849786758422852 10.0517635345459 2.303828239440918 9.993023872375488 3.86879825592041 C 9.993023872375488 6.705458164215088 5.429893970489502 9.982578277587891 5.235813617706299 10.12074851989746 L 4.995073795318604 10.2919979095459 L 4.75434398651123 10.12074851989746 C 4.560253620147705 9.981748580932617 -0.00287628173828125 6.705458164215088 -0.00287628173828125 3.86879825592041 C -0.06161594390869141 2.303828239440918 1.147953987121582 0.9849786758422852 2.704343795776367 0.9169988632202148 Z"
                       stroke="none" fill="#1e272e" />
               </g>
           </g>
       </svg>`;

            const s0507_product_rating_wrapper = elementMaker("div", ["s0507_product_rating_wrapper"]);
            s0507_product_badge_area_wrapper.appendChild(s0507_product_rating_wrapper);
            const s0507_product_rating = elementMaker("div", ["s0507_product_rating"]);
            s0507_product_rating_wrapper.appendChild(s0507_product_rating);
            const ratingNumber = singleProduct?.reviewRating?.rating;

            function showReviewStar(ratingNumber, s0507_product_rating) {
                let stars = ratingNumber;
                let starsFloor = Math.floor(stars);
                for (let i = 0; i < starsFloor; i++) {
                    let fc001_review_star = elementMaker("li", ["s0507_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#fed300"></path> </svg>
                     `

                    s0507_product_rating.appendChild(fc001_review_star);

                };
                let starDecimal = stars - starsFloor;
                if (starDecimal > 0) {
                    let fc001_review_star = elementMaker("li", ["s0507_product_rating_start"]);
                    fc001_review_star.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11"> <defs> <linearGradient id="linear-gradient" y1="0.384" x2="1" y2="0.381" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#fed300"></stop> <stop offset="0.5" stop-color="#fbd414"></stop> <stop offset="0.503" stop-color="#dedbcc"></stop> <stop offset="1" stop-color="#dcdcdc"></stop> </linearGradient> </defs> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="url(#linear-gradient)"></path> </svg>
                                `;
                    s0507_product_rating.appendChild(fc001_review_star);
                };
                if ((5 - stars) > 0) {
                    for (let i = 0; i < Math.floor((5 - stars)); i++) {
                        let fc001_review_star = elementMaker("li", ["s0507_product_rating_start"]);
                        fc001_review_star.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"> <path id="Star" d="M59.5,72.843,62.9,75,62,70.93l3-2.736-3.955-.357L59.5,64l-1.545,3.837L54,68.194l3,2.736L56.1,75Z" transform="translate(-54 -64)" fill="#dfdfdf"></path> </svg>
                                `;
                        s0507_product_rating.appendChild(fc001_review_star);
                    };
                };


            }
            showReviewStar(ratingNumber, s0507_product_rating);

            // product bottom area
            const s0507_product_name_wrapper = elementMaker("div", ["s0507_product_name_wrapper"]);
            s0507_product_bottom_area.appendChild(s0507_product_name_wrapper);
            const s0507_product_name = elementMaker("div", ["s0507_product_name"]);
            s0507_product_name.textContent = `${singleProduct?.name}`;
            s0507_product_name_wrapper.appendChild(s0507_product_name);

            const s0507_product_price_wrapper = elementMaker("div", ["s0507_product_price_wrapper"]);
            s0507_product_bottom_area.appendChild(s0507_product_price_wrapper);
            const s0507_product_new_price_wrapper = elementMaker("div", ["s0507_product_new_price_wrapper"]);
            s0507_product_price_wrapper.appendChild(s0507_product_new_price_wrapper);
            const s0507_new_price_text = elementMaker("div", ["s0507_new_price_text"]);
            s0507_new_price_text.textContent = `${singleProduct.price}`;
            s0507_product_new_price_wrapper.appendChild(s0507_new_price_text);














            document.querySelector(".s0507_trending_items_home_all_product_wrapper").appendChild(s0507_trending_items_single_product);

        }


    };
    await showTrendingProduct(treandingProduct)



    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };

})();