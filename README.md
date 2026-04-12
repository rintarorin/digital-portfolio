# Eldrin David Asuncion — Cybersecurity Portfolio

A dark, terminal-inspired personal portfolio website focused on cybersecurity roles.

## Folder Structure

```
portfolio/
├── index.html          ← Main page (open this in a browser)
├── README.md           ← This file
├── css/
│   └── styles.css      ← All styling, CSS variables, animations
├── js/
│   ├── data.js         ← All content (edit this to update info)
│   └── main.js         ← Scroll reveal, hex grid, typing effect
└── assets/             ← Place images, icons, or a favicon here
```

## How to Use

### Open Locally
Just double-click `index.html` — no server, no install needed.

### Update Your Content
All text content lives in `js/data.js`. Edit that file to change your
bio, skills, experience, education, or certifications.

### Add a Profile Photo
1. Drop your photo into the `assets/` folder (e.g. `assets/photo.jpg`).
2. In `index.html`, add inside the `#hero` section:
   ```html
   <img src="assets/photo.jpg" alt="Eldrin David Asuncion" class="hero-photo" />
   ```
3. Style it in `css/styles.css` as needed.

### Add a Favicon
Place a `favicon.ico` or `favicon.png` in the `assets/` folder,
then add to the `<head>` of `index.html`:
```html
<link rel="icon" href="assets/favicon.png" type="image/png" />
```

## Deploy for Free

| Platform   | Steps |
|------------|-------|
| **GitHub Pages** | Push the folder to a repo → Settings → Pages → Deploy from `main` |
| **Netlify**      | Drag the entire `portfolio/` folder onto netlify.com/drop |
| **Vercel**       | `vercel deploy` from inside the folder |

## Customize the Theme

All colours are CSS variables at the top of `css/styles.css`:

```css
:root {
  --accent:  #00d4ff;   /* primary cyan */
  --accent2: #00ff9d;   /* green highlights */
  --accent3: #ff4b6e;   /* red alerts */
  --bg:      #050a0f;   /* darkest background */
}
```
