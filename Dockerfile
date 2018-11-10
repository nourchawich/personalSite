FROM nginx:1.15.0-alpine

RUN chgrp -R 0 /var/cache/nginx && \
    chmod -R g=u /var/cache/nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./src /usr/share/nginx/html/

EXPOSE 55580
