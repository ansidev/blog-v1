---
type: post
title: MySQL - How to list all tables that contain a specific column name?
date: 2021-03-31T01:22:32+07:00
author: ansidev
gravatar: a2ac3c4477e717c7fa15041d907e71fd
twitter: '@ansidev'
permalink: /database/mysql-list-all-tables-contain-specific-column-name
categories:
  - Database
  - MySQL
  - Tips and tricks
tags:
  - databse
  - mysql
---

# Problem

You want to look for tables using the name of columns in them.

# Solution

```sql
SELECT DISTINCT
  table_name
FROM
  information_schema.columns
WHERE
  table_schema = 'schema_name'
  AND column_name IN('column_name_01', 'column_name_02')
```

Or a more simple way:

```sql
SELECT
  *
FROM
  information_schema.columns
WHERE
  column_name = 'column_name';
```
