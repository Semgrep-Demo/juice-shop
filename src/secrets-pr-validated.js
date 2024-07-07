
const fetch = require('node-fetch');

const SEMGREP_BASE_URL = 'https://semgrep.dev/api/'
const SEMGREP_APP_TOKEN = 'a7d6329a5bb0bd4100bdb73f61fde8b5cb8778887575e541e1b8897b3d48d01c'

// Function to fetch scan results from Semgrep API
async function getSemgrepScanResults(apiUrl, apiToken) {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Semgrep scan results:', error);
  }
}

getSemgrepScanResults(apiUrl, SEMGREP_APP_TOKEN)
  .then(data => {
    console.log('Semgrep Scan Results:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });