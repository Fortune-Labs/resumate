## ResuMate 

I developed Resumate as a portfolio project for the foundations section at ALX Software Engineering. ResuMate is a web application designed to help individuals craft professional and visually appealing resumes with ease.

Please note that this work is still in progress.

-- Fortunatus


<h1 align="center">Resumate</h1>
<p align="center">
  A friendly resume builderapplication.
</p>

<p align="center">
  <img src="https://github.com/Fortune-Labs/resumate/blob/master/refrontend/src/assets/images/logol.png" alt="Resumate logo"/>
</p>

## Description :bulb:

Resumate is a resume builder web application.

Strive not to be a success, but rather to be of value. "Build your skills not your resume" - Yes but resume's are required for job applications. Getting all your skills on paper can be stressfull. We have all had those moments, where exclaim - "mm, here is a job oppening, I need a resume" - but know we end not writing a resume to an expectation. Now, instead of getting stuck with ideas, use resumate as your resume builder. 



## Resume Idea Craft

For a more in-depth description of Resuate desgn thinking as well as an overview of its tech stack and development process, I have included google doc. 

- [Introducing Resumate](https://docs.google.com/document/d/1hxAhsk4ow8YoI0C14NAuudbsIwOxW2xoYqVGN3NCG0M/edit?usp=sharing)


## Tech Stack :poodle:

<p align="center">
  <img src="https://github.com/Fortune-Labs/resumate/blob/master/assets/Resumeate-stack.png"
       alt="Resumate Tech Stack"
       width="600"
  />
</p>

### Dependencies :couple:

**Front-End**:

| Tool/Library                                                                       | Version |
| ---------------------------------------------------------------------------------- | ------- |
| [React](https://reactjs.org/)                                                      | ^18.2.0 |
| [Tailwinds CSS](https://tailwindcss.com/)                                            | ^3.3.2.1  |
| [Vite](https://vitejs.dev/)                                              | ^4.3.9 |
| [Axios Auth](https://axios-http.com/)                                 | ^1.4.0 |
| [@dwqs/react-virtual-list](https://www.npmjs.com/package/@dwqs/react-virtual-list) | ^1.0.0  |
| [clipboard-copy](https://www.npmjs.com/package/clipboard-copy)                     | ^3.0.0  |

View the complete list of front-end dependencies in the corresponding [package.json](./refrontend/package.json).

**Back-End**:

| Tool/Library                           | Version |
| -------------------------------------- | ------- |
| [Django](https://www.djangoproject.com/)     | 4.2.3    |
| [MangoDB](https://www.mongodb.com/)  | ^6.0    |


**Packaging/Deployment**:

| Tool/Library                      | Version  |
| --------------------------------- | -------- |
| [Node.js](https://nodejs.org/en/) | ^v16.17.0 |
| pip                        | ^23.1.2.0 |

### Front-End :dog2:

[View the dedicated front-end README.md.](./refrontend)

### Back-End :feet:

[View the dedicated back-end README.md.](./rebackend)



## Authentication :key:

<!-- <p align="center">
  <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd0.awsstatic.com%2Fpartner-network%2Fpartner-logos%2FMobile%2520Competency%2520Partner%2520Logos%2F600x400_AuthO_Logo.png&f="
       alt="Axios Logo"
       width="250"
  />
</p> -->

Passwords are no fun. Resumate features a passwordless user authentication process managed by [Axios](https://auth0.com/), [Google](https://developers.google.com/identity/sign-in/web/sign-in) and  [Apple](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple) . The process works as follows:

1. User enters email (for login) or both email + username (for signup). Front-end initially sends email/username to back-end.

   1. If logging in, and an account does not exist with the given email, back-end returns a redirect code, and user is directed to sign-up.
   2. Otherwise, back-end generates and returns a challenge token associated with the email.

2. Front-end temporarily stores challenge token in `localStorage`, then uses the Axios API to send a login email to the user. The login email includes a random code that user must enter to verify account.

3. Upon entering the verfication code, the user is redirected to the home page of Resumate. The redirect occurs on a URL hashed by Axios which the front-end parses to retrieve the user's Axios profile.

4. Front-end pulls up challenge token from `localStorage` and returns it to the back-end with the verified email. Back-end generates and returns a bearer token in the form of a cookie.

   1. After being returned to the back-end, the challenge token is cleared from `localStorage`.

5. The bearer token has been set and the user can fully acccess their profile!

## Authors :black_nib:

- **Fortunatus A Wulnye** <[Fortune-Labs](https://github.com/Fortune-Labs)>


## License :lock:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
