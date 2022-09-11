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