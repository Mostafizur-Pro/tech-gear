const fs = require('fs');

// Generate a unique ID (example: current timestamp)
const buildID = Date.now().toString();

// Write the ID to the BUILD_ID file
fs.writeFileSync('D:\\_mostafizur\\Diginie It\\tech-gear\\.next\\BUILD_ID', buildID);

console.log('BUILD_ID created:', buildID);
