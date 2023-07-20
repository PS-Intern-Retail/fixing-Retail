FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm install @material-ui/icons

# RUN npm install @mui/material @emotion/react @emotion/styled

# # RUN npm install react-router-dom

# RUN npm install react-icons
# RUN npm install ajv@>=8
# RUN npm install @material-ui/core@^4.0.0 react@^16.8.0
# RUN npm install typescript@>=2.7
# RUN npm install typescript@>=2.8.0
# RUN npm install @material-ui/core@^4.0.0 react@^16.8.0 react-dom@^16.8.0
# RUN npm install ajv@^6.9.1
# # RUN npm install react-dom@^16.8.0
# RUN npm install react@^18.2.0
# # RUN npm install react@latest
# RUN npm install react-dom@latest
# RUN npm install react@^18.0.0




COPY . .

EXPOSE 3000
# RUN npm run build
CMD ["npm", "start"]