FROM mysql:latest

# 도커환경의 환경변수 설정

ENV MYSQL_DATABASE docker

# 도커환경에서 컨테이너를 생성 시 스크립트를 실행하는 폴더 
# 미리 작성된 스크립트를 이용 

COPY ./scripts /docker-entrypoint-initdb.d/

# 이미지 빌드 
# docker build -t {name} . 

# 컨테이너 실행 
# -e 도커환경의 환경변수 설정 

# docker run --name {name} -d -p 3307:3306 -d -e MYSQL_ROOT_PASSWORD={password}  {image}