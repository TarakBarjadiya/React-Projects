import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  function handleNavigate(){
    navigate('products')
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products">the link of products</Link>
      </p>
      <button onClick={handleNavigate}>Navigate</button>
    </>
  );
}
