const express = require('express');
const companyRouter = require('./routes/company');
const personRouter = require('./routes/person');
const shareholderRouter = require('./routes/shareholder');
const shareRouter = require('./routes/share');
const transactionRouter = require('./routes/transaction');
const transactionTypeRouter = require('./routes/transaction_type')
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, ShareTrack!");
});

app.use(express.json());
app.use('/company', companyRouter);
app.use('/person', personRouter);
app.use('/shareholder', shareholderRouter);
app.use('/share', shareRouter);
app.use('/transaction', transactionRouter);
app.use('/transaction-type', transactionTypeRouter);

module.exports = app;