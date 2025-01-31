import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw new Response(JSON.stringify({ message: 'Mode Not Supported' }), {
      status: 422,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  console.log(authData);

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Could not authenticate the user' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expireTime = new Date();
  expireTime.setHours(expireTime.getHours() + 1);
  localStorage.setItem('expireTime', expireTime.toISOString());

  return redirect('/');
  //manage token
}
