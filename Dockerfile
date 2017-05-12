FROM node:7.7.1-alpine

WORKDIR /www
EXPOSE 3000
CMD npm run start

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn

ADD ./ /www
RUN cp -R /tmp/node_modules /www

ARG NODE_ENV=dev
RUN echo $NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN npm run build