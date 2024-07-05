// Setting a Cookie

import cookie from 'cookie';

export default function handler(req, res) {
    const authToken = 'example_auth_token';
    res.setHeader('set-Cookie', cookie.serialize('authToken', authToken {
        httpOnly: true,
        secure: process.env, NODE_ENV !== 'dev',
        maxage: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/',
    }))
}




export default function handler(req, res) {
  // Get auth token from cookie
  const cookies = cookie.parse(req.headers.cookie || '');
  const authToken = cookies.authToken;

  // Example: Verify authToken (you should implement your own verification logic)
  if (!authToken || authToken !== 'example_auth_token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Authenticated, proceed with protected logic
  res.status(200).json({ message: 'You are authorized!' });
}



// Delete a cookie



export default function handler(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('name', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(0),
    sameSite: 'strict',
    path: '/',
  }));
  res.status(200).json({ message: 'Cookie deleted successfully!' });
}
