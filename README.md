# Carson Bruce CV

## Get started

1. `npm install`
2. `npm run dev`

## Deploy

Deployment for a root github page is done via the repository https://github.com/Kauabunga/kauabunga.github.io

1. `npm run build`
2. `manually update index.html ;)`
   - Remove all /\_next scripts
   - Remove \_next folder
   - Inline css
3. `npm start`
4. `npm run deploy:clone`
5. `npm run deploy`
6. `cd kauabunga.github.io && git commit -am "Updated deployment" && git push`
