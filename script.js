function fetchPost(){
    const url = 'https://api-rest-post-diegocandido.herokuapp.com/postagens/';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        mostrarPost(data);
    })
    .catch(error => console.error('erro', error));
}
function mostrarPosts(posts){
    const containerPosts = document.getElementById('card');
    posts.forEach((post, index) => {
        const thumbImageSrc = post.thumbImage.startsWith('/') ? `https://api-rest-post-diegocandido.herokuapp.com${post.thumbImage}` : post.thumbImage;
        const postHTML = `
        <div id ="card" onclick="mostrarUmPost(${index})">
        <img id="card" src="${thumbImageSrc}" alt="${post.thumbImageAltText}">
            <div id="cimaPost">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <p>Por ${post.profileName}, ${post.postDate}</p>
            </div>
        </div>

    }});
}
fetchPost();