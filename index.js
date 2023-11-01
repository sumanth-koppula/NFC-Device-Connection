const nfc = require('nfc-pcsc');

// Create a new NFC reader instance
const reader = new nfc.NFC();

// Handle an NFC tag event
reader.on('tag', (tag) => {
  console.log('NFC Tag detected:');
  console.log(tag);
});

// Handle errors
reader.on('error', (err) => {
  console.error('NFC Reader error:', err);
});

// Start the NFC reader
reader.start();

// Handle Ctrl+C to stop the reader
process.on('SIGINT', () => {
  reader.stop();
  process.exit();
});
