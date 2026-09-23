
function TagButton({ title, children }) {
  return (
    <button className="btn">
      <span>{title}</span>
      {children}
    </button>
  );
}

export default TagButton;