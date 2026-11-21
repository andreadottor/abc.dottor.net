const loadComments = document.getElementById("load-comments");
const thread = document.getElementById("disqus_thread");
const commentsStatus = document.getElementById("comments-status");

loadComments.hidden = false;
loadComments.addEventListener("click", () => {
  loadComments.disabled = true;
  commentsStatus.textContent = "Caricamento dei commenti…";

  window.disqus_config = function () {
    this.page.url = thread.dataset.url;
    this.page.identifier = thread.dataset.url;
    this.page.language = "it";
  };

  const script = document.createElement("script");
  script.src = `https://${thread.dataset.shortname}.disqus.com/embed.js`;
  script.dataset.timestamp = Date.now();
  script.addEventListener("load", () => {
    commentsStatus.textContent = "";
    loadComments.hidden = true;
    document.getElementById("comments-title").focus();
  });
  script.addEventListener("error", () => {
    script.remove();
    commentsStatus.textContent = "Impossibile caricare i commenti. Puoi riprovare.";
    loadComments.disabled = false;
  });
  document.head.append(script);
});
