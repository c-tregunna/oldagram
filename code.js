console.log(posts);

const post = document.querySelectorAll("#post");
console.log(post);

function oldagramPosts() {
    for (let i = 0; i < posts.length; i ++) {
        post.innerHTML += `
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
            <img src="images/icon-heart.png" alt="heart icon" class="icon">
            <img src="images/icon-comment.png" alt="comment icon" class="icon">
            <img src="images/icon-dm.png" alt="dm icon" class="icon">
        </div>
        <div class="post-likes">
            <p class="bold">${posts.likes} likes</p>
        </div>
        <div class="post-comments">
            <p><span class="bold">${posts.username}</span>${posts.comment}</p>
        </div>
        `
    }

}

oldagramPosts();




// posts.forEach((post, index) => {
//     post[index].innerHTML += `<div class="post-header">
//                 <img src="${posts.avatar}" alt="${posts.username}avatar" class="avatar post-avatar">
//                 <div class="post-name">
//                     <p class="post-author">${posts.name}</p>
//                     <p class="post-location">${posts.location}</p>
//                 </div>
//             </div>
//             <div class="post-content">
//                 <img src="${posts.post}" alt="Selfie of ${posts.name}">
//             </div>
//             <div class="post-interaction">
//                 <img src="images/icon-heart.png" alt="heart icon" class="icon">
//                 <img src="images/icon-comment.png" alt="comment icon" class="icon">
//                 <img src="images/icon-dm.png" alt="dm icon" class="icon">
//             </div>
//             <div class="post-likes">
//                 <p class="bold">${posts.likes} likes</p>
//             </div>
//             <div class="post-comments">
//                 <p><span class="bold">${posts.username}</span>${posts.comment}</p>
//             </div>
//             `
//   });


// Adding like
let heart = document.querySelector(".like");
let likesTotal = posts.map((posts) => posts.likes);
console.log(likesTotal);
heart.addEventListener('dblclick', function() {
    let imageSrc = heart.src; //get the src of the image
    console.log(imageSrc);
    if(imageSrc.value = "images/icon-heart.png") {
        heart.setAttribute('src', 'images/icon-heart-fill.png'); //change to filled heart
    } else if (imageSrc.value = "images/icon-heart-fill.png") { //if dbl click again change back to unfilled heart - not working!
        heart.setAttribute('src', 'images/icon-heart.png');
    }

})