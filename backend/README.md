# http-api

docker build -t my-shop-http-api -f Dockerfile.http .
docker run -p 4200:4200 my-shop-http-api

# graphql-api

docker build -t my-shop-graphql-api -f Dockerfile.graphql .
docker run -p 4000:4000 my-shop-graphql-api

# using compose for both apis

docker-compose up --build
