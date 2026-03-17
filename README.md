# parea-iteration-1.1

Current homepage build for Parea Collective.

Previous version:
[parea-iteration-1.0](https://github.com/chesterlsc/parea-iteration-1.0)

## What This Version Is

This version keeps the site as a restrained light-mode single-page brand site, but updates the structure and messaging so it feels more like a parent collective / holding-company homepage.

The current site presents:

- `parea collective` as the parent brand
- `aegis & co.` as the automation entity
- `nami.` as the marketing entity
- `pcaa` as the education / doctrine entity
- `acquisitions` as the ownership layer

## What Changed From The Earlier Site

Compared with the earlier `parea-iteration-1.0` version, this build adds or changes the following:

- A more centered, controlled homepage hero with stronger headline hierarchy.
- A clarified ecosystem block on the homepage for `aegis & co.`, `nami.`, `pcaa`, and `acquisitions`.
- A `systems & companies` section that can switch between the systems view and the companies view inside the same section.
- More polished systems cards with tighter, more editorial copy and cleaner hierarchy.
- A stronger founder section that keeps the founder principle cards and adds a longer founder statement below them.
- Cleaner section flow so `systems & companies` now appears before the founder section.
- Refined mobile behavior, including horizontal browsing for the ecosystem cards and card-preview behavior inside the systems / companies section.
- A more structured footer and updated ecosystem references.

## What Was Chosen From Devin's Structure

Devin's `Website Structure.txt` note was not implemented literally line-for-line. The current site selectively uses the parts that fit the existing one-page structure.

What was chosen and implemented:

### 1. Home / Flag-Plant Hero

Implemented.

The homepage opens with:

- one declarative headline
- short supporting copy
- ecosystem/entity anchors below the hero

This follows Devin's direction of making the homepage feel like presence and authority first, not a conversion page.

### 2. About the Founder

Implemented.

The founder section includes:

- a `how the founder operates` heading
- four principle cards for scanability
- an added `about the founder` statement block for a more human and personal layer

This keeps the founder section closer to POV than resume.

### 3. Philosophy / Our Why

Implemented partially.

There is not a separate philosophy section with that exact title, but the philosophical layer is now expressed through:

- the founder operating-principles cards
- the founder statement block
- the systems copy and acquisitions posture

So the worldview exists, but it is absorbed into the founder and systems areas instead of being a separate standalone section.

### 4. Systems (Bird's-Eye)

Implemented, but expanded.

Instead of staying only as a high-level systems explanation, the current site uses a combined `systems & companies` section that does two things:

- shows the operating-system categories
- shows example business profiles in a second toggle view

This is more concrete than Devin's original note, but it still keeps the tone systems-first and avoids case-study/testimonial framing.

### 5. Education

Implemented lightly, not as a full separate page.

`pcaa` is represented inside the ecosystem and footer structure, but there is not yet a dedicated education page or external education anchor page in this build.

### 6. Acquisitions

Implemented.

The current site includes a dedicated acquisitions closing section with:

- a clear ownership statement
- restrained supporting copy
- a minimal contact path

This stays close to Devin's note about keeping acquisitions serious, quiet, and non-salesy.

### 7. Minimal Footer

Implemented.

The footer is intentionally compact and keeps the navigation lightweight, while still reflecting the ecosystem structure.

## What Was Not Fully Implemented

These parts of Devin's structure were intentionally not built out yet:

- no standalone philosophy section/page
- no dedicated education anchor page for `pcaa`
- no external `pcaa` destination wired in this build
- no blog
- no content feed
- no funnels or lead magnets
- no case studies
- no metrics section
- no tool-heavy or buzzword-heavy explanation

## Current Site Structure

The current homepage order is:

1. Hero
2. Ecosystem / entity cards
3. Systems & companies
4. Founder
5. Acquisitions
6. Footer

## Summary Of What Was Actually Implemented

The main decisions that were chosen for the live build are:

- keep the site one-page and light-mode
- keep the tone calm, premium, and minimal
- use the homepage to position Parea Collective as the top-level brand
- show the broader ecosystem without turning each entity into its own page yet
- strengthen the systems section by making it interactive
- make the founder section more human by adding a longer founder statement
- preserve Devin's posture of restraint by avoiding blogs, funnels, aggressive CTAs, and noisy content

## Tech Notes

- Static site
- Main files: `index.html`, `styles.css`, `script.js`
- Current branch target: `main`
