# Sid's Portfolio Website

A professional portfolio website built with Jekyll and GitHub Pages.

## Overview

This repository contains a personal portfolio website showcasing skills, projects, experience, and education. The site is built with Jekyll and deployed using GitHub Pages.

## Local Development

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- Bundler

### Setup

1. Clone this repository:
   ```
   git clone https://github.com/sid-inthub/sid-inthub.github.io.git
   cd sid-inthub.github.io
   ```

2. Install dependencies:
   ```
   bundle install
   ```

3. Run the site locally:
   ```
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser to view the site.

## Customization

### Content

To update your portfolio content, edit the `index.md` file. This file contains all the content sections including:

- Profile information
- Projects
- Skills
- Certifications
- Experience
- Education

### Styling

The styles are defined in `/assets/css/style.scss`. You can modify colors, spacing, and layout by editing this file.

### Profile Image

Replace the placeholder image at `/assets/images/profile-placeholder.jpg` with your own profile picture.

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment is handled by the GitHub Actions workflow defined in `.github/workflows/jekyll-gh-pages.yml`.

To deploy:

1. Commit your changes:
   ```
   git add .
   git commit -m "Update portfolio content"
   ```

2. Push to GitHub:
   ```
   git push origin main
   ```

3. GitHub Actions will automatically build and deploy your site to GitHub Pages.

4. Your site will be available at `https://sid-inthub.github.io`.

## License

This project is open source and available under the [MIT License](LICENSE).
