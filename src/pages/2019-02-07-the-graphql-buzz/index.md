---
path: '/the-graphql-buzz'
date: '2019-02-02'
title: 'The GraphQL Buzz'
author: 'Akanksha Choudhary'
description: 'GraphQL is a new way of fetching data for the APIs. The QL in it stands for Query Language. REST APIs have been a method for data fetching for quite a long time now, which then brings you to think of why graphQL?'
---

<div style="text-align: center">
<img src="https://cdn-images-1.medium.com/max/1600/1*0rzYjFRQYVHy7xLCxjRV1Q.png" />
</div>

GraphQL is a new way of fetching data for the APIs. The QL in it stands for Query Language. REST APIs have been a method for data fetching for quite a long time now, which then brings you to think of why graphQL? Well, graphQL provides a more flexible and efficient alternative to REST. A client can request for all the exact data that it requires from an API and all that data comes to the client bundled in a single entity. Unlike REST, where you had to call all the different endpoints to get various data on a page, in graphQL you make a single call. Let me elaborate this with an example.

Suppose you want to get data for a blog post. You can show data like post title, post content, author name, author avatar, author profile, etc. Now in case of REST APIs, you might have to call endpoints such as ‘/post’, ‘/author-details’, ‘/author/id/posts’, etc. You need to call all the various endpoints to display data on a page. In graphQL, you need to make a single call. See the example below.

Schema definition is very simple and it goes like:
```
type Author {
  name: String!
  avatar: String!
}
```

We need to express relationship between types. ! implies ‘required’.
```
type Post {
  title: String!
  postedOn: Date!
  author: Author! // linked to Author type
}

type Author {
  name: String!
  avatar: String!
  Posts: [Post!]! // an array of posts
}
```

Now let’s see how to query data. GraphQL allows to query nested information.
```
{
  allAuthors {
   	name
    	posts {
      	title
   	 }
  }
}
```

Here allAuthors is the root field. The query above will return the list of authors present in the database with title of the posts they have written. If you want more data such as post date or author avatar, you simply need to add that in the query.
```
{
  "data": {
    "allAuthors": [
      {
        "name": "Akanksha",
        "posts": [
          {
            "title": "What is GraphQL?"
          },
          {
            "title": "Power of GraphQL"
          }
        ]
      },
      {
        "name": "Tanay",
        "posts": [
          {
            "title": "How to get started with React."
          }
        ]
      },
      {
        "name": "Happy",
        "posts": []
      }
    ]
  }
}
```

Well, you see GraphQL has taken a very different approach and it is completely flexible since the structure of the data returned is not fixed. It depends on the data that is asked for. Due to this there is **no over fetching or under fetching** of data which makes it so efficient. You get the exact data you ask for.

---

