<p align="center">
    <br> 
    <a href="https://authjs.dev" target="_blank">
        <img height="128" src="https://authjs.dev/img/logo/logo-sm.png" />
    </a>
    <a href="https://kit.svelte.dev" target="_blank">
        <img height="128" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" />
    </a>
    <h1 align="center">NumberType - Built with SvelteKit, Auth.js and Prisma</h1>
</p>

### Video Demo: https://www.youtube.com/watch?v=ofimdj8HRPM
### Description:
## What's the thought behind NumberType?

- **Problem**: 
  - People rely on smartphones for storing phone numbers, forgetting them in the process.
  - Lack of confidence in typing numbers without looking at the keyboard.

- **Solution**: 
  - **NumberType**: 
    - Helps users practice typing phone numbers.
    - Improves keyboard typing skills.
  
- **Benefits**:
  - Ensure access to critical phone numbers in situations without a phone.
  - Boost confidence in typing numbers accurately.

## How to get started?

- Sign in using Google, GitHub, or Twitter.
- Add contacts:
  - Click the "+" icon in the navbar.
  - On mobile, expand the navbar by clicking the hamburger menu first.
  - You will be taken to the "/contacts/add" page.
  - Provide contact's name and phone number.
  - Click the submit button to save the contact.
- After submitting the contact, you will be redirected to the contacts page.
- In the contacts page, you can:
  - View all of your contacts.
  - Delete contacts you no longer want to keep/practice.
- Practicing:
  - To practice with your new contact, go to the practice page using the navbar.
  - You get instant feedback if you make a mistake.
  - You can show or hide the contact's phone number.
- Searching:
  - If you have a lot of contacts, you can search for a specific contact using the search bar in the navbar.
  - You can search by name and the results will be filtered accordingly.
  - If you click on a result, you will be taken to that contact on the contacts page.

## Technologies Utilized and the Reasons Behind My Choices
### Why SvelteKit?
I have experience with both Svelte and SvelteKit, and I find them comfortable to work with. They offer an excellent Developer Experience, largely attributed to their compiler and in terms of performance, they stand out compared to other frameworks. 

One common concern when considering Svelte and SvelteKit is the size of the community. However, I believe that this concern may not be as significant as it seems. This is because, at its core, Svelte/Kit closely resembles HTML, CSS, and JavaScript, albeit organized into multiple components and pages.

### Why Auth.js?
I hadn't used Auth.js prior to this project, and it's currently in transition from Nextauth.js to Auth.js. However, I found it intriguing and heard positive feedback about it, so I decided to give it a try. After dealing with OAuth manually in the past, such as when working with the Spotify Web API for a project, I realized it didn't provide the best Developer Experience. Therefore, I opted for a service, which would handle that for me.

### Why I Regret Using Prisma
I initially chose Prisma for its ease of use and fantastic Developer Experience. However, I wouldn't make the same choice again due to Prisma's rough cold starts and its potential for generating overly complex and inefficient queries in certain scenarios. While this isn't a significant concern for this particular project, which likely wont be deployed, I'll explore other solutions like Drizzle for future projects.

### Why I Chose JSDoc Over TypeScript
In my opinion, JSDoc already provides me with the benefits of TypeScript, so I don't see a compelling reason to use TypeScript for this project. This is especially true because it's not a very large project with a large number of contributors.

### Why I Regret Not Using Tailwind CSS
When I started this project I still used normal CSS for every project in which I had to style anything on the web. I knew about Tailwind CSS but I didn't like it because of the following reasons:

1. I was under the impression that Tailwind limits you. After using it I realiesed that yes it does limit you but it only limits the bad decisions you could make.
2. Tailwind makes your classes ugly. This is still a valid point but its also really great that you can see what styles apply on the first look.

## Other Features:
### Page Transitions
I implemented a fade transition between pages, uitlizing the View Transitions API. 

### API endpoint
I created an API endpoint to fetch all contacts for a user, which proves useful for the search feature.

## Final Thoughts
Obivously, this project is not perfect. I'm still learning and I'm sure there are many things I could have done better. However, I'm proud of what I've accomplished and I'm excited to continue learning and improving my skills. There are still a few things I would do if I were to deploy this project like adding a favicon or minifing the CSS and JS files but since I'm not going to deploy this project I'll leave it as it is. If I should add a guide on how to run this project locally please let me know.
