FROM nginx:1.15.0-alpine

COPY . /usr/share/nginx/html
COPY site.nginx /etc/nginx/conf.d/default.conf
