---
title: 'README'
---

<content>

# README

A guide to show what is required to add a new file with markdown in the `/content` directory.

You can either follow this file or read it on the [developer portal](https://developer.test.digitallibrary.io/README)

Primarly you can use normal markdown syntax. Here is a cheatsheet you can follow: [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Since we have a design we want to preserve, there are some details that you need to follow.

## Title

Do set the title in the navigation bar and browser tab, you need to set this at the top of the file:

```
---
title: 'Your title'
---

...
```

This is optional. If it is not set, it will default to `title='Developer portal`

## Section

A section seperates the rest of the content with a white background and are preferrably used as a top section with a title and some description like this:

```xml
<section>

# Here you can add a title

Here you can write description

It is optional to add a semi-transparent image like this:

<bottomimagewrapper>

![feed image](/images/philly.png)

</bottomimagewrapper>

(yes, it is positioned on the bottom right)

</section>
```

NB! It is required to have a new line after the `<section>` tag and before the enclosing `</section>` tag.

## Content

To add content in a new markdown file, the `content` tag is required:

```xml
<content>

All content (e.g text. buttons, images) needs to be inbetween the content tags

![alt text](/images/philly.png)

</content>
```

NB! Again, it is required to have the new line after the `<content>` tag and before the enclosing `</content>` tag.

## Button

Creating a button uses the same syntax as creating a [link with markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links). Therefore, to distinguish between a url link and a button it is required to create a button tag like this:

For buttons linking site to our domain use the `to` prop:

```xml
<button to="/example">Example</button>

<button to="/">Home</button>

```

If you want to link to an external website, you need to use the `href` prop:

```xml
<button href="https://github.com/GlobalDigitalLibraryio">GitHub</button>

<button href="https://www.google.com">To Google</button>
```

If you want a back button like this

![back button](/images/backbutton.png)

you can use:

```xml
...

<backbutton />

...
```

</content>
