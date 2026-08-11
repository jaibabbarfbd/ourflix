const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Mount static asset directories
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/media', express.static(path.join(__dirname, '../media')));

// Serve index.html on root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`  OURFLIX Server is running successfully!`);
  console.log(`  Access the site at: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
