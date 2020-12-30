# `next-head-count` is missing

#### Why This Error Occurred

You have a custom `pages/_document.js` that doesn't have the components required for Next.js to render correctly.

#### Possible Ways to Fix It

Upgrade Next.js to 9.5.4 or later, which does not require `next-head-count`.

If you can't upgrade right now, ensure that your `_document.js` is importing and rendering all of the [required components](https://nextjs.org/docs/advanced-features/custom-document).

In this case you are most likely not rendering the `<Head>` component imported from `next/document`.