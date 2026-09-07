---
title: Refactoring
date: 2026-09-02
excerpt: Terrible times
---

Why didn’t anyone tell me how much of a pain it is to refactor code? Feels like I’ve gotten scammed. The whole reason I didn’t post yesterday was that I was trying to configure the D&D archive website, planning how it should look. During that process, I was taking the amalgamation that I created here and refactoring it so it wasn’t annoying to work with while I added things like flipping pages and states of open and closed.

What I thought would be a quick trip turned into a couple of hours of making sure things don’t break with the new scaffolding. Although in hindsight I should’ve just refactored and then added all the fun stuff; however, that was there prior to me making the book, so really first come, first served, I suppose.

I did some planning to make sure the site will appear as I want it. The issue is, not entirely sure how I want it. Here’s what I got so far:

![Planning1](/images/planning1.png)![Planning2](/images/planning2.png)

It’ll probably evolve as I get to see what I implement in action, but for now we have a basis.

The only progress I’ve made on the other site is getting back to square one, but I’ll take it. I’ll try and implement an opening and closing animation today, with hopefully pages appearing with text.

P.S. Yes, that is a Hello Kitty Notebook, yes it was used for my Algorithms class, and yes I find it hilarious. Also, apologies for the handwriting.

# Bug of the day

React hooks. That's it. Since I’ve taken out my useSpineTexture and usePageTexture and made one for the closed pages. Everything broke once I started to refactor since I wasn’t totally accustomed to hooks in the broader scope of a project. I’ve definitely learned from my mistakes; however, it doesn’t mean I enjoyed how I learned.