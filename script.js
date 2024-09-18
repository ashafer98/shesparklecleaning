// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     // Toggle Nav
//     nav.classList.toggle('nav-active');

//     // Animate Links
//     nav.querySelectorAll('li').forEach((link, index) => {
//         if (link.style.animation) {
//             link.style.animation = '';
//         } else {
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//         }
//     });

//     // Burger Animation
//     burger.classList.toggle('toggle');
// });

// Fetch the JSON data containing the blog posts
// Blog post data directly in JavaScript

//get name = name


const blogs = [
    {
        "title": "Natural Cleaning Products for a Healthier Home",
        "image": "./images/hersparklelogo.jpg",
        "excerpt": "Discover natural alternatives to harsh chemicals for cleaning your home, and learn how to make your own DIY cleaning solutions...",
        "link": "blog_posts/natural-cleaning-products.html",
        "category": "cleaning-tips"
    },
    {
        "title": "Essential Cleaning Safety Tips for Your Home",
        "image": "./images/hersparklelogo.jpg",
        "excerpt": "Follow these safety tips to protect your family from harmful chemicals and accidents while keeping your home clean...",
        "link": "blog_posts/cleaning-safety-tips.html",
        "category": "cleaning-tips"
    },
]

// Reference to the blog posts container
const blogPostsContainer = document.getElementById('blog-posts');

// Loop through the blog array and create HTML for each post
blogs.forEach(blog => {
    const blogHTML = `
        <article class="blog-post" data-category="${blog.category}">
            <img src="${blog.image}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <a href="${blog.link}" class="btn-read-more">Read More</a>
        </article>
    `;
    // Insert the blog post HTML into the blog posts container
    blogPostsContainer.innerHTML += blogHTML;
});




// document.getElementById('filter-select').addEventListener('change', function() {
//     const category = this.value;
//     const posts = document.querySelectorAll('.blog-post');
    
//     posts.forEach(post => {
//         if (category === 'all' || post.dataset.category === category) {
//             post.style.display = 'block';
//         } else {
//             post.styleHere is the JavaScript filtering code to complete your blog page:

// ```javascript
// document.getElementById('filter-select').addEventListener('change', function() {
//     const category = this.value;
//     const posts = document.querySelectorAll('.blog-post');
    
//     posts.forEach(post => {
//         if (category === 'all' || post.dataset.category === category) {
//             post.style.display = 'block';
//         } else {
//             post.style.display = 'none';
//         }
//     });
// });



