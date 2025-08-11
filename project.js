document.addEventListener('DOMContentLoaded', () => {

    const shoes = [
        {
            name: "Nike Air Max 270",
            price: "$150",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e817e71f-0e1d-4001-92b1-50e50e1b2f7a/air-max-270-shoes-K2gM1q.png",
            link: "https://www.nike.com/t/air-max-270-shoes-K2gM1q"
        },
        {
            name: "Nike Air Force 1 '07",
            price: "$115",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a78ce6c8-f463-4475-b829-16625890e03e/air-force-1-07-shoes-C03wJ4.png",
            link: "https://www.nike.com/t/air-force-1-07-shoes-C03wJ4"
        },
        {
            name: "Nike Dunk Low Retro",
            price: "$115",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a417578-831e-450f-a36c-2f966113b57e/dunk-low-retro-shoes-tXJ4pW.png",
            link: "https://www.nike.com/t/dunk-low-retro-shoes-tXJ4pW"
        },
        {
            name: "Nike Pegasus 40",
            price: "$130",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/609a39f6-06de-4e44-b2b5-555191599573/pegasus-40-road-running-shoes-28rG5x.png",
            link: "https://www.nike.com/t/pegasus-40-road-running-shoes-28rG5x"
        }
    ];

    const shoeGrid = document.getElementById('shoeGrid');

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.className = 'shoe-card';

        shoeCard.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}">
            <h3>${shoe.name}</h3>
            <p class="price">${shoe.price}</p>
            <a href="${shoe.link}" class="buy-link" target="_blank">Shop Now</a>
        `;

        shoeGrid.appendChild(shoeCard);
    });

});