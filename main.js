const data = [
    {
        title: "Serra do Divisor",
        description: "Uma das maiores unidades de conservação do Brasil, o parque abriga uma rica biodiversidade, com diversas espécies de animais e plantas.",
        image: "https://amazoniareal.com.br/wp-content/uploads/2022/05/Serra-do-Divisor-possui-ecossistemas-raros-%C2%A9-Foto-Acre-ao-VivoDivulgac%CC%A7a%CC%80o.jpeg" // Substitua pelo URL da imagem
    },
    {
        title: "Rio Croa",
        description: "O Croa é um rio atípico se comparado aos rios locais, pois mais se parece um lago e isso se deu por conta de um fenômeno ocorrido na década de 1990, quando as águas do Juruá, mudaram seu curso por conta de um desbarrancamento que deixou de represar água para o Croa no período de cheia.",
        image: "https://agencia.ac.gov.br/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-02-at-22.12.57-1024x576.jpeg" // Substitua pelo URL da imagem
    },
    {
        title: "Palácio Rio Branco",
        description: "Um imponente edifício de estilo neoclássico, o Palácio Rio Branco abriga o governo estadual e é um dos principais pontos turísticos da capital.",
        image: "https://agencia.ac.gov.br/wp-content/uploads/2020/06/Palacio-Rio-Branco-1200x779.png" // Substitua pelo URL da imagem
    },
    {
        title: "Novo Mercado Velho",
        description: "Um dos cartões postais de Rio Branco, o mercado é um verdadeiro caldeirão cultural, onde você encontrará artesanato local, produtos da floresta e uma variedade de comidas típicas.",
        image: "https://jorgeviana.com.br/wp-content/uploads/2022/03/Novo-Mercado-Velho-scaled.jpg" // Substitua pelo URL da imagem
    },
    {
        title: "Cidade de Xapuri",
        description: "Cidade natal de Chico Mendes, Xapuri é um importante centro histórico e cultural do Acre. Visite a Casa de Chico Mendes, transformada em museu, e o Memorial Chico Mendes.",
        image: "http://portal.iphan.gov.br/uploads/ckfinder/images/Diversas/AC_Xapuri/02_casa_de_chico_mendes_em_xapuri_ac_foto_acervo_iphan_jose_aguilera.jpg" // Substitua pelo URL da imagem
    },
    {
        title: "Cidade de Cruzeiro do Sul",
        description: "Conhecida como a Capital do Juruá, Cruzeiro do Sul oferece diversas opções de turismo de aventura, como trilhas, catedral de Nossa Senhora da Glória, cachoeiras e passeios de barco pelo rio Juruá.",
        image: "https://juruaonline.com.br/wp-content/uploads/2024/02/Novo-Projeto-34-768x427.jpg" // Substitua pelo URL da imagem
    }
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (filteredData) => {
    cardContainer.innerHTML = ""; // Limpa o conteúdo atual
    if (filteredData.length === 0) {
        cardContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
        filteredData.forEach(e => {
            cardContainer.innerHTML += `
            <div class="card">
                <img src="${e.image}" alt="${e.title}" class="card-image">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
            </div>
            `;
        });
    }
};

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    if (searchValue) {
        cardContainer.classList.remove("hidden");
        const filteredData = data.filter(item => item.title.toLowerCase().includes(searchValue));
        displayData(filteredData);
    } else {
        cardContainer.classList.add("hidden");
    }
});

// Inicialmente oculta o contêiner de cartões
cardContainer.classList.add("hidden");
