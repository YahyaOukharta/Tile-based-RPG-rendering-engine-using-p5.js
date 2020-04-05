docker rm -f gamecon
docker run -dit --name gamecon -p 3001:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4-alpine