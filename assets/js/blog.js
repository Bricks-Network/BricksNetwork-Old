document.addEventListener('DOMContentLoaded', function () {
    const blogSection = document.getElementById('blog-section');

    // Fetch blog data from JSON file
    fetch('assets/blog/blogs.json')
        .then(response => response.json())
        .then(data => {
            // Display full blog content
            data.forEach(blog => {
                showFullBlog(blog);
            });
        })
        .catch(error => console.error('Error fetching blog data:', error));

    function formatTimestamp(timestamp) {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', options);
    }

    function showFullBlog(blog) {
        const blogContainer = document.createElement('div');
        blogContainer.classList.add('blog-full');
        blogContainer.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <p>At ${formatTimestamp(blog.timestamp)}</p>
        `;
        blogSection.appendChild(blogContainer);
    }
});
