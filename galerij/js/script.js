const content = [
    {
        image: "/home/img/banner.jpg",
    },
    {
        image: "/home/img/bedroom-1.jpg",
    },
    {
        image: "/home/img/bedroom-2.jpg",
    },
    {
        image: "/home/img/bedroom-3.jpg",
    },
    {
        image: "/home/img/discover-1.jpg",
    },
    {
        image: "/home/img/discover-2.jpg",
    },
    {
        image: "/home/img/discover-3.jpg",
    },
    {
        image: "/home/img/discover-4.jpg",
    },
    // {
    //     image: "/activiteiten/img/Algas - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Amantes - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Bar Billy’s - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/barcos-cosas.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Bites & Bubbles - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/boot.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Ca La Iaia - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Cala del Moraig - Benitachell.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Cap de Sant Antoni - Javea.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Casa Toni - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Club Nautico – Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Dos Toros.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Duiken.jpg",
    // },
    // {
    //     image: "/activiteiten/img/El Chamizo - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Fietsen.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Forat De Bernia.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Gastrobar.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Golfen.jpg",
    // },
    // {
    //     image: "/activiteiten/img/jetski.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Kajakken.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Karting.jpg",
    // },
    // {
    //     image: "/activiteiten/img/La Cabana Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Los Limoneros - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Los Molinos de la Plana de Javea.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Mesa - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Moodz – Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Oud-Altea.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Padellen.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Playa Arenal  - Javea.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Playa de El Portet - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Playa de L’Ampollo - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Playa de la fustera - Benissa.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Saen - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Saga - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Samar - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Saxo - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Stuwmeer - Guedelest.jpg",
    // },
    // {
    //     image: "/activiteiten/img/The Food Bar - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Vespaz - Moraira.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Wandelpad – Benissa_Calpe.jpg",
    // },
    // {
    //     image: "/activiteiten/img/Watervallen - Algar.jpg",
    // },
];

function createGallery(e) {
    const target = document.querySelector('.gallery-wrapper');
    const shuffledArray = content.sort((a, b) => 0.5 - Math.random());
    
    const cards = shuffledArray.map(item => {
        if (!item.image || item.image == undefined) return '';

        return `
            <div class="item">
                <div class="image-wrapper">
                    <img src="${item.image}">
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

$(document).ready(function() {
    createGallery();
});