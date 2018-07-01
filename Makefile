.PHONEY: docker_run
docker_run:
		echo 'Running necessary docker scripts.. please wait' && \
		docker build -t shawnkoon/tweet-get-get . && \
		docker run --rm -d --name=shawnkoon_json-server -p 3030:80 -v `pwd`/database.json:/data/db.json clue/json-server && \
		docker run --rm -d --net=host --name=shawnkoon_etl shawnkoon/tweet-get-get npm run start:etl && \
		docker run --rm -d --name=shawnkoon_client -p 3000:3000 shawnkoon/tweet-get-get npm run start

.PHONEY: docker_clean
docker_clean:
		docker stop shawnkoon_json-server shawnkoon_client
