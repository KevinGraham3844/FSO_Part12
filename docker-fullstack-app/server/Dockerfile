FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

USER node

ENV PORT=3001

ENV MONGODB_URI=mongodb+srv://fullstack:codingishard@cluster0.kwmft4u.mongodb.net/PhonebookDB?retryWrites=true&w=majority

CMD npm start