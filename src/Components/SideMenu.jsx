import TagButton from "./TagButton";
import sidebarImage from "../assets/images5.jpeg";

function SideMenu() {

  const categories = [
    {
      id: 1,
      title: "React",
      children: null
    },
    {
      id: 2,
      title: "Node.js",
      children: <span> ✔</span>
    },
    {
      id: 3,
      title: "تصميم المواقع",
      children: (
        <img
          src={sidebarImage}
          alt="رمز تصميم المواقع"
          style={{ width: "30px",marginLeft:"6px ",borderRadius:"7px", verticalAlign: "middle", marginRight: "6px" }}
        />
      )
    },
    {
      id: 4,
      title: "مقالات شائعة",
      children: <span> 🔥</span>
    },
  ];

  return (
    <aside className="container-btn">

      {categories.map((category) => (
        <TagButton key={category.id} title={category.title}>
          {category.children}
        </TagButton>
      ))}
    </aside>
  );
}

export default SideMenu;
