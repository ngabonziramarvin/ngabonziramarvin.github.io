# ngabonziramarvin.github.io

Personal website of **Marvin Ngabonzira** — Neuro-Engineering Researcher & Founder of [The Science Blueprint](https://youtube.com/@thescienceblueprint).

---

## 🚀 How to Deploy (Zero to Live)

### Step 1 — Create the GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** (the green button, top-right or on the left panel)
3. Name it **exactly**: `ngabonziramarvin.github.io`
   - ⚠️ The name must match your username exactly — this is what activates GitHub Pages
4. Set visibility to **Public**
5. Leave everything else unchecked (no README, no .gitignore)
6. Click **Create repository**

### Step 2 — Upload Your Files

**Option A — GitHub Web UI (easiest, no terminal needed):**

1. Open your new repository on GitHub
2. Click **"uploading an existing file"** (shown on the empty repo page)
3. Drag and drop **all the files and folders** from this project
4. Write a commit message: `Initial site`
5. Click **Commit changes**

**Option B — GitHub Desktop (recommended for ongoing use):**

1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your new repo: File → Clone Repository
3. Copy all site files into the cloned folder
4. In GitHub Desktop: write a summary → **Commit to main** → **Push origin**

**Option C — Git Terminal:**

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/ngabonziramarvin/ngabonziramarvin.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages (Usually Auto-enabled)

1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under "Source", select: **Deploy from a branch**
3. Branch: `main` | Folder: `/ (root)`
4. Click **Save**

⏱️ Wait 2–5 minutes. Your site is now live at:
**https://ngabonziramarvin.github.io**

---

## 📁 File Structure

```
ngabonziramarvin.github.io/
├── index.html              ← Home page
├── about.html              ← Origin story & mission
├── research.html           ← Technical reports & projects
├── blog.html               ← Essay index
├── cv.html                 ← Showcase CV wrapper
├── marvin-ngabonzira-cv.html  ← The actual CV (copy from deliverables)
├── assets/
│   ├── style.css           ← Shared styles (edit for brand changes)
│   └── nav.js              ← Shared navigation (auto-injected)
└── posts/
    ├── neural-data-privacy-bci.html   ← Sample post
    └── [your-future-posts].html
```

---

## ✍️ How to Add a New Blog Post

1. Copy `posts/neural-data-privacy-bci.html`
2. Rename it to something like `posts/twenty-watt-brain.html`
3. Edit the content inside the `<article class="post-body">` section
4. Update the title, meta, and tags in the `<head>` and `.post-hero`
5. Add a link card for it in `blog.html` (copy one of the existing `.post-item` blocks)
6. Push to GitHub → live in ~30 seconds

---

## 🎨 Brand Customization

All brand colors are CSS variables at the top of `assets/style.css`:

```css
--bg:      #0F0F0F;   /* Deep Space Black */
--cyan:    #00E5FF;   /* Neural Cyan */
--magenta: #E029EA;   /* Synapse Magenta */
--text:    #F4F4F5;   /* Bio-White */
```

Change them once → updates everywhere.

---

## 🔗 Connecting a Custom Domain (When Ready)

When you're ready to buy a domain (e.g. `marvinngabonzira.com`):

1. Buy from [Porkbun](https://porkbun.com) (~$10/yr) or [Namecheap](https://namecheap.com)
2. In your registrar's DNS settings, add these **A records**:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a **CNAME record**: `www` → `ngabonziramarvin.github.io`
4. In GitHub: Settings → Pages → Custom domain → enter your domain
5. Check "Enforce HTTPS"
6. DNS propagates in 1–48 hours

That's it. No extra cost beyond the domain itself.

---

## 📝 TODO Placeholders to Update

- [ ] Replace all `zenodo.org/XXXXXXX` DOIs with real DOIs after publishing
- [ ] Replace `0009-0000-XXXX-XXXX` with real ORCID
- [ ] Add `marvin-ngabonzira-cv.html` (copy the CV file from deliverables, rename it)
- [ ] Update social links in `assets/nav.js` footer (YouTube channel URL, etc.)
- [ ] Add profile photo if desired (reference in `about.html`)
- [ ] Write remaining blog posts: `twenty-watt-brain.html`, `memory-storage.html`, `neuromorphic-computing.html`

---

*Built for ngabonziramarvin.github.io · The Science Blueprint · 2026*
