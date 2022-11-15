# How to use this repo

- Clone this repo
- copy .env.example to .env
- Set all env options based on project name

## This repo includes
- Axios
- Formik
- Cookie (nookies)
- Redux Toolkit
- Toast (react-hot-toast)
- Tailwind
- Tailwind Forms


## Nginx PM2 setup
cd /home/forge/project-folder
git pull origin master

npm install --no-save

npm run build

#pm2 start npm --name "site-domain" --watch -- start (first time only)

pm2 restart site-domain
