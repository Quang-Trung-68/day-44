import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate("/prop-key")}>-&gt; Prop Key</button>
      </div>
      <br />
    </>
  );
}

export default Home;
