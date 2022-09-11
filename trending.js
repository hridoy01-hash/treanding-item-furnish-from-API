(async function () {
    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    const treandingProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/trending`);
    // let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${flashSinleProduct?.itemId}/${flashSinleProduct?.image}`;

    async function showTrendingProduct(treandingProduct) {
        console.log("treandingProduct", treandingProduct);


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