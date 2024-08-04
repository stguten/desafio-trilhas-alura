const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const destinosRouter = require('./src/routes/destinos');
const atrativosRouter = require('./src/routes/atrativos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/', express.static('public'));

app.use('/api/destinos', destinosRouter);
app.use('/api/atrativos', atrativosRouter);

sequelize.sync()
    .then(() => {
        console.log('Database & tabelas criado!');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Erro na sincronização da database', error);
    });
