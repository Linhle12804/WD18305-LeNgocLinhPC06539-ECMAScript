class APICaller {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    // cách gọi axios nối cái baseUrl và endpoint ở đây sau đó trả về data
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      return await response.json();
    } catch (error) {
      console.error(Error`fetching data from ${endpoint}:`, error);
    }
  }
}

class Comment extends APICaller {
  constructor(baseUrl) {
    super(baseUrl);
    this.endpoint = "comments";
  }

  async getAll() {
    const res = await super.get(this.endpoint);
    return res;
  }

  async getOne(id) {
    const res = super.get(`${this.endpoint}/${id}`);
    return res;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const comment = new Comment(baseUrl);

  const comments = await comment.getAll();
  const divListComment = document.querySelector(".list-comment tbody");
  comments.forEach((comment) => {
    divListComment.innerHTML += `<td><p data-id="${comment.id}" class="comment" style='cursor:pointer'>${comment.name}</p></td>`;
  });
  document.querySelectorAll(".comment").forEach((item) => {
    item.addEventListener("click", async () => {
      const detailComment = await comment.getOne(item.getAttribute("data-id"));
      const detail = document.createElement("p");
      detail.style = "margin:10px";
      detail.innerHTML = `postId:${detailComment.postId},<br> id:${detailComment.id}<br> name:${detailComment.name}<br> email:${detailComment.email}<br>
      body:${detailComment.body}
      `;
      item.appendChild(detail);
    });
  });
});