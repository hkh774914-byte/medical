AI AGENT RULES
K.K. Bone & Joint Care Website
Agent Environment

Antigravity

Design Generation

Google Stitch MCP

Target Implementation

HTML5 + CSS3 + Vanilla JavaScript

Agent Role

The AI agent is responsible for translating the approved PRD, Technical Specification and Design System into a polished, responsive, accessible and production-ready frontend website.

The agent must treat the following documents as the source of truth:

Product Requirements Document
Technical Specification
UI/UX Design Specification
Design System
These AI Agent Rules

If any generated design or implementation conflicts with these rules, these rules take priority unless the user explicitly changes the requirement.

1. CORE AGENT PRINCIPLES

The agent must follow these principles throughout the project:

Rule 1 — Do Not Invent

Never invent:

Doctor qualifications
Doctor experience
Medical certifications
Awards
Patient statistics
Patient reviews
Clinic timings
Phone numbers
Email addresses
Clinic address
Medical outcomes
Success rates
Hospital affiliations

Use placeholders when information is unavailable.

Rule 2 — Preserve the Design System

Do not randomly introduce:

New colours
New fonts
New border-radius values
New shadows
New button styles
New icon styles

Reuse existing design tokens and components.

Rule 3 — Design Before Code

When the task involves UI creation or redesign:

First establish the visual direction/design through Google Stitch MCP, then implement it.

Do not immediately start coding a UI based purely on assumptions.

Rule 4 — Mobile Is Not an Afterthought

Design and implementation must work from mobile upward.

The website must not simply be a shrunk desktop layout.

Rule 5 — Keep It Realistic

All generated UI must be realistically implementable with:

HTML + CSS + JavaScript

Do not introduce unnecessarily complex technology.

2. SOURCE-OF-TRUTH HIERARCHY

When requirements conflict, use this priority:

User's latest explicit instruction
        ↓
AI Agent Rules
        ↓
Design System
        ↓
UI/UX Design Specification
        ↓
Technical Specification
        ↓
PRD

A newer explicit user instruction overrides previous project requirements.

3. USER INTENT

Before making major changes, identify:

What the user wants changed
Which existing component is affected
Whether the change affects desktop
Whether it affects mobile
Whether the design system needs updating

Do not make unrelated modifications.

4. NO UNREQUESTED FEATURES

Do not add features merely because they seem useful.

Do not introduce:

Login
Registration
Patient dashboard
Admin dashboard
Online payments
Prescription management
Medical records
Chatbot
Complex booking system
Backend
Database

unless explicitly requested.

The initial project is a frontend clinic website/demo.

5. MEDICAL SAFETY RULES

This is a healthcare website.

The agent must never create content that:

Diagnoses visitors
Guarantees treatment results
Guarantees recovery
Encourages self-treatment
Replaces professional medical consultation
Makes unsupported medical claims

Avoid phrases such as:

100% Cure
Guaranteed Recovery
Permanent Solution
Best Doctor in Punjab
No. 1 Clinic
Guaranteed Results

unless explicitly verified and legally appropriate.

6. CONTENT PLACEHOLDER RULE

When information is unavailable, use structured placeholders.

Examples:

[DOCTOR NAME]
[VERIFIED QUALIFICATION]
[VERIFIED SPECIALIZATION]
[CLINIC PHONE]
[CLINIC ADDRESS]
[CLINIC TIMINGS]
[OFFICIAL WHATSAPP]

Do not replace missing data with random realistic-looking information.

7. DEMO CONTENT RULE

If sample content is necessary:

Clearly label it.

Example:

Sample testimonial — replace with verified patient feedback.

Do not allow demo content to look like verified real-world information.

8. VISUAL QUALITY STANDARD

The final UI should feel:

Premium + Calm + Modern + Trustworthy + Human

It must NOT feel:

Generic
Template-like
Overly corporate
Overly futuristic
Over-designed
AI-generated
Visually noisy
9. COLOUR RULES

Use the approved design-system colours.

Primary:

Deep healthcare blue/teal

Secondary:

Healthcare green/teal

Neutrals:

Warm off-white + white + charcoal

Do not introduce:

Neon colours
Random purple
Bright red as a decorative colour
Excessive gradients

Red should primarily represent errors or warnings.

10. TYPOGRAPHY RULES

Use:

Manrope

with a suitable system fallback.

Typography hierarchy must remain consistent.

Do not:

Use multiple unrelated fonts
Use decorative fonts
Use excessive uppercase
Make every heading extremely bold
Use tiny body text
11. SPACING RULES

Use the approved spacing scale.

Preferred:

4
8
12
16
20
24
32
40
48
56
64
80
96
120

Avoid arbitrary values unless there is a clear layout reason.

12. GRID RULES

Desktop:

12-column grid

Tablet:

8-column grid

Mobile:

4-column grid

Maintain consistent alignment between sections.

13. CONTAINER RULE

Primary content should remain within approximately:

1200px

Maximum large-screen width:

1280px

Do not create excessively wide text blocks.

14. SECTION DESIGN RULE

Each section must have:

Clear purpose
Visual hierarchy
Appropriate spacing
Consistent heading treatment
Clear relationship to surrounding sections

Do not create sections merely to fill the page.

15. HERO RULES

The hero must communicate within the first viewport:

Clinic name
Bone/joint speciality
Rahon location
Primary value proposition
Appointment CTA
Contact CTA

The hero should not be overloaded with information.

16. CTA RULES

Primary CTA:

Book an Appointment

Secondary:

Call Now

Supporting:

WhatsApp

Get Directions

Primary CTA must have the strongest visual hierarchy.

Do not create five equally prominent CTA buttons.

17. NAVIGATION RULES

Desktop navigation must remain clean.

Recommended:

Logo
Home
About
Services
Doctor
Why Us
Gallery
Contact
Book Appointment

Mobile navigation must include:

Hamburger
Clear menu
Appointment CTA

The navigation should never occupy excessive screen space.

18. MOBILE STICKY CTA

On mobile, maintain:

Call | WhatsApp | Appointment

This bar must:

Stay accessible
Not cover content
Use large touch targets
Respect safe-area spacing
Have strong visual separation
19. COMPONENT REUSE

Before creating a new component, determine whether an existing component can be reused.

Reuse:

Button
Card
Section heading
Input
Badge
Modal
Icon container

Do not duplicate nearly identical components.

20. COMPONENT CONSISTENCY

If two components perform the same function, they should visually behave the same.

For example:

All primary buttons must share:

Height
Radius
Typography
Colour
Hover state
Focus state
21. CARD RULES

Cards should not become the default solution for everything.

Use cards when they improve:

Grouping
Scanning
Hierarchy

Do not wrap every paragraph in a card.

22. SHADOW RULES

Use shadows sparingly.

Prefer:

Border + spacing

over:

Large shadow + floating effect

No dramatic floating-card effects unless explicitly required.

23. BORDER RULES

Default:

1px subtle border

Hover:

Subtle brand tint

Focus:

Visible accessible focus ring

Do not use thick borders for standard cards.

24. BORDER-RADIUS RULES

Use:

8px
12px
16px
24px
32px

depending on component size.

Do not randomly use:

7px
13px
19px
27px

unless technically necessary.

25. IMAGE RULES

Images must feel:

Professional
Natural
Bright
Human
Healthcare appropriate

Avoid:

Graphic surgery images
Disturbing injury photos
Obviously fake AI doctors
Overly staged medical scenes
26. IMAGE PLACEHOLDER RULE

If actual clinic imagery is unavailable:

Use appropriate placeholders that can easily be replaced.

Never imply a stock image is the actual clinic, doctor or staff.

27. IMAGE OPTIMIZATION

Use:

AVIF where possible
WebP as primary fallback
JPEG/PNG when required

Images should have:

Width
Height
Alt text
Appropriate loading behaviour
28. ACCESSIBILITY RULES

Target:

WCAG 2.2 AA principles

Every interactive element must support:

Keyboard interaction
Visible focus
Accessible name
Appropriate semantic HTML

Do not rely only on colour.

29. TOUCH TARGET RULE

Minimum:

44 × 44px

Preferred:

48 × 48px

This applies especially to:

Buttons
Menu
FAQ controls
Gallery controls
Mobile CTA
30. FORM RULES

Forms must:

Have visible labels
Validate input
Provide understandable errors
Show loading state
Show success state
Prevent accidental duplicate submissions

Do not request unnecessary medical information.

31. FORM DEMO RULE

The initial website has no real backend.

Therefore:

The appointment form must be explicitly treated as a demo interaction.

It must not falsely claim:

"Your appointment has been booked."

Instead:

"Your appointment request has been received."

and clearly indicate that the demo is not connected to the clinic.

32. DATE VALIDATION

Appointment date fields must not allow dates in the past.

Use the user's current date dynamically rather than hardcoding a date.

33. PHONE LINKS

Phone CTAs should use:

tel:

Do not hardcode a fake phone number.

Use:

[CLINIC PHONE]

until verified information is supplied.

34. WHATSAPP LINKS

Use the official clinic WhatsApp number when supplied.

Do not invent a number.

35. MAP RULE

Only display a map after the clinic's location is verified.

Never randomly place the clinic pin in Rahon simply because the project says "Rahon."

36. GOOGLE STITCH RULES

When working through Google Stitch MCP:

Before Generation

Review:

PRD
Technical Specification
UI/UX Specification
Design System
Current user instruction
During Generation

Maintain:

Design tokens
Component consistency
Responsive layouts
Visual hierarchy
After Generation

Inspect for:

Layout issues
Missing components
Inconsistent spacing
Wrong colours
Typography inconsistency
Mobile problems
Fake information
37. STITCH ITERATION RULE

Do not regenerate the entire website for every small change.

If the user requests:

"Change the service cards"

modify the service-card system rather than redesigning unrelated sections.

Preserve approved components.

38. DESIGN LOCK RULE

Once a visual decision has been approved, treat it as locked unless the user requests a change.

Examples:

Colour palette
Typography
Header style
Card style
Hero composition
CTA design

Do not silently redesign approved elements.

39. IMPLEMENTATION RULE

After Stitch design approval:

Translate the design faithfully into code.

Do not simplify the design unnecessarily.

Do not invent additional visual elements during coding.

40. PIXEL / VISUAL FIDELITY

Implementation should closely match the approved design in:

Spacing
Typography
Colour
Component dimensions
Alignment
Border radius
Image cropping
CTA positioning

Small responsive adjustments are allowed where necessary.

41. RESPONSIVE RULE

Always test:

Mobile

320px–430px

Tablet

768px–1024px

Desktop

1280px+

The design must not break between defined breakpoints.

42. NO HORIZONTAL SCROLL

The website must never create unintended horizontal scrolling.

Check:

Images
Cards
Tables
Navigation
Buttons
Forms
Modals
43. ANIMATION RULES

Animations must support hierarchy.

Use:

Fade
Slight slide
Small scale
Subtle hover movement

Avoid:

Large rotations
Excessive parallax
Constant floating objects
Long animations
Distracting effects
44. ANIMATION PERFORMANCE

Prefer:

transform
opacity

for animations.

Avoid animating expensive layout properties unnecessarily.

45. REDUCED MOTION

Always support:

prefers-reduced-motion: reduce

When enabled:

Remove unnecessary movement
Reduce animation durations
Disable decorative animation
46. JAVASCRIPT RULES

Use JavaScript only when required.

JavaScript should handle:

Navigation
FAQ
Gallery
Form
Modal
Scroll interactions

Do not use JavaScript for layout that CSS can handle.

47. DEPENDENCY RULE

Do not install a library just because it provides a feature that can easily be implemented with native browser APIs.

Prefer:

HTML + CSS + Vanilla JS

unless the user explicitly requests a framework/library.

48. CONSOLE CLEANLINESS

Before considering the implementation complete:

No JavaScript errors
No broken imports
No missing assets
No failed network requests caused by the implementation
No unnecessary warnings
49. SEO RULES

Include:

Semantic HTML
Page title
Meta description
Canonical URL
Open Graph metadata
Appropriate structured data

Do not use keyword stuffing.

50. LOCAL SEO RULES

Use location naturally:

Rahon, Punjab

Do not repeatedly insert location keywords unnaturally.

51. MEDICAL DISCLAIMER

The website should contain an appropriate medical disclaimer.

Suggested:

The information provided on this website is for general informational purposes and is not a substitute for professional medical consultation.

Do not make the disclaimer visually dominant.

52. PRIVACY RULES

If the website collects user information:

Explain what is collected
Avoid unnecessary personal information
Do not store sensitive medical information in the frontend
Add appropriate privacy documentation for production
53. PERFORMANCE RULES

Prioritize:

Fast initial rendering
Optimized images
Minimal JavaScript
Minimal dependencies
Lazy-loading below-fold images
Stable layouts

Target:

90+ Lighthouse Performance

where reasonably achievable.

54. CORE WEB VITALS

Aim for:

LCP < 2.5s
INP < 200ms
CLS < 0.1

Do not sacrifice usability solely to achieve numerical scores.

55. CODE ORGANIZATION

Keep:

HTML structure clean
CSS modular
JavaScript organized
Components reusable
Assets logically grouped

Avoid giant files when they become difficult to maintain.

56. NAMING CONVENTION

Use predictable class names.

Example:

.header
.header__logo
.header__nav

.hero
.hero__content
.hero__title
.hero__actions

.service-card
.service-card__icon
.service-card__title
.service-card__description

Avoid meaningless names such as:

.box1
.div-new
.test-final2
.green-card-final-final

The last one is how projects become archaeological sites.

57. FILE ORGANIZATION

Recommended:

/
├── index.html
├── css/
├── js/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── README.md
58. ASSET RULES

Every asset should have a clear purpose.

Remove:

Duplicate images
Unused icons
Unused fonts
Temporary assets after replacement

Do not leave random generated assets throughout the project.

59. ACCESSIBLE IMAGES

Every meaningful image needs descriptive alt text.

Decorative images should use:

alt=""

when appropriate.

Do not use:

alt="image"
60. SEO IMAGE RULE

Use descriptive filenames.

Prefer:

doctor-consultation.webp
clinic-reception.webp
knee-care.webp

instead of:

IMG_1234.webp
image-final-2.webp
61. ERROR HANDLING

Every interactive component must have predictable failure behaviour.

Examples:

Form

Error → Show field-level message.

Gallery

Missing image → Graceful fallback.

Map

Unavailable → Show address and directions CTA.

JavaScript failure

Core content should remain readable.

62. PROGRESSIVE ENHANCEMENT

The website's essential information should remain accessible even if JavaScript fails.

Core content:

Clinic information
Services
Doctor
Contact
Address

should be available in semantic HTML.

63. NO DARK PATTERNS

Never use:

Fake countdowns
Fake scarcity
Hidden cancellation
Manipulative popups
Misleading CTAs
Forced subscriptions
Fake notifications

Healthcare websites should reduce anxiety, not manufacture it.

64. POPUP RULE

Do not create aggressive popups.

A popup may be used for:

Gallery
Appointment confirmation
Necessary information

Do not display a full-screen popup immediately on page load.

65. COOKIE / CONSENT RULE

Do not create a cookie banner unless actual cookies or tracking require it.

Do not add fake consent UI for a static demo.

66. SOCIAL MEDIA RULE

Only display social links that are provided by the clinic.

Do not invent:

Instagram URL
Facebook URL
YouTube channel
Other social profiles
67. CONTACT INFORMATION RULE

All contact information must be treated as business-critical.

Before production:

Verify:

Clinic name
Phone
WhatsApp
Address
Timings
Email
Map location
68. CONTENT EDITABILITY

Keep business-specific information easy to replace.

Prefer centralized data/configuration where appropriate.

Example:

const clinic = {
  name: "K.K. Bone & Joint Care",
  location: "[LOCATION]",
  phone: "[PHONE]",
  whatsapp: "[WHATSAPP]",
  address: "[ADDRESS]",
  timings: "[TIMINGS]"
};

This makes client handoff easier.

69. DESIGN SYSTEM ENFORCEMENT

Before creating a new visual style, check whether the design system already contains the required token/component.

If yes:

Reuse it.

If no:

Create a new token/component only when genuinely necessary and keep it compatible with the existing system.

70. NO RANDOM REDESIGN

When fixing a bug:

Do not redesign the entire page.

When fixing mobile:

Do not change desktop unless required.

When changing one component:

Do not alter unrelated components.

71. USER REQUEST PRIORITY

When the user gives a specific design instruction such as:

"Make the hero more premium"

interpret it within the established design system.

Do not:

Change the whole colour palette
Replace typography
Add unrelated sections
Add random animations

Make the smallest effective change.

72. CLIENT PRESENTATION STANDARD

Because the website is intended as a clinic proposal/demo:

The result should look finished enough for presentation.

Before showing the demo:

Remove obvious development artefacts
Remove lorem ipsum
Remove broken images
Remove placeholder-looking UI where possible
Clearly mark information that must be replaced
Ensure all navigation works
73. DEMO DATA RULE

The demo may use:

Sample service descriptions
Sample placeholder imagery
Sample placeholder doctor information
Sample testimonial placeholders

But these must be clearly replaceable.

Never make fictional information appear verified.

74. QUALITY CONTROL PROCESS

Before declaring a task complete:

Step 1

Review requirements.

Step 2

Inspect generated design.

Step 3

Check desktop.

Step 4

Check tablet.

Step 5

Check mobile.

Step 6

Check interactive states.

Step 7

Check accessibility.

Step 8

Check performance.

Step 9

Check content accuracy.

Step 10

Remove unnecessary complexity.

75. FINAL QA CHECKLIST
Design

Brand palette consistent

Typography consistent

Spacing consistent

Cards consistent

Buttons consistent

Images professionally presented

UX

Hero immediately understandable

Appointment CTA visible

Contact information easy to find

Services easy to scan

Doctor information clear

Mobile CTA available

Functionality

Navigation works

Mobile menu works

FAQ works

Gallery works

Form validation works

Success state works

Phone CTA works

WhatsApp CTA works

Directions CTA works

Responsive

320px

360px

375px

390px

430px

768px

1024px

1280px

1440px

Accessibility

Keyboard navigation

Focus states

Alt text

Form labels

Contrast

Reduced motion

Technical

No console errors

No broken links

No missing assets

No horizontal scrolling

Optimized images

SEO metadata

Semantic HTML

76. AGENT BEHAVIOUR WHEN REQUIREMENTS ARE UNCLEAR

When an ambiguity does not materially affect implementation:

Make the safest design-system-consistent decision and continue.

When an ambiguity materially affects:

Medical accuracy
Real clinic information
User data
Business functionality
Backend behaviour
Production deployment

Do not invent the answer.

Use a placeholder or request the missing information when necessary.

77. AGENT BEHAVIOUR WHEN DESIGN LOOKS TOO GENERIC

If the generated design resembles a generic medical template:

Improve it through:

Better typography
More intentional whitespace
Stronger editorial layouts
Better image composition
More sophisticated section rhythm
More restrained component styling
Better hierarchy

Do NOT solve genericness by adding random gradients or animations.

78. AGENT BEHAVIOUR WHEN DESIGN LOOKS TOO EMPTY

Do not fill empty space with random components.

Instead improve:

Typography scale
Image scale
Section spacing
Layout composition
Supporting content
Visual hierarchy

Whitespace is intentional when used correctly.

79. AGENT BEHAVIOUR WHEN DESIGN LOOKS TOO BUSY

Remove:

Unnecessary cards
Excessive icons
Decorative shapes
Repeated CTAs
Excessive gradients
Excessive animations

Prioritize the user's next useful action.

80. AGENT BEHAVIOUR FOR FUTURE CHANGES

When a new requirement is introduced:

Identify affected component.
Check design-system compatibility.
Modify the smallest relevant area.
Preserve unrelated approved work.
Re-test responsive behaviour.
Re-test accessibility.
Re-check visual consistency.
81. MASTER AGENT INSTRUCTION

Use this as the highest-level instruction when configuring the Antigravity coding/design agent:

Build K.K. Bone & Joint Care as a premium, trustworthy, modern and patient-friendly healthcare website for a bone and joint care clinic in Rahon, Punjab.

Treat the PRD, Technical Specification, UI/UX Design Specification and Design System as the project's source of truth.

Use Google Stitch MCP for UI/design generation and translate the approved design faithfully into HTML5, CSS3 and Vanilla JavaScript.

Prioritize mobile-first responsive design, accessibility, performance, semantic HTML, reusable components and a consistent design system.

Use deep healthcare blue/teal, restrained healthcare green, warm off-white backgrounds, white surfaces and dark charcoal typography.

Use Manrope or the approved typography system.

Maintain generous whitespace, strong editorial typography, subtle borders, restrained shadows, rounded imagery and clean healthcare photography.

Make Book an Appointment the primary conversion action, with Call, WhatsApp and Get Directions as supporting actions.

Include a mobile sticky action bar for Call, WhatsApp and Appointment.

Never invent doctor qualifications, experience, awards, reviews, patient statistics, clinic contact information, timings, addresses or medical claims.

When information is unavailable, use clearly identifiable placeholders.

Do not create fake testimonials or fake ratings.

Do not create medical claims, diagnoses, guaranteed outcomes or misleading healthcare statements.

Do not add unrequested backend functionality, authentication, dashboards, payments, medical records or patient management systems.

Keep the implementation realistic for HTML, CSS and JavaScript.

Avoid excessive gradients, glassmorphism, animations, decorative anatomy graphics, giant icons and generic template patterns.

Use animation only where it improves hierarchy or feedback, and respect reduced-motion preferences.

Preserve approved design decisions unless the user explicitly requests changes.

When modifying a component, do not unnecessarily redesign unrelated sections.

Before considering the project complete, test desktop, tablet and mobile layouts, navigation, forms, gallery, FAQ, CTA links, accessibility, performance and console errors.

The final result should look polished enough to present directly to the clinic owner as a professional website proposal.

82. DEFINITION OF AGENT SUCCESS

The agent has succeeded when the final product satisfies all five dimensions:

1. Visual

It looks premium and professionally designed.

2. UX

A patient can understand the clinic and contact it without confusion.

3. Technical

The website is responsive, fast, maintainable and free of obvious implementation errors.

4. Trust

No fabricated medical or business information is presented as fact.

5. Conversion

Visitors can easily:

Call → WhatsApp → Book → Get Directions

FINAL AGENT RULE

Do not optimize for making the website look impressive to the AI. Optimize for making it useful, trustworthy and impressive to the patient and the clinic owner.

The design should demonstrate restraint.

The best implementation is not the one with the most effects.

It is the one where every visual and technical decision has a reason.

END OF AI AGENT RULES