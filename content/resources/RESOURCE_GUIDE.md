# APG Resources - Creation Guide

Use this file as context when creating new resources. Read this entire file before creating a resource to ensure all requirements are met.

---

## Quick Start Checklist

Before publishing a new resource, ensure you have:

- [ ] **Frontmatter** - All required fields filled in (see below)
- [ ] **Thumbnail** - Created and placed in `/public/resources/thumbnails/`
- [ ] **Slug** - URL-friendly, lowercase, hyphenated
- [ ] **Category** - Matches existing categories or is a new meaningful category
- [ ] **Content** - At least 400+ words (200 above fold, 200+ below for gating)
- [ ] **Links** - All links are valid and use full URLs
- [ ] **Images** - Placed in `/public/resources/images/` with correct paths

---

## File Locations

```
content/resources/
├── RESOURCE_GUIDE.md          # This file (do not publish)
├── your-resource-slug.md      # Your resource markdown files
└── images/                    # Images used WITHIN markdown content

public/resources/
├── thumbnails/                # Thumbnail images for resource cards
│   └── your-thumbnail.svg     # 800x450 recommended (16:9)
└── images/                    # Alternative location for images
```

---

## Required Frontmatter

Every resource MUST have this frontmatter at the top:

```markdown
---
title: "Your Resource Title Here"
slug: "your-resource-slug"
description: "A compelling 1-2 sentence description that appears on the card"
thumbnail: "/resources/thumbnails/your-thumbnail.svg"
createdAt: "YYYY-MM-DD"
category: "Category Name"
---
```

### Field Requirements

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Full title, can include special chars | `"The Complete Guide to AI"` |
| `slug` | ✅ | URL-safe, lowercase, hyphens only | `"complete-guide-to-ai"` |
| `description` | ✅ | 100-160 chars for SEO | `"Learn how to implement AI..."` |
| `thumbnail` | ✅ | Path to thumbnail image | `"/resources/thumbnails/ai-guide.svg"` |
| `createdAt` | ✅ | ISO date format | `"2026-02-11"` |
| `category` | ✅ | Consistent category name | `"AI Strategy"` |

### Current Categories

Use these existing categories when possible for consistency:
- `Automation`
- `AI Strategy`
- `Business Operations`
- `Case Studies`
- `Templates`

---

## Thumbnail Requirements

### Specifications
- **Dimensions**: 800x450px (16:9 aspect ratio)
- **Format**: SVG preferred, PNG/WebP acceptable
- **Location**: `/public/resources/thumbnails/`
- **Naming**: Match the slug (e.g., `automation-guide.svg`)

### Creating SVG Thumbnails

You can create simple branded thumbnails using this template:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#111111"/>
      <stop offset="100%" style="stop-color:#1a1a1a"/>
    </linearGradient>
  </defs>
  <rect fill="url(#bg)" width="800" height="450"/>
  <!-- Add your icon/graphic here -->
  <text x="400" y="390" text-anchor="middle" fill="#90F23C" font-family="system-ui, sans-serif" font-size="24" font-weight="600">YOUR TITLE HERE</text>
</svg>
```

### Brand Colors
- Primary Green: `#90F23C`
- Background Dark: `#111111`
- Background Gradient: `#1a1a1a`

---

## Content Structure

### Above the Fold (~200 words)
This content is ALWAYS visible. Include:
- Compelling hook/intro
- What the reader will learn
- Why it matters

### Below the Fold (Gated)
This content is blurred until email is submitted. Include:
- Main content/guide
- Actionable steps
- Examples and case studies
- Links to tools/resources
- Call to action

### Recommended Structure

```markdown
# Main Title (H1)

Opening paragraph that hooks the reader and explains what they'll learn.

Second paragraph expanding on the value proposition.

## First Major Section (H2)

Content here...

### Subsection (H3)

More detailed content...

## Second Major Section

Continue with valuable content...

## Call to Action

Final section encouraging next steps.
```

---

## Supported Markdown Features

### Basic Formatting
- **Bold**: `**text**`
- *Italic*: `*text*`
- `Code`: `` `code` ``
- [Links](url): `[text](url)`

### Headers
```markdown
# H1 - Main Title (use once)
## H2 - Major Sections
### H3 - Subsections
#### H4 - Minor sections
```

### Lists
```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Second item
```

### Code Blocks
````markdown
```javascript
const example = "code here";
```
````

### Blockquotes
```markdown
> This is a quote or callout
```

### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### Images
```markdown
![Alt text](/resources/images/your-image.png)
```

### Videos (YouTube)
```markdown
![video](https://youtube.com/watch?v=VIDEO_ID)
```

---

## Links and CTAs

### Internal Links
Link to other resources or pages:
```markdown
[Check our automation guide](/resources/automation-guide)
[Book a call](https://go.apgsoftware.com)
```

### External Links
Always use full URLs:
```markdown
[Zapier](https://zapier.com)
[Our tool](https://example.com/tool)
```

**Note**: All links are gated until the user submits their email!

---

## Example Resource

Here's a complete example:

```markdown
---
title: "5 AI Tools Every Service Business Needs in 2026"
slug: "ai-tools-service-business"
description: "Discover the essential AI tools that can save your service business 20+ hours per week"
thumbnail: "/resources/thumbnails/ai-tools.svg"
createdAt: "2026-02-15"
category: "AI Strategy"
---

# 5 AI Tools Every Service Business Needs in 2026

The AI revolution isn't coming—it's here. And service businesses that adapt now will dominate their markets.

In this guide, we'll reveal the 5 AI tools that our most successful clients use to save 20+ hours per week.

## Why AI Matters for Service Businesses

Before diving into tools, let's understand why AI is a game-changer...

[Continue with 400+ words of valuable content]

## Tool #1: [Tool Name]

Description and how to use it...

## Tool #2: [Tool Name]

[Continue...]

## Getting Started

Ready to implement these tools? Here's your action plan:

1. Start with Tool #1
2. Measure your time savings
3. Add one tool per week

---

*Want help implementing AI in your business? [Book a free consultation](https://go.apgsoftware.com)*
```

---

## Creating a New Resource - Step by Step

### Step 1: Plan Your Content
- What problem does this solve?
- Who is it for?
- What will they learn?
- What action should they take?

### Step 2: Create the Thumbnail
1. Design or generate an 800x450 image
2. Save to `/public/resources/thumbnails/your-slug.svg`
3. Use brand colors (#90F23C, #111111)

### Step 3: Write the Markdown
1. Create file: `content/resources/your-slug.md`
2. Add frontmatter with ALL required fields
3. Write 400+ words of content
4. Include links and CTAs

### Step 4: Verify
1. Check frontmatter is complete
2. Thumbnail loads correctly
3. Links work
4. Content is 400+ words
5. Test on dev server: `pnpm dev`
6. Navigate to `/resources/your-slug`

### Step 5: Deploy
```bash
git add .
git commit -m "Add resource: Your Resource Title"
git push
```

---

## Troubleshooting

### Resource not showing up?
- Check filename ends in `.md`
- Verify frontmatter has no syntax errors
- Ensure file is in `content/resources/` (not a subdirectory)

### Thumbnail not loading?
- Check path starts with `/resources/thumbnails/`
- Verify file exists in `public/resources/thumbnails/`
- Check file extension matches (.svg, .png, etc.)

### Content not gating properly?
- Ensure content is 400+ words
- Check there's content AFTER the first ~200 words

---

## Quick Reference Card

```
📁 New resource file:     content/resources/[slug].md
🖼️ Thumbnail location:    public/resources/thumbnails/[slug].svg
📏 Thumbnail size:        800x450px (16:9)
📝 Minimum content:       400+ words
🎨 Brand green:           #90F23C
📅 Date format:           YYYY-MM-DD
🔗 Thumbnail path:        /resources/thumbnails/[slug].svg
```

---

*Last updated: 2026-02-11*
