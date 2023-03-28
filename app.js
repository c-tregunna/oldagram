const postContainer = document.getElementById("post-container");


//render using foEach loop

function getPostHtml() {
    let postHtml = ``;



    posts.forEach(post => {

        let likeIconClass = '';
        if (post.isLiked) {
            likeIconClass = "fa-solid"
        }

        postHtml += `
        <section id="post">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.username} avatar" class="avatar post-avatar">
                <div class="post-name">
                    <p class="bold">${post.name}</p>
                    <p class="post-location">${post.location}</p>
                </div>
            </div>
            <div class="post-content">
                <img src="${post.post}" alt="Selfie of ${post.name}">
            </div>
            <div class="post-interaction">
                <i class="fa-regular fa-heart ${likeIconClass}" id="heart" data-like="${post.username}"></i>
                <img src="images/icon-comment.png" alt="comment icon" class="icon">
                <img src="images/icon-dm.png" alt="dm icon" class="icon">
            </div>
            <div class="post-likes">
                <p class="bold likes">${post.likes} likes</p>
            </div>
            <div class="post-comments">
                <p><span class="bold">${post.username}</span>${post.comment}</p>
            </div>
        </section>`
    })
    return postHtml
}

function render(){
    postContainer.innerHTML = getPostHtml()
}

render()


// //Function to add likes
document.addEventListener('click', function(e){
    if(e.target.dataset.like) {
        likePost(e.target.dataset.like)
    }
})

function likePost(postUserName) {
    let icon = document.getElementById("heart")
    console.log(postUserName)

    const targetPostObj = posts.filter(function(post){
        return post.username === postUserName;
    })[0]

    if(targetPostObj.isLiked) {
        targetPostObj.likes--
        icon.classList.add("fa-regular")
        icon.classList.remove("fa-solid")
    } else {
        targetPostObj.likes++
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
    targetPostObj.isLiked = !targetPostObj.isLiked;
    console.log(targetPostObj.likes)
    console.log(targetPostObj.isLiked)
    render()
}




// <img src="images/icon-heart.png" alt="heart icon" class="icon heart" data-like="${post.username}">