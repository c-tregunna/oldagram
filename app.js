const postContainer = document.getElementById("post-container");

//Render using for loop
function oldagramPosts() {
    for (let i = 0; i < posts.length; i ++) {
        postContainer.innerHTML +=
        `
            <section id="post">
                <div class="post-header">
                    <img src="${posts[i].avatar}" alt="${posts[i].username} avatar" class="avatar post-avatar">
                    <div class="post-name">
                        <p class="post-author">${posts[i].name}</p>
                        <p class="post-location">${posts[i].location}</p>
                    </div>
                </div>
                <div class="post-content">
                    <img src="${posts[i].post}" alt="Selfie of ${posts[i].name}">
                </div>
                <div class="post-interaction">
                    <img src="images/icon-heart.png" alt="heart icon" class="icon">
                    <img src="images/icon-comment.png" alt="comment icon" class="icon">
                    <img src="images/icon-dm.png" alt="dm icon" class="icon">
                </div>
                <div class="post-likes">
                    <p class="bold">${posts[i].likes} likes</p>
                </div>
                <div class="post-comments">
                    <p><span class="bold">${posts[i].username}</span>${posts[i].comment}</p>
                </div>
            </section>
        `
    }
}

oldagramPosts();


//render using foEach loop
// posts.forEach(post => { //this creates a post for each part of the array
//     createPost(post);
// })

// function createPost(posts) { //posts is the parameter to get the data into the html from the array
//     postContainer.innerHTML += `
//     <section id="post">
//         <div class="post-header">
//             <img src="${posts.avatar}" alt="${posts.username} avatar" class="avatar post-avatar">
//             <div class="post-name">
//                 <p class="bold">${posts.name}</p>
//                 <p class="post-location">${posts.location}</p>
//             </div>
//         </div>
//         <div class="post-content">
//             <img src="${posts.post}" alt="Selfie of ${posts.name}">
//         </div>
//         <div class="post-interaction">
//             <img src="images/icon-heart.png" alt="heart icon" class="icon heart">
//             <img src="images/icon-comment.png" alt="comment icon" class="icon">
//             <img src="images/icon-dm.png" alt="dm icon" class="icon">
//         </div>
//         <div class="post-likes">
//             <p class="bold likes">${posts.likes} likes</p>
//         </div>
//         <div class="post-comments">
//             <p><span class="bold">${posts.username}</span>${posts.comment}</p>
//         </div>
//     </section>`
// }