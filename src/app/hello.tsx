export default function handler(req: { headers: { [x: string]: any; }; }, res: any) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'value');
    res.status(200).json({message:"Hello World"})
}


// client side 

async function callHelloApi() {
    try {
      const response = await fetch('/api/hello');
      
      // Extract response headers
      const contentType = response.headers.get('Content-Type');
      const customHeader = response.headers.get('Custom-Header');
      
      // Parse JSON response
      const data = await response.json();
      
      // Log the headers and response data
      console.log('Content-Type:', contentType);
      console.log('Custom-Header:', customHeader);
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  }
  
  // Call the function
  callHelloApi();