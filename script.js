const btn = document.querySelector(".btn");
const emojiName = document.querySelector(".emoji-name");
const emojidiv = document.querySelector(".emoji");

const emoji = [];

async function  getEmoji() {
    let  response = await fetch(
        "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
    );

    data = await response.json();

    for(let i = 0;  i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojicode: data[i].unicodeName,
        });
    }
}

getEmoji();

btn.addEventListener("click", () =>{
    const randomNumber = Math.floor(Math.random() * emoji.length);
    emojidiv.innerText = emoji[randomNumber].emojiName;
    emojiName.innerText = emoji[randomNumber].emojicode;
});