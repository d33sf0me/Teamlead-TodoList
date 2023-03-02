import { Buffer } from 'buffer';
import httpClient from 'react-http-client';




export default async function getTasks() {

    try {
      const response = await fetch('https://todolistbykate.atlassian.net/rest/api/3/search?jql=project%20%3D%20TTBK', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from('katekrokh@gmail.com:ATATT3xFfGF0AUq_dNFebI3CiyMH2uHBBOR7MevQ1FDEx05bLWKX_FcEFUX8DhI9jr0GC_TU81-UhXyKLu9XXw0fGNfjCUZAepmRklf4JQfG8CaeFiMQsJN5Rx5jKbK5nZir1sQ-_UQ7Mg2J7lXZWFEU2zPunJpOqrIr9lVLSLl8AqqPUmBYLQQ=5F939513').toString('base64')}`,
          'Accept': 'application/json',

        },

      });
      if (!response.ok) {
        console.log('Error: ' + response.status);
        return false;
      } else {

        const result = await response.json();
        return result
      }
    } catch (err) {
      console.log(err);
    };
}