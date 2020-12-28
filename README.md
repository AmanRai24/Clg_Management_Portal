# COLLEGE MANAGEMENT PORTAL
> - Incompleted
> - created a portal so that students are able to submit assignments and the teacher is able to evaluate those assignments and assign grades.

## Basic Funcionality

- TEACHER 

  1. [Loging] => (email,password)
  2. [Signup] => (name,email,subject,password)
  3. [Add New Assignment[] => (FILE,TITLE, DESCRIPTION,DEADLINE)
  4. See who SUBMIITED the assignment.
  5. can GRADE the student assignment.

- STUDENT 
  1. [Loging] => (email,password)
  2. [Signup] => (name,email,password)
  3. See All upcoming assignment.
  4. can Submit the assignment.
  5. can see the score of the assignment

## Folder Structure

.

    ├── client-side(frontend)
      ├── public
          ├── index.html
          ├── images
      ├── src
          ├── Action
              ├── (contains all actions type and action creators)
          ├── Component
              ├── (contains all react component used in website)
          ├── Helpers
              ├── (contains different URLs for API call and other userfull data)
          ├── Reducer
              ├── (contains all reducers)
          ├── Store
              ├── (config react store to keep data)
          ├── index.css
          ├── index.js
      ├── index.js
      ├── package.json
      ├── package-lock.json
      ├── .gitignore

    ├── config
        ├── (contain config for mongo and passport)
    ├── controllers
        ├──  (contain different controllers)
    ├── models
        ├──  (contain model schema)
    ├── routes
        ├──  (contain different routes)
    ├── index.js
    ├── package.json
    ├── .gitignore

.

## Getting Started

1. Clone the project: [clone](https://github.com/AmanRai24/Clg_Management_Portal.git) or Download the folder.
2. Go to folder.
3. Run command `npm install`
4. Run command: `cd client`
5. Run command: `npm start`
6. Go to https://localhost/3000 to use the application.
7. Happy Learning ❤️
