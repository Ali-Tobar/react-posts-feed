import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SideMenu from "./Components/SideMenu";

function App() {
  const posts = [
    { id: 1, title: "One", body: "body1" },
    { id: 2, title: "Two", body: "body2" },
    { id: 3, title: "Three", body: "body3" },
  ];
  return (
    <div>
      <Header />

      <div className="main-content">
        <div className="posts-container">
          {posts.map((el) => (
            <Post key={el.id} title={el.title} body={el.body} />
          ))}
        </div>

        <SideMenu />
      </div>
    </div>
  );
}

export default App;
