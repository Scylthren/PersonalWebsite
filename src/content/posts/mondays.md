---
title: Mondays
date: 2026-08-24
excerpt: Case of the Mondays 
---

I don’t usually see myself not doing the blog on weekends; however, celebrating my sister's birthday took up most of my time. That being said, we’re back and better than ever.

Concerning my decisions last time, I think I’ll simply create the Movie Club DB and bake it into the website to make it static, mostly because I would like to complete it and have it as a fond memory. That being said, I will explain and demonstrate either in comments or in the read me, how I would’ve gone about it in a front end - back end service. I could also create the front end & back end without actually hosting them, but that feels boring and lame.

On a more exciting note, you might have realized there's a new tab on this website. Playground. ooo ahhh. This is a tab for me to post little bits of code or functionality that don’t feel like a complete project but rather just for fun. Something like making a calculator from year 1 cs class would go here. Obviously much more advanced, hopefully, than that. I will also probably use this to test ideas that I would incorporate into other projects, such as a spotlight, equalizer for music, and more!

While doing all this coding, I was considering posting about a bug of the day since I plan on blogging every day. Unsure if this would showcase my capabilities or my inabilities depending on how trivial the bug is. However, today's bug of the day:

```
export function getAssetPath(path) {
return import.meta.env.BASE_URL + path;
}
```

You may be thinking, this is completely fine for a helper method. With that, I agree; however, for an embarrassing amount of time I simply forgot to put the function keyword beforehand. Why it slipped my mind is unknown, but it then proceeded to break everything. Was quite the scare.