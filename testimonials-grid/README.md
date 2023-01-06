# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - TailwindCSS

### What I learned

Typically, when you're using Tailwind with a framework, you don't usually need to extract your classes because you're generating elements in a framework component and the CSS is only applied once. Since I wrote this project in pure HTML, I did extract a handful of classes to reduce redundancy in my code.

I extracted a class for the individual testimonial cards to apply styling that would be consistent across each one - such as border radius, drop shadow, and padding. I also used the child combinator to target the heading and text content of each testimonial.

```css
@layer components {
    .card {
        @apply px-8 py-[26px] shadow-xl rounded-lg text-base grid grid-cols-1;
    }

    article > heading {
        @apply text-lg font-semibold leading-6 py-4;
    }

    article > p {
        @apply leading-[11px];
    }

    article > q {
        @apply leading-[18px];
    }
}
```

Then, I was able to set unique characteristics on each element that required it. For example, the text on cards with a dark background:

```html
<q class="text-white-500/70">
    I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.
</q>
```

### Continued development

I struggled a bit with figuring out the right combination of padding, margin, and sizing to get my grid to match the challenge design.

If I were creating this component in a JS framework, I would extract the unique classes instead, and use props to pass the particular class to each testimonial card component.


### Useful resources

- [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) - A handy Chrome extension for previewing responsive design.


## Author
- Frontend Mentor - [@kldupless](https://www.frontendmentor.io/profile/kldupless)
