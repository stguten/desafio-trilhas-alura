const sequelize = require('./src/config/database');
const Destino = require('./src/models/Destino');
const Atrativo = require('./src/models/Atrativo');

const destinos = [
    {
        nome: 'São Luís',
        descricao: 'Capital do Maranhão, rica em cultura e história.',
        imagem: 'sao_luis.jpg',
        coordenadas: [-2.52972, -44.30278]
    },
    {
        nome: 'Lençóis Maranhenses',
        descricao: 'Parque Nacional com dunas de areia e lagoas cristalinas.',
        imagem: 'lencois_maranhenses.jpg',
        coordenadas: [-2.48222, -43.12361]
    },
    {
        nome: 'Alcântara',
        descricao: 'Cidade histórica com ruínas coloniais e belas paisagens.',
        imagem: 'alcantara.jpg',
        coordenadas: [-2.40556, -44.41556]
    },
    {
        nome: 'Chapada das Mesas',
        descricao: 'Região com cachoeiras deslumbrantes e formações rochosas únicas.',
        imagem: 'chapada_das_mesas.jpg',
        coordenadas: [-7.07833, -47.47083]
    },
    {
        nome: 'Barreirinhas',
        descricao: 'Porta de entrada para os Lençóis Maranhenses.',
        imagem: 'barreirinhas.jpg',
        coordenadas: [-2.74361, -42.82361]
    },
    {
        nome: 'Carolina',
        descricao: 'Cidade base para explorar a Chapada das Mesas.',
        imagem: 'carolina.jpg',
        coordenadas: [-7.33611, -47.46389]
    },
    {
        nome: 'Riachão',
        descricao: 'Conhecida pelas cachoeiras da Chapada das Mesas.',
        imagem: 'riachao.jpg',
        coordenadas: [-7.35833, -46.62278]
    },
    {
        nome: 'Santo Amaro do Maranhão',
        descricao: 'Outra entrada para os Lençóis Maranhenses, com lagoas menos visitadas.',
        imagem: 'santo_amaro.jpg',
        coordenadas: [-2.50083, -43.23833]
    },
    {
        nome: 'Caxias',
        descricao: 'Cidade histórica com eventos culturais e arquitetura colonial.',
        imagem: 'caxias.jpg',
        coordenadas: [-4.86639, -43.35333]
    },
    {
        nome: 'Imperatriz',
        descricao: 'Segunda maior cidade do estado, com acesso à natureza e economia forte.',
        imagem: 'imperatriz.jpg',
        coordenadas: [-5.52639, -47.49167]
    }
];

const atrativos = [
    {
        nome: 'Palácio dos Leões',
        tipo: 'Monumento',
        descricao: 'Residência oficial do Governador do Maranhão.',
        dicas: 'Visite durante o pôr do sol para uma vista espetacular.',
        destinoId: 1
    },
    {
        nome: 'Centro Histórico de São Luís',
        tipo: 'Monumento',
        descricao: 'Área com casarões coloniais e ruas de pedra.',
        dicas: 'Faça um passeio guiado para aprender mais sobre a história local.',
        destinoId: 1
    },
    {
        nome: 'Lagoa Bonita',
        tipo: 'Lagoa',
        descricao: 'Uma das lagoas mais bonitas dos Lençóis Maranhenses.',
        dicas: 'Visite durante a estação seca para ver as lagoas cheias.',
        destinoId: 2
    },
    {
        nome: 'Ruínas de Alcântara',
        tipo: 'Monumento',
        descricao: 'Ruínas de antigas construções coloniais.',
        dicas: 'Traga uma câmera para capturar a beleza das ruínas.',
        destinoId: 3
    },
    {
        nome: 'Cachoeira do Itapecuru',
        tipo: 'Cachoeira',
        descricao: 'Cachoeira deslumbrante na Chapada das Mesas.',
        dicas: 'Leve roupas de banho para nadar nas piscinas naturais.',
        destinoId: 4
    },
    {
        nome: 'Rio Preguiças',
        tipo: 'Rio',
        descricao: 'Rio que atravessa os Lençóis Maranhenses.',
        dicas: 'Faça um passeio de barco para explorar as margens do rio.',
        destinoId: 5
    },
    {
        nome: 'Cachoeira da Pedra Caída',
        tipo: 'Cachoeira',
        descricao: 'Cachoeira impressionante perto de Carolina.',
        dicas: 'Use calçado adequado para trilhas.',
        destinoId: 6
    },
    {
        nome: 'Poço Azul',
        tipo: 'Lagoa',
        descricao: 'Lagoa de águas cristalinas em Riachão.',
        dicas: 'Visite pela manhã para aproveitar a luz do sol.',
        destinoId: 7
    },
    {
        nome: 'Praia de Santo Amaro',
        tipo: 'Praia',
        descricao: 'Praia tranquila nos Lençóis Maranhenses.',
        dicas: 'Traga um guarda-sol e protetor solar.',
        destinoId: 8
    },
    {
        nome: 'Balaiada',
        tipo: 'Evento Cultural',
        descricao: 'Evento cultural que celebra a história de Caxias.',
        dicas: 'Verifique as datas do evento antes de visitar.',
        destinoId: 9
    },
    {
        nome: 'Praia do Cacau',
        tipo: 'Praia',
        descricao: 'Praia popular em Imperatriz.',
        dicas: 'Aproveite para experimentar a culinária local nos quiosques.',
        destinoId: 10
    }
];

async function insertData() {
    try {
        await sequelize.sync({ force: true }); 
        await Destino.bulkCreate(destinos); 
        await Atrativo.bulkCreate(atrativos); 
        console.log('Dados inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
    } finally {
        await sequelize.close();
    }
}

insertData();
