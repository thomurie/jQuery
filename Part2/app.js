$(function () {
  console.log("jQuery loaded");
});

const $movieReviewForm = $(".movie_review");
const $previousReviews = $(".previous_reviews");
$movieReviewForm.submit(function (event) {
  event.preventDefault();
  let $movieTitle = $("#movie_title").val();
  let $movieRating = +$("#movie_rating").val();

  $previousReviews.append(
    $(
      `<div></p>${$movieTitle} rated: ${$movieRating}</p><button class="remove">Remove</button></div>`
    )
  );

  $movieTitle = $("#movie_title").val("");
  $movieRating = +$("#movie_rating").val("");
});

$previousReviews.on("click", ".remove", function () {
  console.log($(this).parent().remove());
});
