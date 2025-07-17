let bingoNicknames = {};

export function loadNicknames() {
  fetch('data/uk-bingo-nicknames.json')
    .then(res => res.json())
    .then(data => {
      bingoNicknames = data;
    })
    .catch(err => {
      console.error("Failed to load nickname data:", err);
    });
}

export function getNickname(number) {
  return bingoNicknames[number] || "";
}

export function showNickname(number) {
  const nicknameDiv = document.getElementById("bingo-nickname");
  const nickname = getNickname(number);
  nicknameDiv.textContent = nickname ? `${number}: ${nickname}` : "";
}
