const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

app.use(cors({ origin: true }));

app.get('/:domain', (req, res) => {

    dns.resolve4(req.params.domain, (err, ips) => {
        if (err)
        {
            return res.send(err);
        }

        return res.send(ips);
    });
});