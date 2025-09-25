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
