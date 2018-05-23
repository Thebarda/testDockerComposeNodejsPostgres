FROM node:7
RUN mkdir /test
ADD . /test
WORKDIR /test
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
