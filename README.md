# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
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
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshots

|           Mobile designed at 375px:           |            Desktop designed at 1440px:             |
| :-------------------------------------------: | :------------------------------------------------: |
|   ![](./screenshots/screenshot-mobile.png)    |     ![](./screenshots/screenshot-desktop.png)      |
|                 Mobile (nav):                 |                Desktop (lightbox):                 |
| ![](./screenshots/screenshot-mobile-nav.png)  | ![](./screenshots/screenshot-desktop-lightbox.png) |
|                Mobile (cart):                 |                  Desktop (cart):                   |
| ![](./screenshots/screenshot-mobile-cart.png) |   ![](./screenshots/screenshot-desktop-cart.png)   |

### Links

- Solution URL: [https://github.com/elisilk/ecommerce-product-page](https://github.com/elisilk/ecommerce-product-page)
- Live Site URL: [https://elisilk.github.io/ecommerce-product-page/](https://elisilk.github.io/ecommerce-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography
- Accessibility

### What I learned

Hmm 🤔 ...

More Fundamental Practices:

- Accessibility
  - [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [Using nesting selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector)
- [Use min-height: 100dvh](https://ardislu.dev/min-height-100dvh) - I have been moving more and more toward specifying my CSS attributes using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). But this slight change to my base `body` styles combines a little but of that thinking, while also taking into account [a known issue](https://stackoverflow.com/questions/74144034/why-is-the-css-height100vh-rule-exceeding-the-viewport-height-on-mobile-device) with how the viewport sizing is calculated on mobile devices that are influenced by the presence or absence of dynamic toolbars ([see this super clear web.dev article with great visuals](https://web.dev/blog/viewport-units)) So now, instead of using `min-height: 100vb`, I will now be using `min-block-size: 100dvb` on my `body` to make sure it takes up the full viewport.
- [`:focus-visible` vs `:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) - I was always a little confused on which of the link pseudo-classes to use, and which to avoid (for accessibility reasons). I'm still not 100%, but am thinking more about using `:focus-visible` rather than `:focus`. As explained in the MDN docs some examples of the difference are: "For instance, when a button is clicked using a pointing device, the focus is generally not visually indicated, but when a text box needing user input has focus, focus is indicated." And so the `:focus-visible` pseudo class seems to match on a subset of the times and so over-styling can be avoided in some cases (i.e., no need to style a link or button as focused if a user knows they are pointing to it). That seems like a win to me.
  - [Link Pseudo-Classes (In Order)](https://css-tricks.com/snippets/css/link-pseudo-classes-in-order/)
  - [When is :focus-visible visible?](https://bitsofco.de/when-is-focus-visible-visible/)
  - [When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/)
  - [:focus vs :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#focus_vs_focus-visible)

More Fine-Grained Ideas:

- Carousels, Sliders, Galleries, and Lightboxes - I found some really great [CSS-only (or mostly CSS) carousels](https://css-tricks.com/css-only-carousel/) that I did implement and found to be really cool. But ultimately, I felt limited by those options and ...
  - Galleries
    - [Wes Bos - Building a Gallery](https://wesbos.com/javascript/10-harder-practice-exercises/58-building-a-gallery)
    - [Wes Bos - Prototype Refactor of Gallery Exercise](https://wesbos.com/javascript/11-prototypes-this-new-and-inheritance/62-prototype-refactor-of-gallery-exercise)
    - [MDN image gallery](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery) - and the [finished example](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/)
  - Carousels/Sliders
    - [CSS-Only Carousel](https://css-tricks.com/css-only-carousel/)
    - [Inclusive Components - A Content Slider](https://inclusive-components.design/a-content-slider/)
    - [Wes Bos - Building a Slider](https://wesbos.com/javascript/10-harder-practice-exercises/59-building-a-slider)
    - [Wes Bos - Prototype Refactor of the Slider Exercise](https://wesbos.com/javascript/11-prototypes-this-new-and-inheritance/64-prototype-refactor-of-the-slider-exercise)
    - [Glide - A dependency-free JavaScript ES6 slider and carousel](https://glidejs.com/) and [its GitHub repository](https://github.com/glidejs/glide)
    - [js-carousel - simple carousel built with plain JavaScript, which can be your starting point to build your own carousel solution](https://github.com/c99rahul/js-carousel/tree/main)
    - [How To Build a Simple Carousel With Vanilla JavaScript (14 Lines of Code!)](https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t)
    - [Build an image carousel from scratch with vanilla JavaScript](https://blog.logrocket.com/build-image-carousel-scratch-vanilla-javascript/)
    - [How to build a carousel from scratch in vanilla JS](https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9)
  - Lightbox
    - [Lightbox by Lokesh Dhakar - The original lightbox script](https://lokeshdhakar.com/projects/lightbox2/)
    - [How to Create a Lightbox Using HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-create-a-lightbox-using-html-css-and-javascript/)
- Shopping Cart functionality
  - [11 Shopping cart remove item button](https://www.youtube.com/watch?v=l2M5q2te234)
- [How to Loop Through an HTMLCollection](https://dev.to/isabelxklee/how-to-loop-through-an-htmlcollection-379k)
- [How to Format a Number as Currency in JavaScript](https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
  - [MDN DOM examples - web storage](https://github.com/mdn/dom-examples/tree/main/web-storage)
  - [Creating A Shopping Cart With HTML5 Web Storage](https://www.smashingmagazine.com/2019/08/shopping-cart-html5-web-storage/)
- Scroll events
  - [Element: scrollBy() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy)
  - [HTMLElement: offsetLeft property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
  - [Synchronize scroll positions between two elements](https://phuoc.ng/collection/html-dom/synchronize-scroll-positions-between-two-elements/)
  - [How do I know when I've stopped scrolling?](https://stackoverflow.com/questions/4620906/how-do-i-know-when-ive-stopped-scrolling)
  - [Use JavaScript to listen and handle scroll stop events](https://www.30secondsofcode.org/js/s/on-scroll-stop/)
  - [Wait until scrollTo is complete before running a command](https://stackoverflow.com/questions/30727365/wait-until-scrollto-is-complete-before-running-a-command)
- [Modal dialogs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) - including the accessibility considerations for
  - [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)
  - [Top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer)
  - [Wes Bos - Click Outside Modal](https://wesbos.com/javascript/06-serious-practice-exercises/click-outside-modal)
  - [Some Hands-On with the HTML Dialog Element](https://css-tricks.com/some-hands-on-with-the-html-dialog-element/)
  - [dialog = the easiest way to make a popup modal](https://youtu.be/TAB_v6yBXIE?si=8iES5w_ywwPVgIz2)
  - [The current state of modal dialog accessibility](https://www.tpgi.com/the-current-state-of-modal-dialog-accessibility/)
  - [How To Make Modal Windows Better For Everyone](https://www.smashingmagazine.com/2014/09/making-modal-windows-better-for-everyone/)
  - [How To Use Opacity and Transparency to Create a Modal in CSS](https://www.digitalocean.com/community/tutorials/how-to-use-opacity-and-transparency-to-create-a-modal-in-css)
- CSS animations, especially to/from `display: none`
  - [We can now transition to and from display: none](https://youtu.be/vmDEHAzj2XE?si=1qO9mBxQb7i_DC9h)
  - [Animate from display none](https://youtu.be/4prVdA7_6u0?si=lDXfMHGvjXWeZ2oY)
- [Stacking contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) - There was so much in this challenge that I had to think through with stacking contexts. It feels like the entire challenge had so many layers.
  - [9.9.1 Specifying the stack level: the `z-index` property](https://www.w3.org/TR/CSS21/visuren.html#layers) - For the mobile navigation popup menu, I had to think about stacking contexts a lot. Given the order in which each layer of a given stacking context is painted, I had to adjust where the background color of the mobile nav was set so that the underlying shadow layer didn't get painted above the white background color of the navigation itself.
  - [Solve your z-index issues | z-index and stacking context explained](https://youtu.be/uS8l4YRXbaw?si=2y0q4iikAtNckzof) - YouTube explainer video from Kevin Powell, with two examples, the first CodePen being [a more abstract demonstration of the basic ideas](https://codepen.io/kevinpowell/pen/GdRYLg) and the second CodePen [being a more realistic example](https://codepen.io/kevinpowell/pen/bjEKeq) that I found super helpful.
  - [Understanding & Debugging Stacking Contexts (and the Z-Index)](https://www.lullabot.com/articles/understanding-debugging-stacking-contexts) - I felt like I needed help (or tools) to debug my stacking context issues. This [CSS Stacking Context inspector](https://chromewebstore.google.com/detail/css-stacking-context-insp/apjeljpachdcjkgnamgppgfkmddadcki) Chrome DevTools extension was a decent option. I didn't find that it worked that well (it threw a lot of errors) and wasn't as helpful as I would have hoped. But it did help me think about what were the stacking contexts that I needed to attend to and how to identify the parent that could be key to adjusting the z-index values.
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) - The photo carousel has an overlay with the control buttons, but I still wanted the mouse and keyboard events to be able to go through the overlay and be picked up by the photo carousel. And then, the SVG arrow within the control buttons had its own pointer events which I wanted to be handled entirely by the button itself. So using the `pointer-events` attribute was critical.
- [HTML for Subheadings and Headings](https://css-tricks.com/html-for-subheadings-and-headings/) - What is that "subtitle" called? I recall Kevin Powell had another name for it in one of his videos, but I can't remember the exact name at the moment. I think he called it an "eyebrow", and [this site suggests that name plus also "kicker" or "overline"](https://english.stackexchange.com/questions/353869/is-there-an-official-name-for-a-heading-prefix-or-qualifier).
- [This new CSS property just solved animating to height auto](https://youtu.be/JN-nme9oF10?si=h6IKX-WTbZfOnXJP) - Although I didn't use this idea directly, I am working up to learning more about animations, so this was relevant for that. But I also like the [associated example CodePen](https://codepen.io/kevinpowell/pen/XWvpjLr), because it has a barebones implementation of a popup navigation menu, so it's nice to see what Kevin Powell thinks are the critical elements of that kind of component and how he implemented them.

### Continued development

Specific areas that the solution should be improved (known issues):

- [Using Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events) - Implement the ability to swipe to move from one photo in the galleries to the next
- Prevent the lightbox gallery from opening if the screen width is too small (< 425px)
- Implement a "skip to main content" link
- Consider using `<input type="text" inputmode="numeric">` instead of `<input type="number">` as an [alternative number input ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#using_number_inputs)
  - [My top 5 most popular front-end tips - 05:13 - Number inputs aren’t so straightforward](https://www.youtube.com/watch?v=DGOeyJjq80g&t=313s)
  - [Why the GOV.UK Design System team changed the input type for numbers](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
  - [Why the number input is the worst input](https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/)
  - [Customizing Increment Arrows on Input of Type Number Using CSS](https://stackoverflow.com/questions/45396280/customizing-increment-arrows-on-input-of-type-number-using-css)
- Implement container queries that determine when to break the quantity input and the add to cart onto separate rows (will help with the next one in terms of maintaining adequate space in the input number field)
- Lighthouse errors
  - Increase the [touch target size](https://dequeuniversity.com/rules/axe/4.10/target-size) and spacing for the increase and decrease quantity buttons
- Two errors in [the Frontend Mentor HTML report](https://www.frontendmentor.io/solutions/ecommerce-page-with-cart-and-lightbox-photo-gallery-6gYF4zENgS)
  - (info) The "dialog" element is not supported in all browsers. Please be sure to test, and consider using a polyfill. `<dialog class="lightbox">`
    - [<dialog>: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
    - [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)
    - [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
  - (error) Bad value "dialog" for attribute "method" on element "form". `<form method="dialog">`
    - [<form>: The Form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Inside the number input field, hitting the return key should submit the form (add item to the cart), right? But now, it seems to just lower the input value by 1. Not sure why.
- Show a "Thank you for shopping with us." message after checking out with the cart.

More general ideas I want to consider:

Hmm 🤔 ...

- Custom properties
  - [Using CSS custom properties like this is a waste](https://youtu.be/_2LwjfYc1x8?si=niiqfW9sRb66QwYr)
  - [Custom properties with defaults: 3+1 strategies](https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/)
- Layouts
  - [Layout Breakouts with CSS Grid](https://ryanmulligan.dev/blog/layout-breakouts/)
  - [Look Ma, No Media Queries! Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/)
  - [Layout Land](https://www.youtube.com/@LayoutLand/videos)
- Learn more about async functions, timers, etc.
- Learn more about JavaScript more generally
  - JS classes vs modules
    - [Wes Bos - Modules](https://wesbos.com/javascript/14-es-modules-and-structuring-larger-apps/78-modules)
    - [Modules, introduction](https://javascript.info/modules-intro)
    - [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    - [Stop Using JavaScript Classes!](https://medium.com/@araujjohnny/stop-using-javascript-classes-d0b6890ef097)
    - [Replacing JavaScript Classes With The Module Design Pattern](https://dev.to/bytebodger/replacing-javascript-classes-with-the-module-design-pattern-48bl)

### Useful resources

- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn)
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [Wes Bos - JavaScript Introduction](https://wesbos.com/javascript/01-the-basics/welcome) and other [courses](https://wesbos.com/courses)

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
