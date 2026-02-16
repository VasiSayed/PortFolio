# Fix Vercel 404 NOT_FOUND

## 1. Set Root Directory (most likely fix)

Your Next.js app lives in the **`portfolio`** folder, but Vercel may be building from the repo root.

**Do this:**

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your project.
2. Go to **Settings** → **General**.
3. Find **Root Directory**.
4. Set it to: **`portfolio`** (no leading slash).
5. Click **Save**.
6. Go to **Deployments** → **⋯** on latest deployment → **Redeploy**.

Vercel will then run `npm install` and `npm run build` inside `portfolio/`, where `package.json` and `next.config.ts` are.

---

## 2. Do not use static export (already correct)

Your `next.config.ts` does **not** use `output: "export"`. Keep it that way.

If you ever add:

```ts
const nextConfig = {
  output: "export",  // ❌ Remove this for Vercel
};
```

remove it so Vercel can run the Next.js server and avoid 404s for routes that aren’t pre-built.

---

## 3. Checklist

- [ ] Root Directory in Vercel = **`portfolio`**
- [ ] `portfolio/app/page.tsx` exists (it does)
- [ ] `portfolio/next.config.ts` has no `output: "export"`
- [ ] Redeploy after changing Root Directory

---

## 4. If 404 persists

- In Vercel, open the **Build** tab of the latest deployment and confirm the build runs from `portfolio` and succeeds.
- Confirm the deployment URL you’re opening (e.g. `https://your-project.vercel.app/` with no extra path).
- If the repo root has its own `package.json`, consider moving the Next app to the repo root or using a monorepo setup so Vercel’s root matches where `next build` is meant to run.
