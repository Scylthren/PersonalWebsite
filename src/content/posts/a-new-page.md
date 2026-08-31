---
title: A new page
date: 2026-08-31
excerpt: Small Book Implementation
---

I have implemented a beginning version of the book I want for the D&D archive site. I want a 3D model that rotates and opens to be read, with text on the pages for a real book feel. Very daunting, but with this demo I feel more confident in actually getting it done.

There was a lot learned about three.js and the libraries of @react-three/drei and @react-three/fiber, mostly for their HTML and Canvas implementations. A couple of things I found really neat from my discoveries were the useMemo() and the use of custom React hooks. The useMemo() was super important for creating a texture on the spine for the words and just for allowing the texture to be memoized for any re-renders. Although I might revisit the cover and spine to give more of a “book” feel on the planned website.

It took a lot of trial and error to understand the space again of things like how to rotate an arc in such a way it's a spine, or simply creating a usable rotation. There is a want to create a dead space to stop the jitters when the mouse is in the middle of the rotation, but I’ll move on for now.

# Bug of the day

Boy, there were a lot during this learning process. I think my favorite one, or rather the one that made me pull my hair, was math and the process around creating the spine.

```
const spineCurve = Math.PI / 6; // 45°
const halfSpineCurve = spineCurve / 2;
const spineRadius = Depth / (2 * Math.sin(spineCurve / 2));
const spineOffset = spineRadius * Math.cos(spineCurve / 2);

<cylinderGeometry args={[spineRadius, spineRadius, Height, 32, 1, true, -Math.PI/2 - halfSpineCurve, (spineCurve - halfSpineCurve) *2  ]}>
```

At first I tried to hard-code it with simple numbers and variations of Math.PI in order to get a curved spine and have it only connect with the sides of the covers.
This was an absolute pain to get correct; I had to re-look up how arcs work and how to get the functionality I wanted without throwing anything else out of whack.

Here was what I was dealing with when I finally felt hope

![Book_pain](/images/pain.png)

Overall, though fun experience, and I hope I can carry on to achieve what I want with the D&D archive website.