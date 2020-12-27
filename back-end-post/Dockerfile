FROM python

WORKDIR /usr/src/app

ENV FLASK_ENV=production

RUN python -m pip install --user --upgrade pip
RUN pip install flask flask-mysql flask-cors

CMD ["python", "main.py"]

# 컨테이너 실행
# docker run --name {name} -v $(pwd):/usr/src/app -p 5000:5000 -d {image}