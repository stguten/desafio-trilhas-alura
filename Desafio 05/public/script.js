document.addEventListener('DOMContentLoaded', () => {
    const destinosSection = document.getElementById('destinos');
    const atrativosSection = document.getElementById('atrativos');

    fetch('/api/destinos')
        .then(response => response.json())
        .then(destinos => {
            destinos.forEach(destino => {
                const destinoDiv = document.createElement('div');
                destinoDiv.classList.add('destino');

                destinoDiv.innerHTML = `
                    <img src="${destino.imagem}" alt="${destino.nome}">
                    <h3>${destino.nome}</h3>
                    <p>${destino.descricao}</p>
                `;

                destinosSection.appendChild(destinoDiv);
            });

            // Adicionar marcadores no mapa
            const map = L.map('map').setView([-2.52972, -44.30278], 7); // Coordenadas de São Luís

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            destinos.forEach(destino => {
                const marker = L.marker([destino.coordenadas[0], destino.coordenadas[1]]).addTo(map);
                marker.bindPopup(`<b>${destino.nome}</b><br>${destino.descricao}`);
            });
        });

    fetch('/api/atrativos')
        .then(response => response.json())
        .then(atrativos => {
            atrativos.forEach(atrativo => {
                const atrativoDiv = document.createElement('div');
                atrativoDiv.classList.add('atrativo');

                atrativoDiv.innerHTML = `
                    <h3>${atrativo.nome}</h3>
                    <p>Tipo: ${atrativo.tipo}</p>
                    <p>${atrativo.descricao}</p>
                    <p>Dicas: ${atrativo.dicas}</p>
                `;

                atrativosSection.appendChild(atrativoDiv);
            });
        });

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const destinos = document.querySelectorAll('.destino');
        const atrativos = document.querySelectorAll('.atrativo');

        destinos.forEach(destino => {
            const nome = destino.querySelector('h3').textContent.toLowerCase();
            if (nome.includes(query)) {
                destino.style.display = 'block';
            } else {
                destino.style.display = 'none';
            }
        });

        atrativos.forEach(atrativo => {
            const nome = atrativo.querySelector('h3').textContent.toLowerCase();
            if (nome.includes(query)) {
                atrativo.style.display = 'block';
            } else {
                atrativo.style.display = 'none';
            }
        });
    });
});
