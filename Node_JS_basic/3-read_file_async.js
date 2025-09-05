const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }
      const students = lines.slice(1).map(line => line.split(','))
        .filter(fields => fields.length === lines[0].split(',').length);
      const total = students.length;
      console.log(`Number of students: ${total}`);
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
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
      resolve();
    });
  });
}

module.exports = countStudents;

