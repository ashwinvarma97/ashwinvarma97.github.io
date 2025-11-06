document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-target");
      var body = document.getElementById(targetId);
      if (!body) return;

      var isOpen = body.classList.contains("is-open");
      body.classList.toggle("is-open", !isOpen);
      btn.textContent = isOpen ? "Show post" : "Hide post";
    });
  });
});
