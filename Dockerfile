FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY pura-estetica/ /usr/share/nginx/html/

RUN rm -rf /usr/share/nginx/html/node_modules \
    && rm -f /usr/share/nginx/html/.htaccess

EXPOSE 80
