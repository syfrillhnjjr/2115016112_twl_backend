app.get('/endpoint', (req, res) => {
    // Logika penanganan permintaan
    res.send('Hello, GET request!');
  });
app.post('/endpoint', (req, res) => {
    // Logika penanganan permintaan
    res.send('Hello, POST request!');
  });
  const bodyParser = require('body-parser');

  // Menggunakan middleware bodyParser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
app.get('/endpoint', (req, res) => {
    // Logika penanganan permintaan
    res.send('Hello, GET request!');
  });
  