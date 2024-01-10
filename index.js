//Random Images
const images=[
    "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qTOK3-7lMZQMT4PBO9u_8b1Rls8CUKx9xA&usqp=CAU",
    "https://cdn3.iconfinder.com/data/icons/hand-drawn-avatars/500/Avatars-20-512.png",
    "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVNl0TVPEwDDpv0A4h2ukPqW9haj9FvzxrQ&usqp=CAU",
    "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png"
    ]

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

//Post API
async function getPost() {
    try {
        const response = await fetch('https://blog-api-t6u0.onrender.com/posts');
        const posts = await response.json();
        document.querySelector("#container").innerHTML = posts.map(({ title, body }) => `
            <div class="col-md-12 mb-4">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="${getRandomImage()}"
                             class="img-fluid"
                              alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title">${title}</h2>
                                <h5 class="card-text">${body}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
    } catch (err) {
        console.log(err);
    }
}

getPost();
