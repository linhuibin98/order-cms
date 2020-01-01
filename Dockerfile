FROM nginx
LABEL name="order"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html/order-cms
COPY ./build /usr/share/nginx/html/order-client
COPY ./blog/docs /usr/share/nginx/html/blog
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
