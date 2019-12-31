FROM nginx
LABEL name="order"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html/order-cms
COPY ../order-client/build /usr/share/nginx/html/order-client
COPY ../nginx.conf /etc/nginx/conf.d
EXPOSE 80
