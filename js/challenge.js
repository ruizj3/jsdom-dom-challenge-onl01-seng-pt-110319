document.addEventListener("DOMContentLoaded", () => {
  const comment = new Comment();

  const newCommentForm = document.getElementById("comment-form");
  const newComment = document.getElementById("comment-input");

  const commentUl = document.getElementById("list");

  const renderApp = () => (commentUl.innerHTML = Comment.renderComment());

  newCommentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Comment.createNewComment(newComment.value);
    e.target.reset();
    renderApp();
  });

  commentUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      Comment.deleteComment(e.target.dataset.description);
      renderApp();
    }
  });
});
