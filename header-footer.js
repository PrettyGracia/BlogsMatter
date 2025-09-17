document.addEventListener('DOMContentLoaded', () => {
  // Header
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="subheader">
      <div class="subheader-left">
        <span>Contact: (123) 456-7890</span> | <span>Email: contact@blogsmatter.com</span>
      </div>
      <div class="subheader-right">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://x.com" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="main-header">
      <div class="logo">
        <a href="/"><img src="/images/logo.png" alt="BlogsMatter Logo"></a>
      </div>
      <button id="menu-toggle" aria-label="Toggle menu">☰</button>
      <nav id="nav-menu">
        <a href="/index.html">Home</a>
        <a href="/posts">Blogs</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
      </nav>
    </div>
  `;
  document.body.prepend(header);

  // Footer
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-main">
      <div class="footer-column">
        <div class="logo">
          <img src="/images/logo.png" alt="BlogsMatter Logo">
        </div>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://x.com" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
        <p>BlogsMatter is your go-to source for insightful articles on topics that matter. Stay informed and inspired!</p>
      </div>
      <div class="footer-column">
        <div class="footer-menu">
          <h3>Main Links</h3>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/posts">Blogs</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-menu">
          <h3>About Us</h3>
          <ul>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/terms.html">Terms of Conditions</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-column latest-posts">
        <h3>Latest Posts</h3>
        <div class="post-grid">
          <a href="/posts/post1.html"><img src="/images/blog1.jpg" alt="Post 1"></a>
          <a href="/posts/post2.html"><img src="/images/blog2.jpg" alt="Post 2"></a>
          <a href="/posts/post3.html"><img src="/images/blog3.jpg" alt="Post 3"></a>
          <a href="/posts/post4.html"><img src="/images/blog4.jpg" alt="Post 4"></a>
          <a href="/posts/post5.html"><img src="/images/blog5.jpg" alt="Post 5"></a>
          <a href="/posts/post6.html"><img src="/images/blog6.jpg" alt="Post 6"></a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p>&copy; <span id="current-year"></span> BlogsMatter. All rights reserved.</p>
    </div>
  `;
  document.body.append(footer);

  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
  });
});
