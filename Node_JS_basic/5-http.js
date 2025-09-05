const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function getStudentsData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }
      const students = lines.slice(1).map(line => line.split(','))
        .filter(fields => fields.length === lines[0].split(',').length);
      const total = students.length;
      let output = `Number of students: ${total}\n`;
      const fieldMap = {};
      students.forEach(fields => {
        const field = fields[fields.length - 1];
        const firstname = fields[0];
        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstname);
      });
      Object.keys(fieldMap).sort().forEach(field => {
        const names = fieldMap[field];
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let response = 'This is the list of our students\n';
    getStudentsData(database)
      .then((data) => {
        response += data;
        res.end(response);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;

