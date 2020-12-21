const docReady = () => {
  fetch(
    "https://api.github.com/repos/t-chatter/t-chatter/releases/latest"
  ).then(async (res) => {
    const response = await res.json();
    const { created_at } = response.assets[0];
    const btn = document.getElementById("download-btn");
    btn.innerText = `Download (${response.tag_name})`;
    btn.href =
      "https://github.com/T-Chatter/T-Chatter/releases/download/" +
      response.tag_name +
      "/T-Chatter-" +
      response.tag_name.replace("v", "") +
      ".exe";
    const nameEl = document.getElementById("release-name");
    nameEl.innerText =
      "T-Chatter-" + response.tag_name.replace("v", "") + ".exe";
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
