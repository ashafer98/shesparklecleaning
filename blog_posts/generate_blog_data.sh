#!/bin/bash

# Step 1: Create a new blogpost.js file and start with the blogs array declaration
echo "const blogs = [" > blogpost.js

# Step 2: Loop through all HTML files (except blog.html) to extract <title>, <p class="excerpt">, <meta property="og:image">, and <meta name="category"> content
for file in *.html; do
  # Skip 'blog.html'
  if [[ "$file" == "blog.html" ]]; then
    continue
  fi

  # Extract the title from the <title> tag
  title=$(sed -n 's|.*<title>\(.*\)</title>.*|\1|p' "$file")

  # Extract the excerpt from <p class="excerpt"> and keep only the first sentence
  full_excerpt=$(sed -n 's|.*<p class="excerpt">\([^<]*\)</p>.*|\1|p' "$file")
  excerpt=$(echo "$full_excerpt" | sed -E 's/^([^\.]+\.).*/\1.../')

  # Extract the image from <meta property="og:image"> tag
  image=$(sed -n 's|.*<meta property="og:image" content="\([^"]*\)".*|\1|p' "$file")

  # Extract the category from <meta name="category"> tag
  category=$(sed -n 's|.*<meta name="category" content="\([^"]*\)".*|\1|p' "$file")

  # If no excerpt found, provide a default placeholder
  if [ -z "$excerpt" ]; then
    excerpt="This is a placeholder excerpt."
  fi

  # If no image found, use a default image
  if [ -z "$image" ]; then
    image="../images/default.jpg"
  fi

  # If no category found, use a default category
  if [ -z "$category" ]; then
    category="general"
  fi

  # Write the extracted data into the blogs array in blogpost.js
  echo "  {" >> blogpost.js
  echo "    \"title\": \"$title\"," >> blogpost.js
  echo "    \"link\": \"$file\"," >> blogpost.js
  echo "    \"image\": \"$image\"," >> blogpost.js
  echo "    \"excerpt\": \"$excerpt\"," >> blogpost.js
  echo "    \"category\": \"$category\"" >> blogpost.js
  echo "  }," >> blogpost.js
done

# Remove the trailing comma from the last object
sed -i '$s/,$//' blogpost.js

# Step 3: Close the blogs array
echo "]" >> blogpost.js

# Step 4: Append the blog rendering logic to blogpost.js
cat << 'EOF' >> blogpost.js

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
EOF

echo "blogpost.js has been generated with the latest blog data."
