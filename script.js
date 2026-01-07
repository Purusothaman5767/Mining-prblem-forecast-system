// Page templates and content
const pages = {
    home: `
        <div class="page-container">
            <!-- Hero Section -->
            <div class="hero">
                <div class="hero-content">
                    <div class="hero-badge">
                        <svg class="hero-badge-icon" viewBox="0 0 16 16" fill="none">
                            <path d="M10.6667 4.66667H14.6667V8.66667" stroke="#1447E6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6667 4.66667L9 10.3333L5.66667 7L1.33333 11.3333" stroke="#1447E6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="hero-badge-text">Advanced Mining Analytics</span>
                    </div>
                    <h1 class="hero-title">Predict Your Mining Success</h1>
                    <p class="hero-description">Leverage cutting-edge forecasting technology to optimize your mining operations. Get accurate predictions, real-time analytics, and data-driven insights to maximize profitability and minimize risks.</p>
                    <div class="hero-buttons">
                        <button class="btn-primary" onclick="alert('Get Started clicked!')">
                            Get Started
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3.33333 8H12.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="btn-secondary" onclick="alert('View Demo clicked!')">View Demo</button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat">
                            <div class="stat-value">98%</div>
                            <div class="stat-label">Accuracy Rate</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">500+</div>
                            <div class="stat-label">Active Clients</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">24/7</div>
                            <div class="stat-label">Live Monitoring</div>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                  <img src="images/hero.jpg" class="hero-img" alt="Mining Dashboard">

                </div>
            </div>

            <!-- About Section -->
            <div class="about-section">
                <div class="about-container">
                    <div class="about-header">
                        <h1 class="about-title">About Mining Forecast</h1>
                        <p class="about-description">We're revolutionizing the mining industry with cutting-edge predictive analytics and data-driven insights. Our platform empowers miners to make informed decisions and maximize their operational efficiency.</p>
                    </div>

                    <div class="about-content">
                        <div class="about-image">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Analytics Dashboard">
                        </div>
                        <div class="about-text">
                            <h2>Why Choose Our Platform?</h2>
                            <p>Mining Forecast combines sophisticated algorithms with industry expertise to deliver unparalleled accuracy in mining predictions. Our platform has been trusted by hundreds of mining operations worldwide.</p>
                            <ul class="feature-list">
                                <li class="feature-item">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#155DFC" stroke-width="1.67"/>
                                        <path d="M7.5 9.16667L10 11.6667L18.3333 3.33333" stroke="#155DFC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="feature-text">Comprehensive market analysis and trend forecasting</span>
                                </li>
                                <li class="feature-item">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#155DFC" stroke-width="1.67"/>
                                        <path d="M7.5 9.16667L10 11.6667L18.3333 3.33333" stroke="#155DFC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="feature-text">Real-time monitoring of mining performance metrics</span>
                                </li>
                                <li class="feature-item">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#155DFC" stroke-width="1.67"/>
                                        <path d="M7.5 9.16667L10 11.6667L18.3333 3.33333" stroke="#155DFC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="feature-text">Customizable alerts and notifications</span>
                                </li>
                                <li class="feature-item">
                                    <svg class="feature-icon" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#155DFC" stroke-width="1.67"/>
                                        <path d="M7.5 9.16667L10 11.6667L18.3333 3.33333" stroke="#155DFC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="feature-text">Expert support team available 24/7</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="feature-cards">
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18 17V9M13 17V5M8 17V14" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Real-time Analytics</h3>
                            <p>Monitor your mining operations with live data feeds and instant updates.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M4 14C3.81077 14.0006 3.62523 13.9476 3.46495 13.847C3.30468 13.7464 3.17623 13.6024 3.09455 13.4317C3.01287 13.261 2.98129 13.0706 3.0035 12.8827C3.02571 12.6947 3.10078 12.517 3.22 12.37L13.12 2.17C13.1943 2.08428 13.2955 2.02636 13.407 2.00573C13.5185 1.98511 13.6337 2.00301 13.7337 2.0565C13.8337 2.11 13.9126 2.1959 13.9573 2.30011C14.0021 2.40432 14.0101 2.52065 13.98 2.63L12.06 8.65C12.0034 8.80152 11.9844 8.96452 12.0046 9.12501C12.0248 9.28549 12.0837 9.43868 12.1761 9.57143C12.2685 9.70417 12.3918 9.81251 12.5353 9.88716C12.6788 9.96181 12.8382 10.0005 13 10H20C20.1892 9.99935 20.3748 10.0524 20.535 10.153C20.6953 10.2536 20.8238 10.3976 20.9055 10.5683C20.9871 10.739 21.0187 10.9294 20.9965 11.1173C20.9743 11.3053 20.8992 11.483 20.78 11.63L10.88 21.83C10.8057 21.9157 10.7045 21.9736 10.593 21.9943C10.4815 22.0149 10.3663 21.997 10.2663 21.9435C10.1663 21.89 10.0874 21.8041 10.0427 21.6999C9.99791 21.5957 9.98992 21.4794 10.02 21.37L11.94 15.35C11.9966 15.1985 12.0156 15.0355 11.9954 14.875C11.9752 14.7145 11.9163 14.5613 11.8239 14.4286C11.7315 14.2958 11.6082 14.1875 11.4647 14.1128C11.3212 14.0382 11.1618 13.9995 11 14H4Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>AI-Powered Predictions</h3>
                            <p>Advanced machine learning algorithms forecast market trends and profitability.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C7 5 9.5 3.8 11.24 2.28C11.4519 2.099 11.7214 1.99955 12 1.99955C12.2786 1.99955 12.5481 2.099 12.76 2.28C14.51 3.81 17 5 19 5C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V13Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Secure & Reliable</h3>
                            <p>Enterprise-grade security ensures your data is protected at all times.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-card-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M18.1675 8.33333C18.5481 10.2011 18.2768 12.1429 17.399 13.8348C16.5212 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64219 18.5382 7.80358 18.0353C5.96498 17.5325 4.35433 16.4145 3.24023 14.8679C2.12613 13.3212 1.57594 11.4394 1.68139 9.53616C1.78684 7.63295 2.54157 5.82341 3.81971 4.40931C5.09785 2.99521 6.82215 2.06203 8.70505 1.76538C10.588 1.46873 12.5157 1.82655 14.1667 2.77917" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 11L12 14L22 4" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Proven Accuracy</h3>
                            <p>Industry-leading prediction accuracy backed by years of data analysis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Access Links -->
            <div class="quick-links">
                <div class="quick-links-header">
                    <h1>Quick Access Links</h1>
                    <p class="page-description">Everything you need to get started and stay informed about mining operations</p>
                </div>
                <div class="quick-links-grid">
                    <div class="quick-link-card" onclick="navigateTo('calculators')">
                        <div class="quick-link-icon blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 6H16M16 14V18M16 10H16.01M12 10H12.01M8 10H8.01M12 14H12.01M8 14H8.01M12 18H12.01M8 18H8.01" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Mining Calculators</h3>
                        <p>Calculate potential earnings, ROI, and break-even points</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                    <div class="quick-link-card" onclick="navigateTo('documentation')">
                        <div class="quick-link-icon green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z" stroke="#00A63E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20M10 9H8M16 13H8M16 17H8" stroke="#00A63E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Documentation</h3>
                        <p>Comprehensive guides and API documentation</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                    <div class="quick-link-card" onclick="navigateTo('resources')">
                        <div class="quick-link-icon purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 7V21M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z" stroke="#9810FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Resources</h3>
                        <p>Industry reports, whitepapers, and case studies</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                    <div class="quick-link-card" onclick="navigateTo('faq')">
                        <div class="quick-link-icon orange">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#F54900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke="#F54900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>FAQ & Support</h3>
                        <p>Get answers to common questions and contact support</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                    <div class="quick-link-card" onclick="navigateTo('newsletter')">
                        <div class="quick-link-icon pink">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#E60076" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Newsletter</h3>
                        <p>Subscribe to weekly mining insights and market updates</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                    <div class="quick-link-card" onclick="navigateTo('community')">
                        <div class="quick-link-icon indigo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 3H21V9M10 14L21 3M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#4F39F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3>Community Forum</h3>
                        <p>Connect with other miners and share experiences</p>
                        <button class="quick-link-button">Learn More →</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div class="page-container bg-gray-50">
            <div class="page-header">
                <h1 class="page-title">Contact Us</h1>
                <p class="page-description">Get in touch with our team. We're here to help you optimize your mining operations.</p>
            </div>
            <div class="contact-grid">
                <div class="contact-form">
                    <h2 class="mb-6">Send us a message</h2>
                    <form onsubmit="handleContactSubmit(event)">
                        <div class="form-group">
                            <label class="form-label" for="name">Name</label>
                            <input class="form-input" type="text" id="name" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="email">Email</label>
                            <input class="form-input" type="email" id="email" placeholder="your.email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="subject">Subject</label>
                            <input class="form-input" type="text" id="subject" placeholder="How can we help?" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="message">Message</label>
                            <textarea class="form-textarea" id="message" placeholder="Tell us more about your needs..." rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-primary" style="width: 100%; justify-content: center;">Send Message</button>
                    </form>
                </div>
                <div class="contact-info">
                    <div class="contact-info-card">
                        <h2 class="mb-6">Contact Information</h2>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p style="margin-bottom: 4px; color: #0a0a0a;">Email</p>
                                <p style="color: #4a5565;">support@miningforecast.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p style="margin-bottom: 4px; color: #0a0a0a;">Phone</p>
                                <p style="color: #4a5565;">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#155DFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p style="margin-bottom: 4px; color: #0a0a0a;">Address</p>
                                <p style="color: #4a5565;">123 Mining Street<br>San Francisco, CA 94102</p>
                            </div>
                        </div>
                    </div>
                    <div style="background-color: #eff6ff; padding: 32px; border-radius: 16px;">
                        <h3 class="mb-4">Business Hours</h3>
                        <div style="color: #4a5565; line-height: 1.8;">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                            <p style="color: #155DFC; margin-top: 16px;">Emergency support available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    about: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">About Mining Forecast</h1>
                <p class="page-description">We're on a mission to transform the mining industry through advanced predictive analytics and real-time data insights.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-bottom: 80px;">
                <div style="text-align: center;">
                    <div style="font-size: 48px; color: #155DFC; margin-bottom: 8px;">2018</div>
                    <div style="color: #4a5565;">Founded</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 48px; color: #155DFC; margin-bottom: 8px;">500+</div>
                    <div style="color: #4a5565;">Active Clients</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 48px; color: #155DFC; margin-bottom: 8px;">98%</div>
                    <div style="color: #4a5565;">Accuracy Rate</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 48px; color: #155DFC; margin-bottom: 8px;">50+</div>
                    <div style="color: #4a5565;">Team Members</div>
                </div>
            </div>
            <div style="background-color: #eff6ff; padding: 48px; border-radius: 16px; margin-bottom: 80px;">
                <h2 class="mb-6">Our Story</h2>
                <div style="color: #4a5565; line-height: 1.8; font-size: 16px;">
                    <p style="margin-bottom: 16px;">Founded in 2018, Mining Forecast was born from a simple observation: the mining industry was making billion-dollar decisions based on outdated forecasting methods. Our founders, a team of data scientists and mining industry veterans, knew there had to be a better way.</p>
                    <p style="margin-bottom: 16px;">We set out to build a platform that could harness the power of machine learning and real-time data to provide miners with unprecedented visibility into their operations. What started as a small team working out of a garage has grown into a company serving over 500 mining operations worldwide.</p>
                    <p>Today, Mining Forecast continues to push the boundaries of what's possible in mining analytics, helping our clients optimize operations, reduce risks, and maximize profitability through data-driven insights.</p>
                </div>
            </div>
        </div>
    `,

    calculations: `
        <div class="page-container bg-gray-50">
            <div class="page-header">
                <h1 class="page-title">Mining Profitability Calculator</h1>
                <p class="page-description">Calculate your potential mining profits with our advanced calculator. Get accurate estimates for daily, monthly, and yearly returns.</p>
            </div>
            <div class="calculator-grid">
                <div class="calculator-inputs">
                    <h2 class="mb-6">Input Parameters</h2>
                    <div class="form-group">
                        <label class="form-label" for="hastate">Hash Rate (TH/s)</label>
                        <input class="form-input" type="number" id="hastate" value="100" placeholder="100">
                        <p style="font-size: 12px; color: #4a5565; margin-top: 4px;">Total mining power in teargases per second</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="power">Power Cost ($/kWh)</label>
                        <input class="form-input" type="number" id="power" value="0.12" step="0.01" placeholder="0.12">
                        <p style="font-size: 12px; color: #4a5565; margin-top: 4px;">Your electricity cost per kilowatt-hour</p>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="pool">Pool Fee (%)</label>
                        <input class="form-input" type="number" id="pool" value="1" step="0.1" placeholder="1">
                        <p style="font-size: 12px; color: #4a5565; margin-top: 4px;">Mining pool fee percentage</p>
                    </div>
                    <button class="btn-primary" onclick="calculateProfitability()" style="width: 100%; justify-content: center;">Calculate Profitability</button>
                </div>
                <div class="calculator-results">
                    <div id="results-container" style="display: none;">
                        <div class="result-card">
                            <h2 class="mb-6">Profit Breakdown</h2>
                            <div class="result-row">
                                <span class="result-label">Daily Revenue</span>
                                <span class="result-value" id="dailyRevenue">$0.00</span>
                            </div>
                            <div class="result-row">
                                <span class="result-label">Daily Power Cost</span>
                                <span class="result-value negative" id="dailyPowerCost">-$0.00</span>
                            </div>
                            <div class="result-row">
                                <span class="result-label">Daily Pool Fee</span>
                                <span class="result-value negative" id="dailyPoolFee">-$0.00</span>
                            </div>
                            <div class="result-row" style="border-bottom: none; padding-top: 8px;">
                                <span class="result-label" style="color: #0a0a0a;">Daily Profit</span>
                                <span class="result-value positive" id="dailyProfit" style="font-size: 20px;">$0.00</span>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div style="background-color: #eff6ff; padding: 24px; border-radius: 12px;">
                                <div style="font-size: 14px; color: #4a5565; margin-bottom: 8px;">Monthly</div>
                                <div style="font-size: 24px; color: #155DFC;" id="monthlyProfit">$0.00</div>
                            </div>
                            <div style="background-color: #dcfce7; padding: 24px; border-radius: 12px;">
                                <div style="font-size: 14px; color: #4a5565; margin-bottom: 8px;">Yearly</div>
                                <div style="font-size: 24px; color: #16a34a;" id="yearlyProfit">$0.00</div>
                            </div>
                        </div>
                        <div style="background: linear-gradient(to right, #2563eb, #4f46e5); padding: 24px; border-radius: 12px; color: white;">
                            <p style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Estimated ROI</p>
                            <div style="font-size: 32px;" id="roi">0%</div>
                            <p style="font-size: 12px; opacity: 0.75; margin-top: 4px;">Based on current market conditions</p>
                        </div>
                    </div>
                    <div id="placeholder" class="result-card" style="display: flex; align-items: center; justify-center; text-align: center; min-height: 400px; color: #4a5565;">
                        <div>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 16px; opacity: 0.3;">
                                <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="#4a5565" stroke-width="2"/>
                            </svg>
                            <p>Enter your parameters and click Calculate to see results</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // Add more page templates as needed
    calculators: `<div class="page-container bg-gray-50"><div class="page-header"><h1>Mining Calculators</h1><p class="page-description">Comprehensive suite of calculators to help you make informed decisions.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>Multiple calculator tools coming soon...</p><button class="btn-primary" onclick="navigateTo('calculations')" style="margin-top: 16px;">Try Profitability Calculator</button></div></div>`,

    documentation: `<div class="page-container bg-gray-50"><div class="page-header"><h1>Documentation</h1><p class="page-description">Everything you need to integrate and use Mining Forecast.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>API documentation and guides coming soon...</p></div></div>`,

    resources: `<div class="page-container bg-gray-50"><div class="page-header"><h1>Resources</h1><p class="page-description">Industry reports, whitepapers, and case studies.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>Resource library coming soon...</p></div></div>`,

    faq: `<div class="page-container bg-gray-50"><div class="page-header"><h1>FAQ & Support</h1><p class="page-description">Find answers to common questions about Mining Forecast.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>FAQ content coming soon...</p></div></div>`,

    newsletter: `<div class="page-container bg-gray-50"><div class="page-header"><h1>Newsletter</h1><p class="page-description">Subscribe to weekly mining insights and market updates.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>Newsletter signup coming soon...</p></div></div>`,

    community: `<div class="page-container bg-gray-50"><div class="page-header"><h1>Community Forum</h1><p class="page-description">Connect with fellow miners and share experiences.</p></div><div style="text-align: center; padding: 64px; color: #4a5565;"><p>Community forum coming soon...</p></div></div>`
};

// Navigation function
function navigateTo(page) {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Load page content
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = pages[page] || pages.home;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact form handler
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
    event.target.reset();
}

// Calculator function
function calculateProfitability() {
    const hashRate = parseFloat(document.getElementById('hastate').value) || 0;
    const powerCost = parseFloat(document.getElementById('power').value) || 0;
    const poolFee = parseFloat(document.getElementById('pool').value) || 0;

    // Mock calculations
    const dailyRevenue = hashRate * 0.00015 * 50000;
    const dailyPowerCost = hashRate * 24 * powerCost * 0.001;
    const dailyPoolFee = dailyRevenue * (poolFee / 100);
    const dailyProfit = dailyRevenue - dailyPowerCost - dailyPoolFee;
    const monthlyProfit = dailyProfit * 30;
    const yearlyProfit = dailyProfit * 365;
    const roi = ((yearlyProfit) / (hashRate * 100) * 100).toFixed(2);

    // Update results
    document.getElementById('dailyRevenue').textContent = '$' + dailyRevenue.toFixed(2);
    document.getElementById('dailyPowerCost').textContent = '-$' + dailyPowerCost.toFixed(2);
    document.getElementById('dailyPoolFee').textContent = '-$' + dailyPoolFee.toFixed(2);
    document.getElementById('dailyProfit').textContent = '$' + dailyProfit.toFixed(2);
    document.getElementById('monthlyProfit').textContent = '$' + monthlyProfit.toFixed(2);
    document.getElementById('yearlyProfit').textContent = '$' + yearlyProfit.toFixed(2);
    document.getElementById('roi').textContent = roi + '%';

    // Show results
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    navigateTo('home');
});
// ================= MAP ICON CONFIG ===================
const miningIcon = {
    url: "images/logo1.png",      // your logo icon
    scaledSize: new google.maps.Size(42, 42),
    anchor: new google.maps.Point(21, 21)
};
const marker = new google.maps.Marker({
    position: site.position,
    map,
    title: site.name,
    icon: miningIcon
});
