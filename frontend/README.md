# Decayed Dojo Frontend

Commands:
- yarn dev: Run Vite only
- yarn tina:dev: Run Tina GraphQL dev server
- yarn dev:cms: Run both Tina dev server and Vite together (local authoring)
- yarn build: Build static assets (auto-generates blog index)

Local authoring flow:
1. yarn dev:cms
2. Open http://localhost:3000/admin
3. Edit posts in Posts collection (reads/writes markdown in public/content/posts)