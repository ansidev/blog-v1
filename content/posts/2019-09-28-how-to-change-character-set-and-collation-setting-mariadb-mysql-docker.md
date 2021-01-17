---
type: post
title: How to change character set and collation setting MariaDB/MySQL Docker?
date: 2019-09-28T23:39:24+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: "@ansidev"
permalink: /docker/how-to-change-character-set-and-collation-setting-mariadb-mysql-docker
featuredImage: /uploads/2019/09/docker.png
categories:
  - Programming
  - Docker
tags:
  - notes
  - mariadb
  - mysql
  - character set
  - collation
---
# How to change character set and collation setting MariaDB/MySQL Docker?

  ```shell
  FROM mariadb

  RUN { \
      echo '[mysqld]'; \
      echo 'character-set-server=utf8mb4'; \
      echo 'collation-server=utf8mb4_unicode_ci'; \
  } > /etc/mysql/conf.d/charset.cnf
  ```
