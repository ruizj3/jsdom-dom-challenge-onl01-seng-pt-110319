document.addEventListener("DOMContentLoaded", () => {
  const comments = document.getElementById("list");
	const commentForm = document.getElementById("comment-form");
	const commentInput = document.getElementById("comment-input");

  const startInterval = setInterval(incrementPerSecond, 1000);
	const counter = document.getElementById("counter");
	const minus = document.getElementById("minus");
	const plus = document.getElementById("plus");
	const heart = document.getElementById("heart");
	const pause = document.getElementById("pause");
	const submit = document.getElementById("submit");
	const likes = document.getElementsByClassName("likes")[0];

	minus.addEventListener("click", decrement);
	plus.addEventListener("click", increment);
	pause.addEventListener("click", pauseButtonClicked);
	heart.addEventListener("click", likeButtonClicked);

	commentForm.addEventListener("submit", function (event) {
		let comment = document.createElement("p");
		comment.innerText = commentInput.value;

		event.preventDefault();
		comments.appendChild(comment);
	});

	function incrementPerSecond() {
		if (pause.innerText == "pause") {
			counter.innerHTML++;
		} else {
			clearInterval(startInterval);
		}
	}

	function increment() {
		counter.innerHTML++;
	}

	function decrement() {
		counter.innerHTML--;
	}

	function pauseButtonClicked() {
		if (pause.innerText == "pause") {
			pause.innerText = "resume";

			submit.disabled = true;
			heart.disabled = true;
			plus.disabled = true;
			minus.disabled = true;

			clearInterval(startInterval);
		} else {
			pause.innerText = "pause";

			submit.disabled = false;
			heart.disabled = false;
			plus.disabled = false;
			minus.disabled = false;

			startInterval = setInterval(incrementPerSecond, 1000);
		}
	}

	function likeButtonClicked() {
		let like = document.createElement("li");
		like.innerText = counter.innerHTML + " was liked";

		likes.append(like);
	}

	startInterval;
});
