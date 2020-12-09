const docReady = () => {
  fetch(
    "https://api.github.com/repos/t-chatter/t-chatter/releases/latest"
  ).then(async (res) => {
    const response = await res.json();
    const { browser_download_url, created_at, name } = response.assets[0];
    const btn = document.getElementById("download-btn");
    btn.innerText = `Download (v${response.tag_name})`;
    btn.href = browser_download_url;
    const nameEl = document.getElementById("release-name");
    nameEl.innerText = name;
    const dateEl = document.getElementById("release-date");
    dateEl.innerText = ` | ${new Date(created_at).toLocaleDateString()}`;
  });
};

document.addEventListener("DOMContentLoaded", docReady);
document
  .getElementById("download-btn-scroll")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const downloadBtn = document.getElementById("download-btn");
    scrollTo({
      behavior: "smooth",
      left: 0,
      top: downloadBtn.offsetTop,
    });
    downloadBtn.focus();
  });
