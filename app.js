const postContainer = document.getElementById("post-container");




posts.forEach(post => { //this creates a post for each part of the array
    createPost(post);
})

function createPost(posts) { //posts is the parameter to get the data into the html from the array
    postContainer.innerHTML += `
    <section id="post">
        <div class="post-header">
            <img src="${posts.avatar}" alt="${posts.username} avatar" class="avatar post-avatar">
            <div class="post-name">
                <p class="post-author">${posts.name}</p>
                <p class="post-location">${posts.location}</p>
            </div>
        </div>
        <div class="post-content">
            <img src="${posts.post}" alt="Selfie of ${posts.name}">
        </div>
        <div class="post-interaction">
            <img src="images/icon-heart.png" alt="heart icon" class="icon" id="like">
            <img src="images/icon-comment.png" alt="comment icon" class="icon">
            <img src="images/icon-dm.png" alt="dm icon" class="icon">
        </div>
        <div class="post-likes">
            <p class="bold">${posts.likes} likes</p>
        </div>
        <div class="post-comments">
            <p><span class="bold">${posts.username}</span>${posts.comment}</p>
        </div>
    </section>`
}

let heart = document.getElementById("like");
heart.addEventListener('dblclick', function() {
    let imageSrc = heart.src;
    console.log(imageSrc);
    if(imageSrc.value = "images/icon-heart.png") {
        heart.setAttribute('src', 'images/icon-heart-fill.png');
    } else if (imageSrc.value = "images/icon-heart-fill.png") {
        heart.setAttribute('src', 'images/icon-heart.png');
    }

})