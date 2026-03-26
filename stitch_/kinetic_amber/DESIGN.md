# Design System Strategy: Editorial Kineticism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Energetic Curator."** 

Moving away from the sterile, cookie-cutter "Amazon-style" grids, this system treats e-commerce as a high-end editorial experience. We combine the high-velocity energy of our primary color (now a vibrant blue, `#00a5fd`) with a sophisticated, layered layout. By using intentional asymmetry, generous white space, and overlapping product photography, we break the "template" look. The goal is to make the user feel they are browsing a premium digital lookbook rather than a database. We prioritize "Breathing Room" over "Information Density" to foster trust and focus.

## 2. Colors & Surface Architecture
The palette is built on a foundation of cool neutrals to make the `primary` blue feel intentional and expensive, rather than overwhelming.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a product detail section should transition from `surface` to `surface-container-low` to denote a change in context.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. 
    *   **Level 0 (Base):** `surface` (#e4f0f7)
    *   **Level 1 (Sectioning):** `surface-container-low` (#d4e4ee)
    *   **Level 2 (Interaction Hubs):** `surface-container` (#c3dae8)
    *   **Level 3 (Floating Elements):** `surface-container-lowest` (#f0f6fa)
*   **The Glass & Gradient Rule:** To add "soul" to the interface, main CTAs should utilize a subtle linear gradient from `primary` (#00a5fd) to `primary-container` (#86ccfc) at a 135-degree angle. For floating navigation bars or headers, use Glassmorphism: `surface` color at 80% opacity with a `20px` backdrop-blur.

## 3. Typography: The Editorial Voice
We use a dual-font system to balance authority with modern readability.

*   **Display & Headlines (Plus Jakarta Sans):** Used for brand moments and product titles. Its wide aperture and modern geometric forms convey a "Fast & Friendly" personality. Use `display-md` for hero banners to create a high-contrast focal point.
*   **Body & Labels (Manrope):** A highly legible sans-serif chosen for functional data. Its compact nature ensures that even at `body-sm`, shipping details and price tags remain crisp.
*   **The Hierarchy Rule:** Never use more than three type scales on a single screen. Use `headline-sm` for section titles and `body-md` for product descriptions to maintain a clear, trustworthy path for the eye.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often "dirty." This system uses light and tone to create dimension.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "Natural Lift" that feels architectural.
*   **Ambient Shadows:** When a floating effect is required (e.g., a "Buy Now" sticky bar), use a multi-layered shadow:
    *   `Y: 10, Blur: 30, Color: on-surface (4% opacity)`
    *   `Y: 2, Blur: 8, Color: on-surface (2% opacity)`
    *   This mimics natural light rather than digital "glow."
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` at 20% opacity. Never use 100% opaque lines.

## 5. Components & Primitive Styling

### Buttons
*   **Primary:** High-gloss. Gradient of `primary` to `primary-container`. Corner radius: `md` (0.75rem / 12px).
*   **Secondary:** Ghost style. No background. `label-md` text in `primary` with a `surface-variant` hover state.
*   **States:** On press, scale the button to 98% to provide tactile haptic feedback.

### Product Cards
*   **Layout:** Forbid the use of divider lines. Separate the product image from the description using 1.5rem (`spacing-6`) of vertical white space.
*   **Background:** Use `surface-container-lowest`. 
*   **Corner Radius:** `xl` (1.5rem) for the top corners of the image, `md` (0.75rem) for the card container.

### Inputs & Fields
*   **Style:** Minimalist. Background color `surface-container-low`. No border. On focus, the background shifts to `surface-container-highest` with a subtle `primary` underline (2px).
*   **Error State:** Use `error` (#ba1a1a) for text, but keep the input background `on-error` (#ffdad6) to maintain softness.

### Chips (Category Filters)
*   **Unselected:** `surface-container-high` background with `on-surface-variant` text.
*   **Selected:** `primary` background with `on-primary` text. Use `full` (9999px) roundedness for a friendly, organic feel.

### Cart & Checkout (Unique Component)
*   **The "Float-Sheet":** The cart should not be a new page, but a `surface-container-lowest` sheet that slides up, utilizing Glassmorphism on the backdrop to keep the user grounded in their shopping context.

## 6. Do’s and Don’ts

### Do:
*   **DO** use `spacing-10` (2.5rem) or `spacing-12` (3rem) for margins between major sections to create an editorial feel.
*   **DO** use `surface-tint` sparingly to highlight active states in navigation.
*   **DO** ensure product photography has consistent lighting to complement the `surface` tones.

### Don’t:
*   **DON’T** use pure black (#000000) for text. Use `on-surface` (#181c20) to maintain the cool, premium tonal range.
*   **DON’T** use `none` or `sm` roundedness. This system relies on `md` (12px) and `xl` to feel approachable.
*   **DON’T** use standard "Grey" for shadows. Always tint shadows with the `on-surface` hue to keep the interface vibrant.