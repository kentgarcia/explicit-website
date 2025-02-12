## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Project Structure

1. **app**: Contains the main application files.
   - **`globals.css`**: Global CSS styles for the application.
   - **`layout.js`**: Layout component that wraps around all pages, including the header and footer.
   - **`page.js`**: The home page of the application.
   - **`about/`**: Directory for the About page.
   - **`news/[slug]/page.js`**: Dynamic route for individual news articles.

2. **blogs**: Contains markdown files for blog posts.
   - **`sample.md`**: A sample blog post.

3. **components**: Contains reusable components.
   - **`Footer.js`**: Footer component.
   - **`Header.js`**: Header component.
   - **`Menu.js`**: Navigation menu component.
   - **`PostCard.js`**: Component to display individual posts.
   - **`SearchBar.js`**: Search bar component.
   - **`SearchView.js`**: Component to display search results.

4. **utils**: Contains utility functions.
   - **`getPostMetadata.js`**: Utility function to get metadata for blog posts.

5. **public**: Contains static assets like images and icons.
