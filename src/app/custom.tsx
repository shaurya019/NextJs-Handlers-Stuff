// Create a simple API route to access and process the custom header value:
export default function handler(req: { headers: { [x: string]: any; }; }, res: any) {
    const customHeader = req.headers['custom-header'];
    console.log('Received custom header:', customHeader);
    res.status(200).json({receivedHeader:customHeader})
}


// Example client-side code
async function callApi() {
    const response = await fetch('/api/get-header', {
      method: 'GET',
      headers: {
        'Custom-Header': 'my-custom-value'
      }
    });
  
    const data = await response.json();
    console.log(data);
  }
  
  callApi();