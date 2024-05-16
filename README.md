# Movie Reviewer App | AI Basic App

Welcome to the Movie Reviewer API, a powerful tool designed to leverage the capabilities of Next.js and OpenAI's advanced AI models to generate insightful reviews for movies. This project combines the efficiency and scalability of Next.js with the innovative AI technologies offered by OpenAI, creating a unique platform for movie enthusiasts and professionals alike.

## Features

- **Movie Reviews**: Utilize OpenAI's GPT-based models to generate detailed and personalized movie reviews based on stored Film scripts
- **User Interface**: A sleek and intuitive web interface built with Next.js, ensuring a smooth user experience across devices. Using Tailwind and MUI
- **Integration**: Seamless integration with OpenAI APIs, enabling real-time generation of movie reviews.
- **Scalability**: Designed with scalability in mind, allowing for easy expansion and addition of new features.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Basic understanding of JavaScript and React.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/earlymorningdev/ai-basics.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Copy the `.env.example` file to create your own environment variables file:

   ```
   cp.env.example.env
   ```

4. Update the `.env` file with your OpenAI API key and other required configurations.

5. Run the development server:

   ```
   npm run dev
   ```

6. Access the application at `http://localhost:3000`.

## Deployment

This project has been tested and deployed successfully on Vercel. To deploy:

1. Push your changes to the main branch of your repository.
2. Connect your repository to Vercel through the Vercel dashboard.
3. Configure the deployment settings according to your needs.

Note: Due to the computational intensity of OpenAI's API calls, ensure your hosting provider supports longer execution times if needed.

## Contributing

Please don't this is just for demonstration. If you are interested in extending this please reference this in your own readme

## Potential Improvements

- Remove MUI it is too big for a project like this. Just couldnt be bothered finding something else
- Add an API to fetch the movie scripts I couldn't find one easily so I just built this with mock data
- Add Auth to prevent people spaming your AI credits

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

This README provides a comprehensive overview of the Movie Reviewer API, including its features, setup instructions, and deployment options. It serves as a starting point for both users and contributors looking to explore and enhance this innovative application leveraging Next.js and OpenAI APIs.

Citations:
[1] https://community.openai.com/t/nextjs-openai-api-full-stack-tutorial/46563
[2] https://codyde.io/story-nextjs-openai
[3] https://www.reddit.com/r/nextjs/comments/13sjw9v/proposal_writer_using_nextjs_and_open_ais_api/
[4] https://github.com/gannonh/openai-api-next-starter
[5] https://github.com/SpellcraftAI/nextjs-openai/blob/canary/README.md
[6] https://stackoverflow.com/questions/77397517/making-api-calls-to-open-ai-using-next-js-and-react
[7] https://www.youtube.com/watch?v=JdsSDxTRdeU
[8] https://community.openai.com/t/openai-assistant-starter-kit/697060
[9] https://www.quora.com/How-important-is-it-to-create-a-Readme-document-before-or-during-a-software-dev-project
[10] https://learn.microsoft.com/en-us/python/api/overview/azure/ai-textanalytics-readme?view=azure-python
