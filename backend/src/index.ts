import 'dotenv-defaults/config';
import express from 'express';
import * as fs from 'fs';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/*', (req, res, next) =>
  fs.existsSync('public/index.html')
    ? res.send(fs.readFileSync('public/index.html', 'UTF-8'))
    : next()
);

app.listen(PORT, () => {
  console.log(`⚡️ API backend is running at http://localhost:${PORT}`);
});
