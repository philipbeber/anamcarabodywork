# Design System Specification: The Soul of Serenity

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Tactile Sanctuary."** We are not building a website; we are digitalizing a physical space of healing. To achieve this, we must abandon the rigid, boxy constraints of traditional web grids in favor of an organic, editorial layout that feels as fluid as the bodywork it represents.

The signature of this system is **Intentional Asymmetry**. By utilizing generous white space and overlapping elements—such as a `notoSerif` headline partially layered over a `surface-container-low` image card—we create a sense of human touch. This system breaks the "template" look by treating the screen as a canvas of fine paper where elements breathe, rather than a container where elements are packed.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in sage (`primary`), warm sand (`secondary`), and muted slate (`tertiary`). These are not just colors; they are environmental states.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. We define boundaries through tonal shifts.
- To separate a hero section from a service list, transition from `surface` to `surface-container-low`.
- For internal groupings, use `surface-container-highest` against a `surface` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested, physical layers.
- **Base Level:** `surface` (#fffbff).
- **Secondary Level:** `surface-container-low` (#fdf9f3) for subtle content grouping.
- **Emphasis Level:** `surface-container-high` (#f1ede6) for interactive cards.
- **Deepest Level:** `surface-container-highest` (#ebe8e0) for footers or persistent navigation bars.

### The "Glass & Gradient" Rule
Standard flat buttons are too "digital." For primary CTAs and hero backgrounds, use a **Signature Texture**: a linear gradient from `primary` (#5b694c) to `primary-container` (#d8e8c4) at a 135-degree angle. This mimics the way light hits a leaf or a stone. Use `backdrop-blur` (12px–20px) on navigation bars and floating modals to create a "frosted glass" effect, allowing the earthy tones of the background to bleed through.

---

## 3. Typography: Editorial Elegance
The typography scale creates a dialogue between the timelessness of a serif and the modern clarity of a sans-serif.

- **Display & Headlines (`notoSerif`):** These are your "Soul" elements. Use `display-lg` (3.5rem) with wide tracking (-0.02em) for hero statements. The serif represents the "Anam Cara" (Soul Friend) tradition—stately, elegant, and grounded.
- **Titles & Body (`plusJakartaSans`):** These are your "Functional" elements. Use `body-lg` (1rem) for descriptions. The clean, modern curves of Plus Jakarta Sans provide a necessary contrast to the serif, ensuring the interface feels contemporary and accessible.
- **Labeling:** Use `label-md` in all-caps with 0.05em letter spacing for small metadata to maintain a high-end, editorial feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, we do not "drop shadows"; we "lift surfaces."

- **The Layering Principle:** Avoid shadows for static components. A `surface-container-lowest` card placed atop a `surface-container-low` section provides enough contrast to signify a "lift" without visual noise.
- **Ambient Shadows:** For floating elements (like a booking modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(57, 56, 50, 0.06)`. Note the color: we use a tint of `on-surface` (#393832), never pure black.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` (#bcb9b1) at 15% opacity. It should be felt, not seen.

---

## 5. Components: Organic Primitives

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), white text (`on-primary`), and `xl` (1.5rem) rounded corners.
- **Secondary:** `surface-container-highest` background with `primary` text. No border.
- **Tertiary:** Text-only in `primary` with an underline that appears on hover using a 2px `surface-tint` stroke.

### Cards & Lists
**Forbid the divider line.**
- Separate list items using the spacing scale (e.g., `spacing-4` or `1.4rem`).
- Use alternating background tones (`surface` to `surface-container-low`) for long lists of massage modalities.
- **Corners:** Use the `lg` (1rem) token for most cards to maintain the "soft, rounded" brand promise.

### Input Fields
- Avoid "box" inputs. Use a "Soft Plateau" style: a `surface-container-lowest` background with a bottom-only `outline-variant` stroke. On focus, transition the background to `primary-container` at 20% opacity.

### Signature Component: The "Peace-of-Mind" Chip
- For tags like "Certified" or "Organic Oils," use a `secondary-container` chip with `on-secondary-container` text and `full` (9999px) rounding.

---

## 6. Do's and Don'ts

### Do:
- **Do** use the `24` (8.5rem) spacing token for vertical breathing room between major sections.
- **Do** use asymmetrical image placements. If a headline is left-aligned, place the organic-shaped image slightly off-center to the right.
- **Do** favor `surface-tint` for subtle iconography to keep the interface tranquil.

### Don't:
- **Don't** use 100% opaque black for text. Always use `on-surface` (#393832) to keep the contrast soft on the eyes.
- **Don't** use the `none` or `sm` roundedness tokens for visible containers. This design system must feel "soft to the touch."
- **Don't** use standard "Error Red." Use the refined `error` (#ae4025) which leans towards a terracotta earth tone, maintaining the palette's harmony even in failure states.