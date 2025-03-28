// The 'DOMContentLoaded' event is fired when the HTML has been completely loaded and parsed, before loading resources such as images and external styles.

document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: '.s/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './album-escandalo.jpg' }
    ]

    const artistGrid = document.querySelector('.artist-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="Imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })


});

