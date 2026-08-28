---
title: I live
date: 2026-08-27
excerpt: Lost Wisdom & Progress
---

Salutations, I have lost all previously gained wisdom as my wisdom teeth have been taken from me. I was recuperating for a few days, which is the reason for my lack of progress. That being said, here's what's new:

# Playground

There are now popups when you click on the buttons on the playground page. Really only for the first button, but that's the first thing I’ve implemented. Along with that, the buttons now display a preview gif on hover if they have one and an image if not. This was real fun to figure out, and I swapped between react-modal and just creating my own popup, which is what I ended up doing.

The first lab (What I’m calling the playground segments) I implemented was a spotlight that follows the mouse, to be used for the movie club website. This was kinda gross at first, as I used the mouse's absolute positions before I discovered useMouse from React, which simplified everything very nicely.

# Going Forward

There will be tiny segments or showcases of what I’m trying in the playground, or just things as fun small projects. Some will be implemented into a future site or are simply projects I don’t deem big enough to have their own space for.

I keep referencing the movie club website, and its ideas are circulating; however, there's a smaller project I would like to complete first that compiles a text log into a book, so I’ve been using pandas and the like for the processing and such. It's of a Dungeons and Dragons chat, so I’ll have to figure out how to progress with that and determine the best way to show it, maybe have some stats, who knows.

# Bug of the day

Bug of the day, everyone's favorite segment, today's showcase:

```
import Modal from "react-modal";
modal.setAppElement("#root");
```

Not really a bug per se; however, attempting to configure the modal was annoying and failing to pop up like I wanted, so I just scrapped it and made my own popup function.

Going forward, I should save and make a mental note whenever I run into something I deem annoying; good idea, me.