K.K. BONE & JOINT CARE
Digital Design System

Design Platform: Google Stitch MCP
Implementation Target: HTML5 + CSS3 + Vanilla JavaScript
Product: Premium Bone & Joint Care Clinic Website
Location: Rahon, Punjab, India

1. Design System Purpose

This design system defines the visual language, reusable UI components, design tokens, interaction patterns and responsive rules for the K.K. Bone & Joint Care website.

The system must ensure that every page and component feels like part of one coherent healthcare brand.

Core Design Principles
Trust before decoration
Clarity before complexity
Human warmth before clinical coldness
Accessibility before visual novelty
Consistency before experimentation
Conversion without aggressive selling
Premium through spacing and typography, not excessive effects
2. Brand Personality

The interface should communicate:

Personality	UI Expression
Trustworthy	Stable layouts, clean typography
Professional	Structured grid, precise spacing
Caring	Warm imagery, soft surfaces
Modern	Contemporary components
Approachable	Friendly language, rounded elements
Expert	Strong hierarchy and doctor profile
Local	Clear Rahon/location information

The visual tone should be:

Calm + Confident + Clean + Human

3. Visual Identity
Design Keywords

Use these keywords as the foundation for all Stitch-generated screens:

Premium Healthcare
Contemporary Medical
Human-Centred
Minimal Editorial
Trustworthy
Soft Precision
Clean Architecture
Accessible

Avoid:

Generic Hospital
Corporate Dashboard
Overly Futuristic
Clinical Coldness
Excessive Glassmorphism
Neon Healthcare
Visual Noise

4. Colour System
4.1 Primary Brand
Token	Value	Usage
brand-900	#073B46	Darkest brand
brand-800	#0A4652	Dark sections
brand-700	#0F5562	Primary brand
brand-600	#176574	Hover
brand-500	#287786	Secondary emphasis
brand-400	#4B929D	Light accent
brand-300	#82B6BD	Decorative
brand-200	#C3DDE0	Light background
brand-100	#E6F1F2	Soft tint
brand-50	#F2F8F8	Very light tint
Primary Brand Usage

Use brand-700 as the main action colour.

Use darker values for:

Footer
Dark CTA section
Strong emphasis

Use lighter values for:

Icon backgrounds
Badges
Section accents
5. Secondary Healthcare Green
Token	Value	Usage
accent-700	#176B63	Strong accent
accent-600	#237D74	Secondary CTA
accent-500	#31958A	Accent
accent-300	#8CCBC3	Decorative
accent-100	#E2F3F0	Soft background

Use this colour sparingly.

It should support the primary blue/teal system rather than compete with it.

6. Neutral Colour System
Token	Value	Usage
neutral-950	#142024	Main heading
neutral-900	#1B292E	Strong text
neutral-800	#29373C	Body text
neutral-700	#43535A	Secondary text
neutral-600	#607178	Muted text
neutral-500	#7D8B90	Placeholder
neutral-400	#AAB5B8	Disabled
neutral-300	#D2DBDD	Borders
neutral-200	#E1E8E9	Light borders
neutral-100	#EDF2F2	Surface tint
neutral-50	#F7FAFA	Page background
white	#FFFFFF	Cards/surfaces
7. Semantic Colours
Success

Primary:

#17745B

Background:

#E7F5EF

Used for:

Form success
Confirmations
Valid states
Error

Primary:

#B42318

Background:

#FDECEA

Used for:

Form errors
Validation messages
Warning

Primary:

#9A6700

Background:

#FFF5D9

Used sparingly.

Information

Primary:

#1769AA

Background:

#E8F2FA

8. Colour Rules
Rule 1

Do not use more than one primary accent in the same component.

Rule 2

Do not use gradients as the default background treatment.

Rule 3

Dark sections should use the brand palette rather than pure black.

Rule 4

Never use colour alone to communicate an error or state.

Rule 5

All text/background combinations must maintain accessible contrast.

9. Typography System
Primary Font

Manrope

Fallback:

Inter, system-ui, sans-serif
10. Font Weights
Weight	Value	Usage
Regular	400	Body
Medium	500	Supporting text
SemiBold	600	Labels
Bold	700	Headings
ExtraBold	800	Hero heading only

Avoid using 800 everywhere.

11. Type Scale
Display XL

Desktop:

72px

Line height:

1.05

Weight:

700–800

Use only for hero headlines.

Display

Desktop:

60px

Mobile:

44px

H1

Desktop:

52px

Mobile:

38px

H2

Desktop:

44px

Mobile:

32px

H3

Desktop:

28px

Mobile:

23px

H4

20px

Body Large

18px / 1.65

Use for:

Hero supporting copy
Important introductions
Body

16px / 1.65

Default body text.

Body Small

14px / 1.5

Use for:

Supporting information
Metadata
Caption

12–13px

Use sparingly.

12. Fluid Typography

Use CSS clamp() rather than fixed sizes wherever possible.

Example:

font-size: clamp(2.4rem, 5vw, 4.5rem);

The design should smoothly scale between mobile and desktop.

13. Typography Rules

Headings:

Short
Strong
Sentence case
Avoid excessive uppercase

Body:

Maximum comfortable line length
Approximately 60–75 characters per line

Do not use justified text.

14. Spacing System

Base unit:

4px

Primary scale:

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
144
15. Spacing Tokens
Token	Size
space-1	4px
space-2	8px
space-3	12px
space-4	16px
space-5	20px
space-6	24px
space-8	32px
space-10	40px
space-12	48px
space-14	56px
space-16	64px
space-20	80px
space-24	96px
space-30	120px
16. Section Spacing

Desktop:

80–120px

Tablet:

64–96px

Mobile:

56–80px

Hero may use slightly larger spacing.

17. Container System

Maximum content width:

1200px

Recommended:

.container {
  width: min(calc(100% - 32px), 1200px);
  margin-inline: auto;
}

Large desktop can use:

1280px

for image-heavy sections if required.

18. Grid System

Use a 12-column desktop grid.

Desktop:

12 columns
24px gutters

Tablet:

8 columns
20px gutters

Mobile:

4 columns
16px gutters
19. Layout Rules

Desktop layouts may use:

50/50
40/60
45/55
4-column grids
3-column grids

Mobile should collapse into one column unless content clearly benefits from two columns.

20. Border Radius System
Token	Radius	Usage
radius-sm	8px	Small controls
radius-md	12px	Inputs
radius-lg	16px	Cards
radius-xl	24px	Large cards
radius-2xl	32px	Hero imagery
radius-full	999px	Pills

Do not make every element fully rounded.

21. Shadow System
Shadow XS

Subtle elevation.

Shadow SM

Cards and dropdowns.

Shadow MD

Floating elements.

Shadow LG

Modal/lightbox.

Shadows should remain soft and low-opacity.

Avoid strong black shadows.

22. Border System

Default border:

1px solid neutral-200

Hover:

1px solid brand-300

Focus:

2px solid brand-500

Do not use thick borders for normal cards.

23. Button System

Create three primary button variants.

Primary Button
Label

Book an Appointment

Style
Brand background
White text
Rounded 12px
Medium/bold typography
Height

Desktop:

48–52px

Mobile:

48–52px

Secondary Button

Example:

Call Now

Style:

Transparent/white surface
Brand border
Brand text
Tertiary Button

Example:

Learn More →

Style:

No background
No border
Brand text
24. Button States

Every button must support:

Default

Normal appearance.

Hover

Slight darkening or elevation.

Active

Small downward/press effect.

Focus

Visible focus ring.

Disabled

Reduced opacity and no pointer interaction.

Loading

Display loading indicator and prevent repeated submission.

25. Button Shape

Default:

12px radius

Primary CTA may use:

14px

Avoid pill-shaped buttons except for small tags.

26. Input System

Inputs should have:

48–52px height
12px radius
16px horizontal padding
Clear label
Visible focus state

Example:

Full Name
┌─────────────────────────────────┐
│ Enter your full name             │
└─────────────────────────────────┘
27. Input States
Default

Neutral border.

Hover

Slight border emphasis.

Focus

Brand border + accessible focus ring.

Error

Error border + error message.

Disabled

Muted background.

Success

Success border where appropriate.

28. Form Labels

Labels must always remain visible.

Do not depend exclusively on placeholders.

Example:

Phone Number
[ +91 _____________ ]

Please enter a valid phone number.
29. Navigation Component
Desktop

Structure:

Logo
Home
About
Services
Doctor
Why Us
Gallery
Contact
[Book Appointment]

Navigation height:

Approximately:

72–84px

30. Navigation States
Top of Page

Transparent or light surface depending on hero design.

Scrolled
Solid background
Subtle shadow/border
Slightly reduced height
Active Link

Use:

Brand colour
Small underline or indicator

Do not use oversized active backgrounds.

31. Mobile Navigation

Header:

Logo
Menu button

Menu opens into:

Full-width panel
Clear vertical navigation
Appointment CTA

Menu should occupy the majority of the viewport without feeling like a separate app.

32. Logo System

Primary logo treatment:

K.K. Bone & Joint Care

Possible supporting label:

Bone & Joint Care | Rahon

If an official logo is provided later, replace the text logo without changing the layout system.

33. Badge Component

Used for:

Location
Specialty
Status
Small trust indicators

Example:

● Bone & Joint Care

Style:

Small
Rounded
Light background
Brand text
34. Section Heading Component

Every major section should use a consistent heading pattern.

Example:

BONE & JOINT CARE

Care for Your Mobility

Professional care designed around
your individual needs.

Structure:

Eyebrow
Heading
Supporting description
35. Service Card
Anatomy
┌────────────────────────────┐
│ [ICON]                     │
│                            │
│ Knee Pain                  │
│                            │
│ Short patient-friendly     │
│ description.               │
│                            │
│ Learn More →               │
└────────────────────────────┘
Specifications
White surface
1px border
20–24px radius
24–28px padding
Soft hover elevation
36. Service Card States
Default

White surface.

Hover
Slight upward translation
Border becomes brand-tinted
Icon background becomes slightly stronger
Focus

Visible focus ring.

37. Feature Card

Used for:

Why Choose Us
Trust signals
Patient benefits

Anatomy:

Icon
Heading
Description

Keep content concise.

38. Doctor Profile Component
Anatomy
Doctor Image

Doctor Name
Qualification
Specialization

Biography

[Book Appointment]

Use a larger editorial image.

The doctor profile is a high-priority trust component.

39. Doctor Information Card

Optional supporting card:

QUALIFICATION
[Verified]

SPECIALIZATION
[Verified]

EXPERIENCE
[Verified]

Use uppercase labels only for small metadata.

40. Testimonial Card
Anatomy
★★★★★

“Sample testimonial content.”

— Sample Patient

Real testimonials should replace demo content before launch.

41. Rating Component

Stars should be visually subtle.

Do not make the rating larger than the testimonial itself.

If no verified rating exists:

Do not display a rating.

42. FAQ Component

Use accordion interaction.

Default:

How can I book an appointment?           +

Expanded:

How can I book an appointment?           −

Answer content...

Animation:

200–300ms

43. Gallery Component

Use a mixed editorial grid.

Gallery cards:

Rounded corners
Consistent cropping
Subtle hover overlay

Hover:

Image
+
View

Keep overlays minimal.

44. Lightbox

Lightbox should include:

Dark overlay
Image
Close button
Previous
Next

Accessibility:

Escape closes
Keyboard navigation
Focus management
45. Appointment Component

Appointment form should visually communicate simplicity.

Headline:

Book Your Visit

Fields:

Name
Phone
Date
Time
Reason
Message

CTA:

Request Appointment

46. Appointment Success Component

Use a positive confirmation state.

✓

Request Received

Thank you. The clinic will contact you
to confirm your appointment.

Demo version must indicate:

Demo form — not connected to the clinic.

47. Contact Card

Display:

📍 Address
📞 Phone
💬 WhatsApp
🕐 Timings

Each item should be clickable where appropriate.

48. Mobile Sticky Action Bar

Three equal actions:

CALL
WHATSAPP
APPOINTMENT

Height:

Approximately:

64–72px

Use bottom safe-area padding.

49. Icon System

Use a single consistent icon library/style.

Recommended:

Lucide-style outline icons

Stroke:

Approximately:

1.75–2px

Icons should not dominate text.

50. Icon Container

Standard icon container:

44 × 44px

Large feature icon:

52 × 52px

Background:

brand-100

Icon:

brand-700

Radius:

12–14px

51. Image System
Image Style

Photography should be:

Natural
Warm
Professional
Bright
Realistic

Avoid heavily filtered photography.

52. Image Containers

Default radius:

20–28px

Use object-fit: cover.

Always reserve dimensions to prevent layout shift.

53. Hero Image

Preferred:

4:5 portrait

Alternative:

3:4

Hero image may have subtle decorative framing.

Avoid complex masks.

54. Section Background System

Use controlled background alternation.

Recommended:

Hero          → neutral-50
Info          → white
About         → white
Services      → neutral-50
Conditions    → white
Doctor        → brand-50
Why Us        → white
Journey       → neutral-50
Testimonials  → white
Gallery       → neutral-50
FAQ           → white
Contact       → brand-800
Footer        → brand-900

This creates visual rhythm.

55. Dark Section System

Dark sections should use:

Brand-800/900
White headings
Neutral-200 body text
Light brand accents

CTA buttons should remain highly visible.

Do not use pure black.

56. Hero Decorative Elements

Allowed:

Soft circular shapes
Subtle gradient glow
Fine medical-inspired line patterns
Minimal abstract forms

Not allowed:

Large floating bones everywhere
Cartoon anatomy
Excessive 3D medical objects
Neon glowing skeletons

The clinic is treating people, not launching a video game.

57. Decorative Graphic Language

Use abstract shapes inspired by:

Mobility
Curves
Human movement
Joint structures

Graphics should remain abstract.

Avoid detailed anatomical illustrations unless specifically required.

58. Interaction Principles

Interactions should be:

Fast + Subtle + Predictable

Use:

150–250ms for micro-interactions
250–400ms for component transitions
400–600ms maximum for larger reveals
59. Hover Behaviour

Cards:

translateY(-3px)

Buttons:

translateY(-1px)

Images:

Subtle scale:

scale(1.02)

Do not use exaggerated movement.

60. Scroll Animations

Use:

Fade up
Fade in
Slight translate

Default:

opacity: 0 → 1
translateY: 16px → 0

Animation duration:

400–600ms

61. Reduced Motion

Respect:

prefers-reduced-motion

When enabled:

Remove transforms
Reduce transitions
Disable decorative animations
62. Accessibility

Design target:

WCAG 2.2 AA

Requirements:

Minimum readable text sizes
Strong contrast
Keyboard navigation
Focus indicators
Accessible forms
Accessible modals
Accessible accordion
Clear error messaging
63. Focus Ring

Default focus:

2px solid brand-500
3px offset

Focus must remain visible against both light and dark backgrounds.

64. Touch Targets

Interactive controls should have minimum:

44 × 44px

Preferred:

48 × 48px

Especially for:

Mobile menu
CTA buttons
FAQ controls
Gallery controls
Sticky CTA
65. Responsive Design Tokens
Mobile

Container:

16px

Section spacing:

56–80px

Card padding:

20–24px

Tablet

Container:

24px

Section spacing:

64–96px

Desktop

Container:

32px

Maximum width:

1200–1280px

Section spacing:

80–120px

66. Responsive Behaviour
Desktop

Use:

Large hero
Asymmetrical layouts
3–4 column cards
Horizontal journey
Tablet

Use:

2-column grids
Reduced typography
Reduced spacing
Mobile

Use:

Single-column layouts
Larger touch targets
Simplified navigation
Sticky contact CTA
67. Breakpoints

Use:

sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px

Do not rely on breakpoints alone.

Use fluid sizing between breakpoints.

68. Z-Index System

Use predictable layering:

base          0
content       1
sticky        20
header        40
mobile menu   50
modal         100
toast         200

Avoid arbitrary z-index values.

69. Loading States

Buttons:

[ ◌ Submitting... ]

Images:

Use lightweight placeholder/skeleton where useful.

Do not display unnecessary loading screens.

70. Skeleton System

If skeletons are needed:

Neutral background
Rounded shapes
Subtle shimmer
Respect reduced motion

Do not create elaborate skeletons for a mostly static website.

71. Error System

Error message:

Please enter a valid phone number.

Style:

Error icon
Error text
Error colour
Clear relationship to the field

Avoid red-only indicators.

72. Success System

Success message:

✓ Appointment request received.

Use:

Success icon
Success colour
Clear message

Keep it brief.

73. Toast Notifications

If used:

Position top-right desktop
Bottom above sticky CTA mobile
Maximum width around 360px
Include close control

Avoid excessive toast usage.

74. Modal System

Use modals only for:

Gallery lightbox
Appointment success
Important confirmation

Modal:

16–24px radius
Maximum width 560px for standard dialogs
Strong backdrop
Clear close control
75. Content Width

Long-form text:

Maximum:

680–760px

Hero copy:

Maximum:

620px

Section descriptions:

Maximum:

650px

This prevents giant walls of text.

76. Card Width

Service cards:

Approximately:

260–300px

depending on grid.

Cards should not become excessively narrow.

77. CTA Hierarchy

Every section should have a clear visual hierarchy.

Primary

Book Appointment

Secondary

Call / WhatsApp

Tertiary

Learn More / Get Directions

Never give four competing buttons identical visual weight.

78. Trust Hierarchy

The page should progressively build confidence:

Clinic identity
      ↓
Services
      ↓
Doctor
      ↓
Patient experience
      ↓
Clinic environment
      ↓
Contact

The design system should support this narrative.

79. Medical Content Rules

The UI must accommodate verified content only.

Never visually promote:

Guaranteed outcomes
Guaranteed cures
Fake statistics
Fake patient counts
Fake awards
Fake qualifications
Unsupported "best clinic" claims

Placeholder content must remain visibly replaceable during the demo stage.

80. Empty / Placeholder States

For missing information:

[Doctor Photo]
[Doctor Name]
[Verified Qualification]

Use neutral placeholder styling.

Do not use random fake information simply to fill a card.

81. Component Naming

Recommended component names:

Header
Hero
SectionHeading
InfoStrip
AboutSection
ServiceGrid
ServiceCard
ConditionsGrid
DoctorProfile
TrustFeatures
PatientJourney
Testimonial
TestimonialCard
Gallery
GalleryItem
FAQ
FAQItem
AppointmentForm
ContactDetails
MapCard
Footer
MobileActionBar
Modal
Button
Input
Badge
82. Component Variants
Button
primary
secondary
tertiary
dark
icon
Card
default
elevated
feature
dark
Badge
brand
success
neutral
warning
Input
default
error
success
disabled
83. Design Token Naming

Use predictable names.

Example:

color.brand.700
color.neutral.900
color.surface.default
spacing.6
radius.lg
shadow.sm
type.heading.h1

Avoid component-specific arbitrary values.

84. Stitch Component Generation Rules

When generating components with Google Stitch:

Use the existing colour tokens.
Reuse typography tokens.
Reuse button components.
Reuse card components.
Reuse spacing values.
Do not introduce new colours unless necessary.
Do not introduce new radius values without reason.
Do not introduce a new font for individual sections.
Keep component states consistent.
Maintain the same visual language across desktop and mobile.
85. Stitch Screen Generation Rules

When generating screens:

Desktop

Use the 12-column grid.

Tablet

Collapse to 8 columns.

Mobile

Use 4-column grid with stacked sections.

Every generated screen should maintain:

Same header
Same CTA style
Same typography
Same colour system
Same card language
Same spacing system
86. Design Review Checklist
Brand

Clinic name prominent

Healthcare identity clear

Rahon location visible

Brand colours consistent

Typography

H1 dominant

H2 hierarchy consistent

Body readable

No unnecessary font weights

Layout

Consistent spacing

Strong alignment

Clear grid

Adequate whitespace

Components

Buttons consistent

Cards consistent

Forms consistent

Icons consistent

UX

Appointment CTA obvious

Contact information easy to find

Mobile navigation simple

Sticky mobile CTA present

Accessibility

Contrast checked

Focus states visible

Touch targets adequate

Reduced motion supported

87. Do / Don't
DO
Use whitespace
Use strong typography
Use subtle borders
Use warm professional photography
Use clear CTAs
Use consistent components
Keep interactions subtle
Keep medical content trustworthy
DON'T
Overuse gradients
Use neon colours
Use excessive glassmorphism
Use giant icons everywhere
Use fake statistics
Use fake reviews
Use fake credentials
Over-animate the page
Use complicated dashboard-style UI
88. Master Visual Formula

The website should follow approximately:

70% Neutral / White
20% Brand Blue/Teal
10% Secondary Accent

The exact visual balance may vary by section.

89. Signature Visual Pattern

A recurring visual motif should be used across the website:

Rounded Image + Editorial Text + Small Brand Accent

Example:

┌─────────────────────────┐
│                         │
│       PHOTO             │
│                         │
└─────────────────────────┘

SMALL LABEL

Strong headline

Short supporting text

[Primary CTA]

This becomes a recognizable design pattern for the brand.

90. Premium Design Rule

Premium appearance should come primarily from:

Typography + Spacing + Alignment + Photography + Consistency

Not from:

Gradients + Shadows + Animation + Decorative Elements

This is especially important for a healthcare brand.

91. Final Design System Principle

Every element should answer one question:

Does this make the patient trust the clinic, understand the information, or take the next useful action?

If the answer is no, the element should probably not exist.

The final K.K. Bone & Joint Care design system should feel:

Calm. Professional. Human. Precise. Modern. Trustworthy.

It should look premium enough for a clinic presentation while remaining realistic to implement and maintain in HTML, CSS and JavaScript.

END OF DESIGN SYSTEM