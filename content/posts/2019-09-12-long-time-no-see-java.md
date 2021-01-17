---
type: post
title: Long time no see, Java!
date: 2019-09-12T16:55:23+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: "@ansidev"
permalink: /java/coding-notes-001/
featuredImage: /uploads/2019/09/java.png
categories:
  - Programming
  - Java
tags:
  - notes
---
# Long time no see, Java!

It has been 2 years since I came back to Java programming and there are many changes!

After 2 weeks, there are many notes I want to share with you:

  - [Oracle JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) is not free of charge anymore for production.

    You can consider some of alternative solutions:
      - [Oracle OpenJDK](https://jdk.java.net/).
      - [AdoptOpen JDK](https://adoptopenjdk.net/).
      - [Azul Zulu](https://www.azul.com/downloads/zulu-community/).
  - Solution for [Circular Dependencies Problem](https://www.baeldung.com/circular-dependencies-in-spring)
  - Problem `Encoded password does not look like BCrypt`.
    - Why? [StackOverflow topic](https://stackoverflow.com/questions/49582971/encoded-password-does-not-look-like-bcrypt).
    - My solution:
    ```java
    String hashedPassword = user.getPassword();
    StringBuilder sb = new StringBuilder(hashedPassword);
    sb.setCharAt(2, 'a');
    final String patchedHashedPassword = sb.toString();
    Boolean isMatchedPassword = passwordEncoder.matches(password, patchedHashedPassword);
    ```
  - Problem while parsing OAuth2 JSON nested response.
    - Why? [GitHub Issue](https://github.com/spring-projects/spring-security/issues/6463).
    - My Solution (based on solution from an answer): [OAuth2 Access Token Nested Json Response Http Message Converter](https://gist.github.com/ansidev/8f4291d9a177ca2dd5d6fce8660c1f43/).

(To be continued...)
