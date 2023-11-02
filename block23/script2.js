// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then((json) => console.log(json))
// .catch ((err) => console.log(err));
    
// // in Async

async function getPosts() {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (res.status === 404) {
            throw new Error("404:Resource not found!");
            }
        console.log(res);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}

// //or

// async function getPosts() {
//     try{
//         const res = await fetch(`("https://jsonplaceholder.typicode.com/todos"`);
//         if (res.status === 404) {
//             throw new Error("404:Resource not found!");
//         }
//         console.log(res);
//         const json = await res.json();
//         return json;
//     } catch(err) {
//         console.log(err);
//     }
// }
// const posts = await getPosts();
// console.log(posts);




// posts.forEach((post) => {
    //     //   const newHeading = document.createElement("h2");
    //     //   const newParagraph = document.createElement("p");
    //     //   newHeading.innerText = post.title;
    //     //   newParagraph.innerText = post.body;
    //     //   postsContainer.appendChild(newHeading);
    //     //   postsContainer.appendChild(newParagraph);
    //     // });

const postContainer = document.getElementById("File");

const posts = await getPosts();
console.log(posts);

function createPostUi(posts, postContainer) {
    let htmlString = "";

    posts.forEach((post) => {
        const heading = document.createElement("h2");
        heading.innerText = post.title;
        const paragraph = document.createElement("p");
        paragraph.innerText = post.body;
        postContainer.appendChild(heading);
        postContainer.appendChild(paragraph);
    });
}

createPostUi(posts, postContainer);


