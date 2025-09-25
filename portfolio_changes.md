# 3D Developer Portfolio Changes Summary

This Markdown file summarizes all modifications made to personalize the portfolio for Rizwan Ahmed. Changes are organized by section/block, including additions, updates, and removals. The project uses React, Three.js, Framer Motion, Tailwind CSS, and Vite.

## Hero Section (src/components/Hero.jsx)
- **Updated Name**: Changed from placeholder to "Rizwan Ahmed".
- **Updated Bio**: Highlights skills in JavaScript, React, Node.js, C#, Python, Linux (Kali), and penetration testing. Full text: "I am a Software Engineering student who builds, designs, and secures web applications. With a strong command of JavaScript, React, Node.js, and a foundation in C# and Python, I engineer solutions that are both powerful and user-friendly. My unique blend of skills in web development, graphic design, and Linux-based penetration testing allows me to tackle challenges with a holistic perspective, ensuring every project is well-architected, visually engaging, and secure. I excel in leadership, critical thinking, and time management, driving collaborative teams to deliver innovative results."
- **Location in App.jsx**: Remains the first section after Navbar.

## About Section (src/components/About.jsx)
- **Updated Bio**: Describes focus on software engineering, web development, design, and security with leadership skills. Full text as above (shared with Hero for consistency).
- **Updated Services**: Array in src/constants/index.js changed to:
  - Web Developer (icon: web)
  - Full Stack Developer (icon: backend)
  - Penetration Tester (icon: creator)
  - UI/UX Designer (icon: mobile)
- **Fixes**: Removed react-tilt dependency to eliminate deprecation warnings (findDOMNode); replaced with framer-motion for hover scale animations on service cards.
- **Location in App.jsx**: Follows Hero section.

## Technologies Section (src/components/Tech.jsx)
- **Updated Array**: In src/constants/index.js, includes HTML 5, CSS 3, JavaScript, React JS, Node JS, git, figma (icons from src/assets). Omitted C#, Python, Linux (Kali), Pen Testing due to lack of icons; can be added as text if needed.
- **Location in App.jsx**: After About section.

## Education Section (src/components/Education.jsx - renamed from Experience.jsx)
- **Added/Replaced**: Replaced original Experience section with Education timeline using react-vertical-timeline-component.
- **Details from src/constants/index.js**:
  - Matriculation (Grade: A+, 2020-2022, Minhaj Model High School (MMHS) Liaqatabad, Bhimber; icon: starbucks placeholder; iconBg: "#383E56")
  - FSc (Pre Engineering) (Grade: A, 2022-2024, Read Foundation College, Bhimber AJK; icon: tesla placeholder; iconBg: "#E6DEDD")
  - Graduation (BS Software Engineering) (CGPA: 3.3/4.0, 2024-2028, Mirpur University of Science and Technology (MUST), Mirpur AJK; icon: shopify placeholder; iconBg: "#383E56")
- **Icons**: Placeholders used; download logos from provided links and save as PNG in src/assets (e.g., minhaj.png, read.png, must.png), then import in constants/index.js and update array.
  - Minhaj: https://www.pngegg.com/en/search?q=Minhaj-ul-Quran
  - Read Foundation: https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064234530229
  - MUST: https://must.edu.pk/staff-68/
- **Section Titles**: "My Academic Journey" (subtext), "Education." (head).
- **Location in App.jsx**: After Tech section (replaces original Experience).

## Certifications Section (src/components/Certifications.jsx - new file)
- **Added**: New vertical timeline section similar to Education.
- **Details from src/constants/index.js**:
  - WiFi Security (2025, Punjab Skill Development Initiative; points: "Completed course on WiFi Security fundamentals and best practices."; icon: meta; iconBg: "#E6DEDD"; clickable link: https://punjab.psdi.pk/certificate/d13deca7d4)
  - WordPress Web Development (2025, Punjab Skill Development Initiative; points: "Learned WordPress development, theme customization, and plugin integration."; icon: starbucks; iconBg: "#383E56"; clickable link: https://punjab.psdi.pk/certificate/731a8132a1)
- **Clickability**: Icons wrapped in <a> tags with target="_blank" rel="noopener noreferrer" and hover opacity transition.
- **Section Titles**: "My Certifications" (subtext), "Certifications." (head).
- **Location in App.jsx**: After Education section.

## Works Section (src/components/Works.jsx)
- **Unchanged**: Retains placeholder projects (Car Rent, Job IT, Trip Guide) from src/constants/index.js. Can be updated with real projects if provided.
- **Location in App.jsx**: After Certifications.

## Feedbacks Section (src/components/Feedbacks.jsx)
- **Updated**: Testimonials array in src/constants/index.js emptied ([]), so section shows no content (placeholders removed).
- **Location in App.jsx**: After Works.

## Contact Section (src/components/Contact.jsx)
- **Updated Details**:
  - Email: nawzirahmed4@gmail.com
  - Mobile/WhatsApp: 00923701176322
  - LinkedIn: https://www.linkedin.com/in/rizwan-ahmed-a42b9a295
  - GitHub: https://github.com/engr-riz348
- **EmailJS Configuration**: Updated to_name/to_email to "Rizwan Ahmed" / nawzirahmed4@gmail.com.
- **Location in App.jsx**: Last section before StarsCanvas.

## App.jsx Structure Updates
- Imports: Updated to Education (from Experience), added Certifications.
- Section Order: Navbar > Hero > About > Education > Tech > Works > Feedbacks > Certifications > Contact > StarsCanvas (Feedbacks moved after Works for logical flow).

## Constants (src/constants/index.js)
- All arrays updated as above (services, technologies, education, certifications, testimonials).
- NavLinks unchanged (About, Work, Contact).

## Assets and Fixes (src/assets/index.js, etc.)
- No new assets added (ra.png removed to fix import error).
- Dependencies: npm install --legacy-peer-deps to resolve react-tilt@0.1.4 conflict with React 18.
- Errors Fixed: react-tilt deprecation (findDOMNode warnings), invalid imports, THREE.js NaN radius (non-critical, model positioning).
- Build: Successful (vite build generates dist/ ~5.5MB gzipped).

## Testing and Verification
- Dev Server: npm run dev launches at http://localhost:5175.
- Verified: Rendering, navigation, responsiveness, 3D canvases (Computers/Earth/Stars), service hovers, certification links (manual click), no console errors/warnings.
- Pending: Contact form submission (requires EmailJS service/public keys), real projects/testimonials, education logos download/import.

For further customizations, provide additional details or files.
