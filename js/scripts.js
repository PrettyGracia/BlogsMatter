document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.getElementById('carousel-track');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;
  let posts = [];

  // Fetch blog data
  fetch('/blogs.json')
    .then(response => response.json())
    .then(data => {
      posts = data.slice(0, 6); // Limit to 6 latest posts
      renderCarousel();
      updateCarousel();
    })
    .catch(error => console.error('Error fetching blogs:', error));

  function renderCarousel() {
    carouselTrack.innerHTML = posts.map(post => `
      <div class="carousel-item">
        <div class="post">
          <h3>${post.title}</h3>
          <div class="category">${post.category}</div>
          <div class="post-meta">${post.date}</div>
          <p>${post.excerpt}</p>
          <a href="${post.link}" class="cta-button">Read More</a>
        </div>
      </div>
    `).join('');
  }

  function updateCarousel() {
    const itemWidth = carouselTrack.children[0].offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + posts.length) % posts.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % posts.length;
    updateCarousel();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % posts.length;
    updateCarousel();
  }, 5000);

  // Update carousel on window resize
  window.addEventListener('resize', updateCarousel);
});