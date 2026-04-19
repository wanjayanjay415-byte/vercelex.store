# Design System Documentation: The Ethereal Professional

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system is built to transcend the "template" aesthetic of traditional e-commerce. By transitioning to a deep, dark-mode foundation, we move away from rigid, boxed layouts toward a fluid, layered experience that emphasizes high-tech vibrancy and editorial precision.

The core philosophy is **Intentional Depth**. In this dark-themed environment, digital products feel like illuminated artifacts resting on sheets of obsidian glass. By utilizing a high-contrast typography scale (Manrope for Headlines, Inter for Body) and a color palette that flows from Deep Slate (`primary`) to a Shadowed Electric Purple (`secondary`), we create a sense of professional authority and technological innovation. Trust is built through breathing room, impeccable alignment, and subtle tonal shifts against a pure black (`neutral`) backdrop.

---

## 2. Colors & Surface Philosophy

### The Palette
The palette is divided into functional roles that balance the "high-tech" energy of deep purples with the "grounded" stability of slate tones, optimized for a dark mode experience.

*   **Primary (`#1E293B`) & Secondary (`#511baf`):** Use the Deep Slate (`primary`) for structural elements and the Deepened Purple (`secondary`) for moments of high-tech delight and secondary interaction.
*   **Tertiary (`#0EA5E9`):** Reserved for "Trust" elements—badges, verification icons, and secondary CTAs, cutting through the dark background with high visibility.
*   **Neutral (`#000000`):** The absolute base for the dark interface, providing infinite depth.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections.
Boundaries must be created through background color shifts. In dark mode, a section should transition from the base `neutral` (`#000000`) to slightly elevated surface tones to denote a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. The closer an item is to the user, the more it catches the "light" against the dark background:
1.  **Base Layer:** `background` (#000000).
2.  **Section Layer:** Subtle elevation using slate-tinted surfaces.
3.  **Content Cards:** Higher elevation surfaces that pop against the black base.

### The "Glass & Gradient" Rule
To achieve the "Gemini-esque" high-tech feel, utilize dark glassmorphism for floating navigation and hero cards. Use elevated surface tokens at 70% opacity with a `backdrop-blur` of 20px. 
*   **Signature Texture:** For primary CTAs, apply a linear gradient from `secondary` (`#511baf`) to a darker purple variant at a 135-degree angle. This provides a "liquid" depth that feels like a glowing neon element in a dark space.

---

## 3. Typography
We use a dual-font strategy to balance character with readability, ensuring high legibility against dark backgrounds.

*   **Display & Headlines (Manrope):** Chosen for its geometric modernism. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to create an editorial, high-end feel.
*   **Body & Titles (Inter):** The workhorse for clarity. Inter provides the "Professional" counterweight to the more expressive Manrope.

| Level | Token | Font | Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | 700 |
| **Headline** | `headline-md` | Manrope | 1.75rem | 600 |
| **Title** | `title-md` | Inter | 1.125rem | 500 |
| **Body** | `body-lg` | Inter | 1rem | 400 |
| **Label** | `label-md` | Inter | 0.75rem | 600 (All Caps) |

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than traditional drop shadows. In dark mode, we use varying shades of grey/slate to imply height:
*   Place a lighter slate-colored card inside a pure black wrapper. This creates a natural "lift" as the element appears to move toward the light source.

### Ambient Shadows
Where floating elements (like Modals or Dropdowns) are required, use "Atmospheric Glows" rather than shadows:
*   **Blur:** 40px to 60px.
*   **Opacity:** 10% - 15%.
*   **Color:** Use a slightly lighter tint of the background or a subtle `primary` tint to make the element appear to be emitting a faint light.

### The "Ghost Border" Fallback
If a container requires a border for accessibility (e.g., input fields), use a light outline token at **15% opacity**. In dark mode, this creates a subtle "rim light" effect.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `secondary` (`#511baf`) to its darker variant. Roundedness: `moderate` (2). Text: `on_secondary` (White).
*   **Secondary:** Ghost style. Background: Subtle slate tint. Text: `primary` (lightened for dark mode).
*   **Tertiary:** No background. Text: `secondary`. Underline on hover only.

### Cards & Glass Containers
Cards must never have a border. Use `roundedness: 2` (moderate) for a friendly, modern feel. For high-tech "Digital Product" showcases, use:
*   **Background:** Deep slate surface (80% opacity).
*   **Effect:** Backdrop blur 12px.
*   **Shadow:** None, or a subtle rim-light effect.

### Input Fields
*   **Style:** Minimalist. Background: Dark elevated surface.
*   **Active State:** Transition background to a slightly lighter slate and add a 1px "Ghost Border" using the `secondary` purple at 30% opacity.

### Trust Badges
*   **Style:** Small, pill-shaped (`full` roundedness).
*   **Color:** `tertiary` (#0EA5E9) background with contrasting text. This "Trust Blue" differentiates security/specs from "Action Purples" in the dark UI.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Let images bleed off the edge of a container to create a "curated" feel.
*   **Do** use lighter slate variants for secondary text to maintain a soft visual hierarchy against the black background.
*   **Do** prioritize white space. In dark mode, space feels even more expansive—use it to highlight key content.

### Don't
*   **Don't use dividers.** Forbid the use of `<hr>` or 1px lines between list items. Use vertical spacing or subtle surface color shifts.
*   **Don't use pure white for body text.** Use a high-contrast grey or slightly off-white to prevent eye strain against the black background.
*   **Don't use hard corners.** All components should follow the `roundedness: 2` (moderate) setting for a balanced aesthetic.

---

## 7. Interaction Design
*   **Hover States:** When hovering over a glass card, increase the backdrop blur slightly and shift the background opacity. In dark mode, this should feel like the element is glowing or moving closer to the viewer.
*   **Transitions:** All state changes (hover, focus) must use a 300ms "Ease-Out" curve. Snappy transitions feel "cheap"; smooth transitions feel "premium." 

*Document End.*