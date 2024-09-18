const blogs = [
  {
    "title": "Essential Cleaning Safety Tips for Your Home",
    "link": "cleaning-safety-tips.html",
    "image": "../images/cleaning-safety-tips.jpg",
    "excerpt": "Keeping your home clean is important for your health and well-being, but it's equally important to ensure you’re practicing safe cleaning habits....",
    "category": "cleaning-safety"
  },
  {
    "title": "Natural Cleaning Products for a Healthier Home",
    "link": "natural-cleaning-products.html",
    "image": "../images/natural-cleaning-products.jpg",
    "excerpt": " Natural cleaning products have gained popularity due to their effectiveness, non-toxic ingredients, and eco-friendliness....",
    "category": "cleaning-products"
  },
  {
    "title": "Top Cleaning Hacks for Busy People",
    "link": "top-cleaning-hacks.html",
    "image": "../images/top-cleaning-hacks.jpg",
    "excerpt": "In today’s fast-paced world, finding time to keep your home clean can be challenging....",
    "category": "cleaning-hacks"
  }
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
