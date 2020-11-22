import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/dbCards.js';
import Cors from 'cors';
// App config
const app = express();
const port = process.env.PORT || 8001;
const conn_url = 'mongodb+srv://admin:n1tMgoAhKFRgm0Hi@cluster0.rzlwi.mongodb.net/tinder-db?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// Db Config
mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


// API Endpoints
app.get('/', (request, response) => {
    response.status(200).send('hello world');
});

app.post('/tinder/cards', (request, response) => {
    const dbCard = request.body;
    
    Cards.create(dbCard, (err, data) => {
        if(err) {
            response
                .status(500)
                .send(err);
        } else {
            response
                .status(201)
                .send(data);
        }
    });
});

app.get('/tinder/cards', (request, response) => {
    Cards.find((err, data) => {
        if (err) {
            response
                .status(500)
                .send(err)
        } else {
            response
                .status(200)
                .send(data)
        }
    })
})

app.delete('/tinder/cards', (request, response) => {
    const filter = request.body;
    
    Cards.deleteOne(filter, (err, data) => {
        if (err) {
            response
                .status(500)
                .send(err)
        } else {
            response
                .status(200)
                .send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log('worked'));