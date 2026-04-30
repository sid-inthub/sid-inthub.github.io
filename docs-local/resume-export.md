# Resume Export Workflow

## Files

- **`resume.md`** — Master content (single source of truth). Update here first if anything changes; regenerate other formats from this.
- **`resume.html`** — Print-optimised one-pager for browser-based PDF export (A4, embedded CSS, no external deps).

## Export to PDF (browser, recommended)

1. Open `docs-local/resume.html` in Chrome or Safari (double-click in Finder, or `open docs-local/resume.html`).
2. `Cmd + P` (Print).
3. **Destination:** Save as PDF.
4. **Paper size:** A4 (already set in `@page`).
5. **Margins:** Default (the HTML's `@page` rule sets 14mm).
6. **Background graphics:** ON (so the navy heading colours print).
7. Save as `Siddharth-Shanmugam-Resume.pdf`.

**Chrome notes:** "More settings" → "Background graphics" → check the box.
**Safari notes:** "Show Details" → uncheck "Print headers and footers" so URL/date don't appear.

## Export to .docx (Word, optional)

If you need a Word version (recruiters who prefer it):

```
brew install pandoc      # one-time
cd /Users/sid/WS/IntHub/sid-inthub.github.io/docs-local
pandoc resume.md -o Siddharth-Shanmugam-Resume.docx
```

Pandoc converts the markdown to a clean, ATS-friendly Word doc. Style is plainer than the HTML version (no navy headings, no two-column layout) — that's intentional for ATS parsing.

If you want a styled Word doc, generate the basic version first, then open in Word and apply your preferred style template.

## Re-exporting after content changes

1. Edit `resume.md` (master).
2. Re-apply the same changes to `resume.html` (or rebuild it from `resume.md` if the divergence grows).
3. Re-run browser print → PDF.
4. Re-run pandoc for .docx.

## Naming convention for exports

- `Siddharth-Shanmugam-Resume.pdf`
- `Siddharth-Shanmugam-Resume.docx`

Save exports outside `docs-local/` if you want to keep them around — `docs-local/` is gitignored, but binary files in there are also untracked and easy to lose track of. Suggested home: `~/Documents/Resume/` with date-stamped subfolders if you iterate.
