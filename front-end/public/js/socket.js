const socket = io.connect("http://localhost:3000");

const API_URL = "http://localhost:3000/api";
const chatBax = document.querySelector(".chat_bax");

socket.on("connect", () => {
  console.log("connect");
});

async function postChat(chat, userAggent) {
  const res = await axios.post(`${API_URL}/chat`, {
    chat: chat,
    aggent: userAggent,
  });
  console.log(res.data);
}

function handleChat(userAggent) {
  const chat = document.getElementById("chatBax");
  if(!chat.value) {
    alert("메세지를 입력해주세요");
  } else {
    postChat(chat.value, userAggent);
    chat.value = '';
  }
}

function appendChatMine(chat) {
  const newChatBox = document.createElement("div");
  newChatBox.classList.add("mine");
  const newChatDiv = document.createElement("div");
  newChatDiv.innerText = chat;
  newChatBox.appendChild(newChatDiv);
  chatBax.appendChild(newChatBox);
}

function appentChatOther(chat) {
  const newChatBox = document.createElement("div");
  newChatBox.classList.add("other");
  const newChatDiv = document.createElement("div");
  newChatDiv.innerText = chat;
  newChatBox.appendChild(newChatDiv);
  chatBax.appendChild(newChatBox);
}

function deleteAllChat() {
  axios.delete(`${API_URL}/chat`);
}

function paintChatList(resChatList, userAggent) {
  if(resChatList.length > 21) {
    deleteAllChat();
  }
  resChatList.forEach((chat) => {
    if(chat.aggent === userAggent) {
      appendChatMine(chat.chat);
    } else {
      appentChatOther(chat.chat);
    }
  });
}

function paintChat(chat, userAggent) {
  if(chat.aggent === userAggent) {
    appendChatMine(chat.chat);
  } else {
    appentChatOther(chat.chat);
  }
}

async function init() {
  const resInfo = await axios.get(`${API_URL}/info`);
  const userAggent = resInfo.data.aggent;
  
  const resChatList = await axios.get(`${API_URL}/chat`);
  paintChatList(resChatList.data, userAggent);

  document.getElementById("chatBtn").onclick = () => {
    handleChat(userAggent);
  };

  socket.on("chat", (data) => {
    console.log(data);
    paintChat(data, userAggent);
  });
}

init();