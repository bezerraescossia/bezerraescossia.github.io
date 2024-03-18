---
layout: post
id: 1
title: What are "Slowly Changing Dimensions" (SCDs)?
date: 2024-03-15 16:40:16
description: Discover the essence of Slowly Changing Dimensions (SCDs) in data management. Explore their role in handling evolving data over time efficiently.
tags: information-modeling data-engineering
categories: knowledge-pills
image: /assets/img/01.excalidraw.png
---

Slowly Changing Dimensions (SCD) is a concept used in data warehousing and data management to handle changes in data over time, particularly in dimensional modeling.

Imagine you have a database storing information about something, like a product or a person. Now, what if this information changes over time? Slowly Changing Dimensions (SCDs) refer to how we handle these changes in data over time, especially in a Data Warehouse setup. In simpler terms, it's about managing updates and history in databases.

And why it has that name? Think of dimensions as different aspects or attributes of something you're tracking. Now, if these dimensions change gradually over time, that's where the 'slowly changing' part comes in. For instance, consider a product's price. It doesn't change every second like a stock price, but it might change once in a while, slowly. Hence, "Slowly Changing Dimensions."

Remember, Data Warehouses are like archives of data - they store information over time. They're non-volatile, meaning once data is stored, it doesn't change (unless we're talking about SCDs!). Also, they're versioned, which means we keep track of different versions of data as it evolves.

SCDs has different types...

- **Type I** is the simplest type. When a change occurs, the old data is simply overwritten with the new data. It's like having a whiteboard where you erase the old price and write the new one. For example, if a person changes their last name after getting married, the old last name is replaced with the new one, and there's no record of the change. Type I  is suitable when historical changes aren't important or when you don't need to keep a detailed history of changes. It's best used when only the current state of data matters, and historical information can be safely overwritten.
  
- In **Type II** we keep track of historical changes by creating a new record for each change. It's like taking a snapshot of the data at different points in time. For instance, if a product's price changes, we don't overwrite the old price; instead, we create a new entry with the new price and a timestamp, so we can see the price history over time. Type 2 is ideal when you need to maintain a complete history of changes over time without losing any information. It's suitable for situations where you require a detailed audit trail and need to analyze how data evolves over time.

- In **Type III** we maintain both current and previous versions of data but in separate columns. It's like having two separate sections for 'old' and 'new' information. For example, if a customer changes their address, we would have columns for both the old address and the new one, allowing us to see the change without losing the old information. Type 3 is useful when you need to balance between keeping historical information and maintaining simplicity in data structures. It's suitable for scenarios where you want to track some changes over time but don't need a complete history.

- In **Type IV** we maintain a separate table to store historical data while still updating the main table with current information. Type 4 is suitable when you need to maintain a complete history of changes but want to avoid cluttering the main table with historical data. It's beneficial when you have a large dataset and want to optimize query performance by separating current and historical data.

In summary, Slowly Changing Dimensions help us keep track of how things change over time in data warehouses. By understanding the different types of SCDs, we can manage these changes effectively and keep our data organized and reliable.

---

## Quizz

1. What is the purpose of Slowly Changing Dimensions (SCD) in data warehousing and data management?
2. What distinguishes Data Warehouses from other types of databases in terms of data volatility?
3. What does Type I SCD involve in terms of handling changes in data?
4. When is Type I SCD considered suitable to use?
5. Describe the approach of Type II SCD in handling changes in data.
6. What is the primary advantage of using Type II SCD?
7. How does Type III SCD differ from Type II in terms of maintaining historical data?
8. In which scenario is Type IV SCD beneficial?

---

## Answers

1. To handle changes in data over time, particularly in dimensional modeling.
2. Data Warehouses are non-volatile, meaning once data is stored, it doesn’t change (unless dealing with SCDs).
3. Overwriting the old data with the new data.
4. When historical changes aren’t important or when only the current state of data matters.
5. Creating a new record for each change to maintain a complete history of changes over time.
6. Maintaining a detailed audit trail and analyzing how data evolves over time.
7. Type III maintains both current and previous versions of data in separate columns.
8. When there's a need to maintain a complete history of changes but want to optimize query performance by separating current and historical data.