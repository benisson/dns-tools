const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });