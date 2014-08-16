---
layout: post
title: Ruby On Rails Security
---
<!---
Ruby on Rails
-->
Synopsis
---------------
Ruby on Rails, often simply referred to as Rails, is an open source web application framework which runs via the Ruby programming language. It is a full-stack framework.

Description
-----------------
The Rails framework abstracts developers from quite a bit of tedious work and provides the means to accomplish complex tasks quickly and with ease. New developers, those unfamiliar with the inner-workings of Rails, likely need a basic set of guidelines to secure fundamental aspects of their application. 

Mitigation
---------------
* To protect injection attacks, Ruby offers a function called “eval” which will dynamically build new Ruby code based on Strings. It also has a number of ways to call system commands.

* Use security header, to set a header value, simply access the response headers object as a hash inside the controller (often in a before/after_filter). 

For more information visit,

[OWASP Ruby On Rails Cheat Sheet](https://www.owasp.org/index.php/Ruby_on_Rails_Cheatsheet)

[RAILS GUIDE ON SECURITY](http://guides.rubyonrails.org/security.html)

CVSS Base Score:
----------------------------

