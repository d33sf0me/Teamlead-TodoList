import { Buffer } from 'buffer';
import httpClient from 'react-http-client';




export default async function getTasks() {
  const getResponse = await httpClient.get(
    'https://todolistbykate.atlassian.net/rest/api/3/project/TTBK',{
    headers: {
      'Authorization': `Basic ${Buffer.from(
            'katekrokh@gmail.com:ATATT3xFfGF0VY4KL97w_VSzE2OxpxUAvCkkNLv6cjwIa9_3r2yf2qPKxXnH492yW81s5szc898yfIkNdBvVkg7lxcSYxY6yhxP-sIPo4WBag0HurLPVDAv6tNkJPG3SS6hrNfWm3HkARBpCe0xEnwNq9q2lGMHQ9ZgzA04iyRBL9-sf7P8oobA=E624C79A'
            ).toString('base64')}`,
        Accept: "application/json",
        "Content-Type": "application/json",

        },
      }
  );
  console.log(getResponse);

    // try {
    //   const response = await fetch('https://todolistbykate.atlassian.net/rest/api/3/search?jql=project%20%3D%20TTBK', {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': `Basic ${Buffer.from(
    //    'katekrokh@gmail.com:ATATT3xFfGF0AUq_dNFebI3CiyMH2uHBBOR7MevQ1FDEx05bLWKX_FcEFUX8DhI9jr0GC_TU81-UhXyKLu9XXw0fGNfjCUZAepmRklf4JQfG8CaeFiMQsJN5Rx5jKbK5nZir1sQ-_UQ7Mg2J7lXZWFEU2zPunJpOqrIr9lVLSLl8AqqPUmBYLQQ=5F939513'
    //    ).toString('base64')}`,
    //       'Accept': 'application/json',

    //     },

    //   });
    //   if (!response.ok) {
    //     console.log('Error: ' + response.status);
    //     return false;
    //   } else {

    //     const result = await response.json();
    //     return result
    //   }
    // } catch (err) {
    //   console.log(err);
    // };
}