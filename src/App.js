import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <div className="h-[150px] w-full flex justify-center">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
          className="background-cover" alt=""
        ></img>
      </div>
      <Profile/>
    </div>
  );
}

export default App;
