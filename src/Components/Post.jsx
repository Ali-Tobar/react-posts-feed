function Post({title, body}) {
  return (
    <div className="post">
      <h2>This is The Post {title}</h2>
      <hr />
      <h4>This is The Post {body}</h4>
    </div>
  );
}

export default Post;
