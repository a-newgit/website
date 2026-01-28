# Portfolio Personality Plan

## Status

**Last Updated:** 2026-01-27
**Status:** READY TO EXECUTE
**Next Action:** Provide your content (name, intro, work history, email, LinkedIn, photo) to begin Phase 1

### Resume Instructions

When you return, say: "Let's continue with the portfolio personality plan" and provide:

1. Your name (as you want it displayed)
2. Your current/desired title
3. A few sentences about yourself (I'll help refine)
4. Your work history (companies, roles, years, key accomplishments)
5. Email and LinkedIn URL
6. Profile photo (add to `public/images/` folder)

---

## Goal

Transform the portfolio from a well-built template into a distinctive personal brand that:

- Positions you for **Lead/Staff Designer** roles
- Shows **depth as a human** (not just a list of achievements)
- Uses **subtle but striking visual elements** for memorable personality

---

## What You'll Need to Provide

### Essential Content

| Item                              | Purpose              | Notes                                                            |
| --------------------------------- | -------------------- | ---------------------------------------------------------------- |
| **Your name**                     | Header, hero, footer | How you want to be known professionally                          |
| **Current role/title**            | Hero section         | e.g., "Senior Product Designer" or your aspiration "Design Lead" |
| **Hero intro** (2-3 sentences)    | First impression     | Your unique value proposition + what drives you                  |
| **Work history**                  | Timeline             | Company names, roles, years, key accomplishments                 |
| **Email**                         | Footer contact       | Professional email                                               |
| **LinkedIn URL**                  | Footer               | Full profile URL                                                 |
| **Profile photo**                 | Hero or about        | High-quality, professional but approachable                      |
| **Other social links** (optional) | Footer               | Twitter, GitHub, Dribbble, Read.cv, etc.                         |

### For Lead/Staff Positioning

Think about content that demonstrates:

- **Systems thinking** (not just feature design)
- **Influence beyond your immediate team**
- **Mentorship or leadership of other designers**
- **Strategic decision-making** (not just execution)
- **Cross-functional collaboration** at senior levels

---

## Visual Personality Strategy

### 1. Accent Color

Current palette is neutral grays. Add ONE distinctive accent color that:

- Reflects your personality (warm? calm? bold?)
- Works with the existing neutral palette
- Will be used sparingly for emphasis (links, highlights, decorative elements)

**Options to consider:**

- **Warm terracotta** (#C4785A) — approachable, earthy, distinctive
- **Deep teal** (#2A6F72) — calm, thoughtful, sophisticated
- **Soft coral** (#E07A5F) — warm, human, memorable
- **Muted indigo** (#5C6BC0) — professional, creative, trustworthy

### 2. Subtle Visual Elements (Personality Touches)

**Option A: Typographic Treatments**

- Pull quotes in larger, italic serif with decorative quotation marks
- Section labels with subtle letter-spacing animation on hover
- Hero name with slight gradient or texture overlay

**Option B: Geometric Accents**

- Small dots or circles as decorative elements (timeline markers already use this)
- Thin accent lines separating sections
- Corner accents on cards or images

**Option C: Texture & Depth**

- Subtle paper-like texture on background
- Soft shadows creating layered depth
- Grain overlay on images for warmth

**Option D: Micro-animations**

- Gentle fade-in on scroll for sections
- Link underlines that animate on hover
- Timeline dots that pulse subtly

**Recommendation:** Start with 2-3 elements from different categories for variety without clutter.

### 3. Profile Photo Integration

**Placement options:**

- **Hero section** — Immediately personal, creates human connection
- **Footer** — Subtle but present on every page
- **About section** — When you create one later

**Styling:**

- Circular crop with subtle border in accent color
- OR rounded rectangle for modern feel
- Consider adding a subtle shadow for depth

---

## Page-by-Page Personalization

### Landing Page (index.astro)

**Priority: HIGH — This is your first impression**

| Element                 | Current             | Personalize To                |
| ----------------------- | ------------------- | ----------------------------- |
| Page title              | "Design Portfolio"  | "[Your Name] — Design Leader" |
| Hero name               | "Your Name"         | Your actual name              |
| Hero role               | "Product Designer"  | Your positioning title        |
| Hero intro              | Generic             | Your unique statement         |
| Profile photo           | Missing             | Add to hero section           |
| "Selected Work" heading | Generic             | Could be more distinctive     |
| CTA button              | "Explore portfolio" | Consider more personal        |

**Hero Intro Framework (for Lead/Staff positioning):**

```
[What you do] + [How you think] + [What drives you]

Example:
"I design systems that help teams ship better products faster.
After a decade of building for fintech and enterprise, I've learned
that the best design work happens at the intersection of user needs,
business strategy, and team capability."
```

### Header (Header.astro)

| Element | Current     | Personalize To        |
| ------- | ----------- | --------------------- |
| Logo    | "Portfolio" | Your name or initials |

### Footer (Footer.astro)

| Element      | Current           | Personalize To          |
| ------------ | ----------------- | ----------------------- |
| Email        | hello@example.com | Your real email         |
| LinkedIn     | generic URL       | Your profile URL        |
| Social links | Only 2            | Add relevant others     |
| Statement    | None              | Optional: brief tagline |

### Timeline (timeline.json)

Replace all three entries with your actual work history.

**For Lead/Staff positioning, highlight:**

- Team leadership or mentorship
- Systems or platform work
- Cross-functional collaboration
- Metrics that show impact at scale

**Example entry structure:**

```json
{
  "company": "Actual Company",
  "role": "Senior Product Designer → Design Lead",
  "years": "2021 - Present",
  "description": "Leading design for the platform team, establishing systems that scale across 5 product squads.",
  "highlights": [
    "Built and maintained design system serving 40+ designers",
    "Mentored 3 junior designers",
    "Drove adoption of new research practices across org"
  ]
}
```

### Notes Page (notes/index.astro)

Current intro is already good. Consider if the phrasing matches your desired positioning.

### Portfolio Page (portfolio/index.astro)

Current intro is already good. The "ambiguity to clarity" framing is strong.

---

## Implementation Order

### Phase 1: Core Identity (Do First)

1. Choose accent color
2. Update your name in Header and Hero
3. Write hero intro
4. Update Footer with real email/LinkedIn
5. Add profile photo to Hero

### Phase 2: Career Story

1. Replace timeline.json with real work history
2. Ensure highlights show leadership trajectory
3. Review case study content for Lead/Staff framing

### Phase 3: Visual Polish

1. Add chosen accent color to CSS
2. Implement 2-3 subtle visual elements
3. Style profile photo
4. Add micro-interactions if desired

### Phase 4: Refinement

1. Review all copy for consistent voice
2. Test mobile experience
3. Get feedback from trusted peers
4. Iterate on positioning

---

## Files to Modify

| File                          | Changes                                |
| ----------------------------- | -------------------------------------- |
| `src/pages/index.astro`       | Hero props, page metadata              |
| `src/components/Header.astro` | Logo text                              |
| `src/components/Footer.astro` | Email, LinkedIn, optional social links |
| `src/components/Hero.astro`   | Add profile photo slot/prop            |
| `src/content/timeline.json`   | Replace all entries                    |
| `src/styles/global.css`       | Accent color, visual elements          |

---

## Voice Guidelines

For Lead/Staff positioning, your copy should:

**DO:**

- Use "we" when discussing team work (shows collaboration)
- Mention systems, frameworks, and scalable thinking
- Reference mentorship or growing others
- Show strategic thinking (why, not just what)
- Be specific about impact (numbers, scale, outcomes)

**AVOID:**

- "I designed a button" (too tactical)
- Purely execution-focused language
- Generic designer speak
- Underselling scope or influence

**Example transformations:**

- ❌ "Redesigned the checkout flow"
- ✅ "Led the checkout redesign that became the template for all conversion flows"

- ❌ "Worked with engineers"
- ✅ "Partnered with engineering leads to establish design-dev handoff standards"

---

## Verification

After personalization, check:

- [ ] Name appears in header, hero, and meta tags
- [ ] All placeholder text replaced
- [ ] Timeline reflects actual career
- [ ] Accent color applied consistently
- [ ] Profile photo displays well on mobile
- [ ] Footer links work
- [ ] Voice feels consistent across pages
- [ ] Portfolio positions you for desired role level

---

## Next Step

Once you provide your content (name, intro, work history, email, photo), I'll help you update each file systematically.
