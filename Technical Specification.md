Technical Specification
1. Project Overview
Project

K.K. Bone & Joint Care Website

Location

Rahon, Punjab, India

Project Type

Premium responsive medical clinic website

Initial Version

Frontend-only demo website

Primary Objective

Build a fast, responsive, accessible and visually polished clinic website that can later be connected to real appointment, WhatsApp, analytics and CMS systems.

2. Technology Stack
Core Technologies
HTML5

Use semantic HTML5 for page structure.

CSS3

Use modern CSS including:

CSS variables
Flexbox
CSS Grid
CSS transitions
CSS animations
Media queries
clamp() for responsive typography
min(), max() and calc() where useful
JavaScript

Use vanilla JavaScript for:

Mobile navigation
Scroll interactions
FAQ accordion
Gallery lightbox
Form validation
Modal interactions
Scroll reveal animations
Active navigation state

No framework is required for the initial version.

3. Recommended Project Structure
kk-bone-joint-care/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── components.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── faq.js
│   ├── gallery.js
│   └── form.js
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── doctor/
│   │   ├── clinic/
│   │   ├── services/
│   │   └── testimonials/
│   │
│   ├── icons/
│   └── fonts/
│
├── favicon/
│
├── README.md
│
└── robots.txt

For a small demo, JavaScript files may be combined into one main.js. The structure should remain easy to scale.

4. Browser Support

The website should support current versions of:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
Chrome Android
Safari iOS

Graceful degradation should be provided for unsupported features.

5. Responsive Breakpoints

Use mobile-first CSS.

Recommended breakpoints:

/* Mobile */
0px – 639px

/* Large Mobile / Small Tablet */
640px – 767px

/* Tablet */
768px – 1023px

/* Desktop */
1024px – 1279px

/* Large Desktop */
1280px+

Do not design separate websites for every device.

Use fluid layouts wherever possible.

6. Global Design Tokens

Define reusable CSS variables.

Example:

:root {
  --color-primary: #0f4c5c;
  --color-primary-dark: #083b48;
  --color-secondary: #2a9d8f;

  --color-background: #f8fafb;
  --color-surface: #ffffff;

  --color-text: #172026;
  --color-text-muted: #64748b;

  --color-border: #e2e8f0;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;

  --shadow-sm: 0 4px 15px rgba(0,0,0,.05);
  --shadow-md: 0 10px 30px rgba(0,0,0,.08);

  --container-width: 1200px;

  --transition-fast: 180ms ease;
  --transition-normal: 300ms ease;
}

Actual colours may be adjusted during visual implementation.

7. Container System

Use a central maximum-width container.

Example:

.container {
  width: min(100% - 32px, var(--container-width));
  margin-inline: auto;
}

Desktop horizontal spacing should increase appropriately.

Suggested:

Mobile: 16px
Tablet: 24px
Desktop: 32px
8. Global Typography

Use a modern sans-serif font.

Preferred:

Inter / Manrope / Plus Jakarta Sans

Typography should be fluid.

Example:

h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
}

h2 {
  font-size: clamp(2rem, 4vw, 3.25rem);
}

h3 {
  font-size: clamp(1.25rem, 2vw, 1.6rem);
}

body {
  font-size: 1rem;
  line-height: 1.7;
}

Avoid excessive font weights.

9. HTML Architecture

The page should use semantic sections.

Recommended structure:

<body>

<header>
  Navigation
</header>

<main>

<section id="hero">
</section>

<section id="about">
</section>

<section id="services">
</section>

<section id="conditions">
</section>

<section id="doctor">
</section>

<section id="why-us">
</section>

<section id="patient-journey">
</section>

<section id="testimonials">
</section>

<section id="gallery">
</section>

<section id="faq">
</section>

<section id="contact">
</section>

<section id="map">
</section>

</main>

<footer>
</footer>

</body>
10. Navigation Specification
Desktop

Navigation contains:

Logo
Clinic name
Home
About
Services
Doctor
Why Us
Gallery
Contact
Book Appointment CTA

Navigation should remain visible at the top.

Sticky Behaviour

On scroll:

Header becomes sticky
Background becomes opaque
Add subtle shadow/border
Reduce unnecessary vertical height
Mobile

Display:

Logo/clinic name
Hamburger icon

Menu should open using JavaScript.

Menu animation:

Fade
Slide down/up

Navigation closes when:

User selects a link
Close button is pressed
User clicks outside menu
Escape key is pressed
11. Hero Technical Specification
Components
Hero
├── Eyebrow
├── H1
├── Description
├── Primary CTA
├── Secondary CTA
├── Trust Indicators
└── Hero Image
CTA Links

Call:

<a href="tel:+91XXXXXXXXXX">

WhatsApp:

<a href="https://wa.me/91XXXXXXXXXX">

The actual number must be supplied by the clinic.

Hero Image

Requirements:

WebP/AVIF preferred
Responsive image
Proper alt
Lazy loading should NOT be used for the primary hero image if it is above the fold

Use:

<img
  src="..."
  alt="..."
  width="..."
  height="..."
  fetchpriority="high"
/>
12. About Section

Use a responsive two-column layout.

Desktop:

Image | Content

Mobile:

Image
Content

Image should use:

object-fit: cover;

with a controlled aspect ratio.

13. Services Component

Services should be data-driven where practical.

Example JavaScript structure:

const services = [
  {
    title: "Knee Pain",
    description: "...",
    icon: "knee"
  },
  {
    title: "Joint Pain",
    description: "...",
    icon: "joint"
  }
];

This makes adding or removing services easier.

Each card contains:

Icon
Title
Description
Optional CTA

Cards should have:

Hover state
Focus state
Consistent height where appropriate
14. Doctor Profile Component

Structure:

Doctor Profile
├── Image
├── Name
├── Qualification
├── Specialization
├── Experience
└── Biography

Doctor-specific information must come from verified clinic data.

Do not hardcode invented qualifications or experience.

15. Why Choose Us Component

Use a responsive grid.

Desktop:

4 cards

Tablet:

2 × 2

Mobile:

1 column

Each item:

Icon
Heading
Description
16. Patient Journey Component

Create a visual step sequence.

01 → 02 → 03 → 04

Mobile:

01
↓
02
↓
03
↓
04

Use CSS pseudo-elements or borders for the connecting line.

Do not rely only on colour to communicate sequence.

17. Testimonials Component

Testimonials should be static in the demo.

Recommended markup:

<article class="testimonial-card">
  <div class="rating"></div>

  <blockquote>
    ...
  </blockquote>

  <footer>
    <span class="patient-name"></span>
  </footer>
</article>

Do not fabricate real reviews.

Demo reviews should be clearly identified as sample content.

18. Gallery Component

Use CSS Grid.

Example:

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

Images should use:

aspect-ratio: 4 / 3;
object-fit: cover;
Lightbox

When image is clicked:

Open overlay.
Display enlarged image.
Show close button.
Show previous/next controls.
Lock background scrolling.
Allow Escape key to close.

Keyboard support:

Escape → Close
Arrow Left → Previous
Arrow Right → Next
19. FAQ Component

FAQ uses accessible accordion behaviour.

Each question:

<button
  aria-expanded="false"
  aria-controls="faq-answer-1">

Answer:

<div
  id="faq-answer-1"
  role="region">

JavaScript should:

Open selected answer
Close others if using single-open mode
Update aria-expanded
Animate height
20. Appointment Form
Fields
Full Name
Phone Number
Preferred Date
Preferred Time
Reason for Visit
Message
Validation
Full Name

Required.

Phone

Required.

Validate Indian phone format appropriately.

Date

Required.

Prevent selecting dates in the past.

Time

Optional or required depending on clinic workflow.

Reason

Required.

Message

Optional.

21. Form Security

The frontend must not trust client-side validation alone in production.

When a backend is added:

Validate all inputs server-side
Sanitize user input
Rate-limit submissions
Use CSRF protection where applicable
Do not expose API keys in frontend JavaScript
Do not store sensitive medical information unnecessarily

For the demo, no real patient data should be stored.

22. Demo Form Submission

The demo should simulate successful submission.

Flow:

Submit
↓
Validate
↓
Show loading state
↓
Show success modal

Success message:

Appointment request submitted successfully.

Additional demo label:

Demo mode: This form is not connected to the clinic.

The website must never falsely imply that a real appointment was booked.

23. Contact Buttons
Phone

Use:

href="tel:"
WhatsApp

Use:

href="https://wa.me/"

Production WhatsApp links must use the clinic's verified number.

Email

Use:

href="mailto:"

Only if the clinic provides an official email.

Directions

Use a verified Google Maps URL.

24. Google Maps Integration

The production site can use either:

Option A

Google Maps embed iframe.

Option B

A static location card with:

Open in Google Maps

Option B may be preferable for performance.

Do not embed an incorrect location.

25. Mobile Sticky CTA

At widths below approximately 768px:

┌─────────┬──────────┬────────────┐
│  Call   │ WhatsApp │ Appointment│
└─────────┴──────────┴────────────┘

Position:

position: fixed;
bottom: 0;

Requirements:

High contrast
Safe-area padding for iOS
Does not cover important content
Accessible labels
Minimum touch target around 44px

Add bottom page padding so content is not hidden behind the bar.

26. Animation System

Use Intersection Observer for scroll-triggered animations.

Example:

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

Animate:

Hero elements
Section headings
Cards
Images

Do not animate every element.

27. Reduced Motion

Respect:

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

This is important for accessibility.

28. Image Optimization

Preferred formats:

AVIF
WebP
JPEG/PNG fallback

Use responsive images where appropriate:

<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="..." />
</picture>

Every image must specify:

Width
Height
Alt text

This reduces layout shift.

29. Image Loading Strategy

Above-the-fold:

Hero image → eager/high priority

Below-the-fold:

Gallery → lazy
Doctor → lazy if below fold
Testimonials → lazy if image-based

Do not lazy-load everything blindly.

30. Accessibility

Target:

WCAG 2.2 AA principles

Requirements:

Semantic HTML
Keyboard navigation
Visible focus states
Proper labels
ARIA only where necessary
Accessible modals
Accessible accordion
Sufficient contrast
Meaningful alt text
Reduced-motion support

Do not use:

<div onclick="">

when a semantic button/link is appropriate.

31. SEO Technical Specification
HTML Metadata

Include:

<title>
<meta name="description">
<meta name="viewport">
<link rel="canonical">
Open Graph

Include:

og:title
og:description
og:image
og:url
og:type
Structured Data

Use appropriate schema only after verifying business details.

Potential schema:

MedicalBusiness
Physician
LocalBusiness

Do not include unsupported claims.

32. Local SEO

The website should naturally include relevant location information:

Rahon
Punjab
Nearby service area, if appropriate

Use consistent:

Name
Address
Phone

across the website and external business listings.

Avoid keyword stuffing.

33. URL Structure

Initial version:

/

Future expansion:

/about
/services
/services/knee-pain
/services/joint-pain
/doctor
/contact
34. Favicon & Branding

Include:

favicon.ico
favicon.svg
apple-touch-icon.png

Use the official clinic logo when supplied.

If no logo exists for the demo, create a temporary text-based logo that is clearly replaceable.

35. Loading States

Interactive components should provide visual feedback.

Example:

Appointment form:

Request Appointment
        ↓
Submitting...
        ↓
Request Received

Buttons should not appear frozen.

36. Error Handling

Frontend errors should be understandable.

Examples:

Please enter your name.

Please enter a valid phone number.

Please select a preferred date.

Something went wrong. Please try again.

Avoid technical messages such as:

ERR_NETWORK_500

because patients have enough problems without debugging JavaScript.

37. Security Headers for Production

When deployed, configure:

Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security

Exact CSP configuration should reflect actual third-party services being used.

38. Third-Party Dependencies

Keep dependencies minimal.

Potential dependencies:

Google Fonts
Lightweight icon library

Avoid unnecessary:

UI frameworks
Large animation libraries
Multiple icon libraries
Heavy sliders

Every dependency should have a clear reason to exist.

39. Performance Targets

Target:

Lighthouse
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

Targets are goals rather than guarantees and should be tested on the production build.

Performance Requirements
Minimize JavaScript
Optimize images
Avoid render-blocking assets
Lazy-load below-fold media
Use appropriate font loading
Avoid unnecessary third-party scripts
Prevent layout shift
40. Core Web Vitals

Target:

LCP

Under approximately 2.5 seconds

INP

Under approximately 200 ms

CLS

Under approximately 0.1

Measure on realistic mobile conditions rather than only a powerful desktop.

41. Deployment

The static website can be deployed using:

Vercel
Netlify
Cloudflare Pages
GitHub Pages

The final hosting platform can be selected later.

Use HTTPS.

42. Environment Configuration

For the frontend demo, no secret environment variables should be required.

When backend functionality is added:

API_BASE_URL
GOOGLE_MAPS_KEY
ANALYTICS_ID

must be managed through environment configuration.

Never expose private API keys in client-side JavaScript.

43. Content Management
Version 1

Content is stored directly in HTML/JS.

Future Version

Move editable information into a CMS.

Potential editable content:

Clinic name
Doctor details
Services
Timings
Address
Phone
Testimonials
Gallery
FAQs
44. Analytics Integration

Production version may include:

Google Analytics
Google Search Console
Conversion tracking

Track:

appointment_click
phone_click
whatsapp_click
directions_click
appointment_form_submit
gallery_open

Do not track sensitive medical information unnecessarily.

45. Privacy

The website should have:

Privacy Policy
Medical Disclaimer

If the production site collects patient information, privacy and data-handling requirements should be reviewed before launch.

46. Component Naming Convention

Use predictable class names.

Example:

.header
.header__logo
.header__nav
.header__cta

.hero
.hero__content
.hero__title
.hero__actions
.hero__media

.service-card
.service-card__icon
.service-card__title
.service-card__description

BEM-style naming is recommended.

47. JavaScript Architecture

Use modules where practical.

Example:

// main.js

import { initNavigation } from "./navigation.js";
import { initFAQ } from "./faq.js";
import { initGallery } from "./gallery.js";
import { initForm } from "./form.js";

initNavigation();
initFAQ();
initGallery();
initForm();

If modules are unnecessary for the deployment environment, a single well-organized JavaScript file is acceptable.

48. State Management

No global state management library is required.

Component state can be handled with:

data-* attributes
classes
DOM state
local variables

Examples:

menuOpen
faqOpen
galleryIndex
formSubmitting
49. Accessibility Testing

Before launch, test:

Keyboard-only navigation
Tab order
Escape key
Screen-reader labels
Focus visibility
Form errors
Modal focus trapping
Mobile navigation
Reduced-motion setting
50. Cross-Device Testing

Test at minimum:

Desktop
1440 × 900
1280 × 800
Tablet
768 × 1024
Mobile
390 × 844
375 × 812
360 × 800

Also test landscape orientation.

51. Functional Acceptance Criteria
Navigation

Desktop navigation works

Mobile menu opens

Mobile menu closes

Navigation links scroll correctly

Sticky header works

Hero

Correct clinic name

CTA buttons work

Hero image loads correctly

Mobile layout works

Services

All approved services appear

Cards are responsive

Hover/focus states work

Doctor

Verified information displayed

Image loads correctly

Gallery

Gallery grid works

Images open in lightbox

Next/previous works

Escape closes lightbox

FAQ

Accordion works

Keyboard accessible

ARIA state updates correctly

Appointment

Required fields validated

Phone validation works

Past dates prevented

Success state appears

Demo warning displayed

Contact

Call button works

WhatsApp button works

Directions link works

Address displayed correctly

52. Definition of Done

The project is considered technically complete when:

All approved sections are implemented.
The website works on mobile, tablet and desktop.
Navigation and interactive components work.
Appointment form validation works.
All CTA links are functional.
Images are optimized.
Accessibility basics are implemented.
SEO metadata is implemented.
No console errors remain.
No horizontal overflow exists.
Layout does not visibly break at common screen sizes.
Placeholder information is clearly identifiable.
No fabricated medical claims or credentials are present.
Production deployment can be completed without major code restructuring.
53. Future Backend Architecture

When moving from demo to production:

Frontend
   ↓
API
   ↓
Backend
   ↓
Database
   ↓
Appointment Management

Potential production flow:

Patient
   ↓
Website
   ↓
Appointment Form
   ↓
Backend API
   ↓
Validation
   ↓
Database
   ↓
Clinic Notification
   ↓
Patient Confirmation

Possible future integrations:

WhatsApp
Email
SMS
Google Calendar
Appointment dashboard
CRM
CMS
54. Recommended Development Phases
Phase 1 — Foundation
Project setup
Global styles
Typography
Design tokens
Header
Footer
Responsive container
Phase 2 — Core Content
Hero
About
Services
Doctor
Why Choose Us
Patient Journey
Phase 3 — Trust & Conversion
Testimonials
Gallery
FAQ
Contact
Appointment form
Phase 4 — Interaction
Mobile navigation
Scroll animations
FAQ accordion
Gallery lightbox
Form validation
Sticky mobile CTA
Phase 5 — Optimization
Image optimization
SEO
Accessibility
Performance
Cross-browser testing
Phase 6 — Client Customization

Replace:

Placeholder doctor information
Placeholder phone number
Placeholder address
Placeholder timings
Demo testimonials
Demo images

with verified clinic information.

55. Final Technical Principle

The implementation should follow this hierarchy:

Performance → Accessibility → Usability → Trust → Visual Polish → Animation

Visual effects should never compromise usability or performance.

The final website should be:

Fast + Responsive + Accessible + Professional + Easy to Maintain + Ready for Production

The first release should remain frontend-only and simple enough to modify quickly after the clinic reviews the demo.