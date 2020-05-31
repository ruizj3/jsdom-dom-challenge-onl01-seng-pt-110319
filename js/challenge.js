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

	plus.addEventListener("click", increment);
	function increment() {
		counter.innerHTML++;
	}

	minus.addEventListener("click", decrement);
	function decrement() {
		counter.innerHTML--;
	}

	pause.addEventListener("click", pauseButtonClicked);
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


	heart.addEventListener("click", likeButtonClicked);
	function likeButtonClicked() {
		let like = document.createElement("li");
    if (likes.innerText.includes(counter.innerHTML)) {
      let a = counter.innerHTML
      let regex = new RegExp( a, 'g' );
      appear = 1;
      appear += (likes.innerText.match(regex) || []).length;
      like.innerText = counter.innerHTML + " was liked " + appear + " times";
      likes.append(like);
    } else {
      like.innerText = counter.innerHTML + " was liked 1 time";
		  likes.append(like);
    }
	}

	startInterval;
});
