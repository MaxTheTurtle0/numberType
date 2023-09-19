<p align="center">
    <br> 
    <a href="https://authjs.dev" target="_blank">
        <img height="128" src="https://authjs.dev/img/logo/logo-sm.png" />
    </a>
    <a href="https://kit.svelte.dev" target="_blank">
        <img height="128" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" />
    </a>
    <h1 align="center"><strong>NumberType<strong> - Built with SvelteKit, Auth.js and Prisma</h1>
</p>

### Video Demo: Video not available yet
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
- To practice with your new contact, go to the practice page using the navbar.

## Technologies Utilized and the Reasons Behind My Choices:
### Why SvelteKit?
I have experience with both Svelte and SvelteKit, and I find them comfortable to work with. They offer an excellent Developer Experience, largely attributed to their compiler and in terms of performance, they stand out compared to other frameworks. 

One common concern when considering Svelte and SvelteKit is the size of the community. However, I believe that this concern may not be as significant as it seems. This is because, at its core, Svelte/Kit closely resembles HTML, CSS, and JavaScript, albeit organized into multiple components and pages.

### Why Auth.js?
I hadn't used Auth.js prior to this project, and it's currently in transition from Nextauth.js to Auth.js. However, I found it intriguing and heard positive feedback about it, so I decided to give it a try. After dealing with OAuth manually in the past, such as when working with the Spotify Web API for a project, I realized it didn't provide the best Developer Experience. Therefore, I opted for a service, which would handle that for me.

### Why Prisma? And why I regret choosing Prisma.
I initially chose Prisma for its ease of use and fantastic Developer Experience. However, I wouldn't make the same choice again due to Prisma's rough cold starts and its potential for generating overly complex and inefficient queries in certain scenarios. While this isn't a significant concern for this particular project, which likely wont be deployed, I'll explore other solutions like Drizzle for future projects.

### Why I choose JSDoc instead of TypeScript.
In my opinion, JSDoc already provides me with the benefits of TypeScript, so I don't see a compelling reason to use TypeScript for this project. This is especially true because it's not a very large project with a large number of contributors.
