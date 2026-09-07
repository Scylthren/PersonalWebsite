---
title: Side Project Galore
date: 2026-09-07
excerpt: And more for just a few days of missed blogs!
---

While it may seem that I’ve been slacking, I can attest that my GitHub has at least been active. I’ve been staying with my girlfriend for the last couple of days and helping her with her internship applications the way I wish someone had helped me.

Beyond that, I was taking a break from the main focus of the FightClub (D&D archive website) mostly because the geometry was getting on my nerves and I needed a break. In that time, I decided to mess with the iMessage DB on my Mac to get some information out of messages for both fun and for experience in more data processing. It’s been a small learning curve, but I think I’ve made excellent progress.

How interesting it is to know that Apple actually changed how they store their messages in late 2022 with macOS Ventura. Was a pain to figure that out as I navigated through why messages would appear to have no text. I was never too savvy at decoding, but I used some good ol’ Claude to help me out, so it worked out. I will eventually showcase my achievements for this project on the playground page. Though I’m unsure about sharing the code. I’ll need to see if I can make sure to never upload their phone numbers for obvious reasons, but I digress.

# Bug of the day

The decoding of the messages was horrific. More than that though, I’ve been trying to figure out the Unkown messages and NaN interactions I was getting that were skewing my data. As it turned out, there were some alternate numbers and emails of mine that got caught as unknown. Along with that, there were messages within the chat.db that would just have nothing of value to add to anything, so I had to get rid of those since I had an Unknown fallback. Once I realized that the messages themselves gave no input, I sorted them out, and now my data has never been cleaner.