(function($){
    const pokeapiWidgetHandle = function($scope,$){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data=>{
            const ul = document.querySelector(".pokeapi-container #pokelist");
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                .then(response => response.json())
                .then(singleData => {
                const li = document.createElement("li");
                const card = document.createElement("div");
                const name = document.createElement("h2");
                const image = document.createElement("img");
                ul.appendChild(li);
                li.appendChild(card);
                card.appendChild(name);
                card.appendChild(image);
                name.textContent=pokemon.name;
                image.setAttribute("src", singleData.sprites.front_default)
                });
            });
        })
    };

    $(window).on("elementor/frontend/init", function($scope) {
        elementorFrontend.hooks.addAction("frontend/element_ready/pokeapi-widget.default",
        pokeapiWidgetHandle);
    });
})(jQuery);