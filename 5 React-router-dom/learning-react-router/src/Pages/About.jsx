import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  const GotToHome = () => {
    navigate('/');
  };

  const GoBack = () => {
    navigate(-1);
  };

  return <>
    <div>
      <h1>About Page</h1>
      <p>This page contains information about our application.</p>
    </div>
    <button onClick={GotToHome}>Go To Home</button>
    <button onClick={GoBack}>Go Back</button>
  </>
}

export default About;