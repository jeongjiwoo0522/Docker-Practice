async function paintPost() {
  const res = await axios.get(`${POST_API_URL}`);
  const innerPost = document.querySelectorAll(".post");
  res.data.forEach((post, index) => {
    innerPost[index].getId = () => {
      return post.id;
    }
    innerPost[index].innerHTML = post.post + `<button class="delBtn">delete</button>`;
  });
}

async function handlePost() {
  const post = prompt("TEXT");
  if(post === "" || post === null ){
    return;
  }
  this.parentElement.innerHTML = post + `<button class="delBtn">delete</button>`;
  insertEventListener();
  const res = await axios.post(`${POST_API_URL}`, { 
    post: post,
    aggent: localStorage.getItem("aggent"),
  });
  console.log(res.data);
}

function handleDelete() {
  console.log(this.parentElement.getId());
}

function insertEventListener() {
  document.querySelectorAll(".delBtn").forEach(b => {
    b.addEventListener("click", handleDelete);
  });
}

async function init() {
  document.querySelectorAll(".add_post_btn").forEach(b => {
    b.addEventListener("click", handlePost);
  });
  await paintPost();
  insertEventListener();
}

init();

document.querySelectorAll(".delBtn").forEach(b => {
  b.addEventListener("click", handleDelete);
});