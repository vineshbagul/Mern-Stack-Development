# sad-02-2022-project-srh_team_red_2022

# Project Description

Software Architecture and Development 2022

Project Proposal: Postagram – Social Media Application


Abstract: Postagram is a social media application where users from all around the world can post their memories for e.g., the places they visited or the creative or wildest things they have done, creating the albums of their memory posts. 
User will have a Memory Post page (Landing Page) where he can see all the memories he and others have posted / Like or unlike the posts.
The Memory Detail Page: if user clicks on any post he has posted, the user will be able to see the detailed informations.
Sign in /Register Page. Without logging in user cannot create their own posts or like anyone’s posts or do any operations. They will be just able to view the application.

Features:  These are the current features we are planning to implement; we may extend it if we are able to implement the must have as given below:

Pagination: It will allow to fetch only certain number of memories at a time on different pages followed by each other.

Search Filters:
User can search using the search memory filter (title) and search any memory user has posted.

User can search using the Search Tag filter based on the user has tagged the memory to certain tag. For e.g., Memory title: Schloss Heidelberg Palace, tags: #europe #Germany #Heidelberg.

CRUD Operation: We can create the post by adding/Submitting the posts by adding comments as well, Read the posts, Update/modify the existing posts, and delete the posts. We will be using Rest Api.

Authentication: The user will be able to login using the google account automatically or register. For this we will be using Google Oauth and JWT token i.e Json web tokens.

Lastly, we will try to refractor our user interface and make our application Mobile responsive.
Technical Aspects:

We will be using a MERN stack approach as it is easier for faster deployment of full stack web applications.

In Mern Stack we will have:

-Mongo DB as our Database, as it has many advantages, we don’t need to define variable types, and it removes the complex object-relational mapping (ORM).
-Express Js for front end.
-Node js for back end, (Runtime environment which allows you to write backend code using JS).
- React: In this by using React we will learn React Functional components and their reusability, file and folder structure and React Redux system.

(We all are currently new to Dockers , but we will try to implement it as it is mentioned in the minimum requirements)

For web-based clients, it is optional, but recommended, to make the client available via a Docker container.: We are searching on this and will try to implement this as well (Frontend).
The deployment of the backend is realized via a Docker container. Optional but recommended is to split the backend into different containers using Docker Compose, e.g. for database, authentication service, API etc.:  We are searching on this and will try to implement this as well (Backend).
