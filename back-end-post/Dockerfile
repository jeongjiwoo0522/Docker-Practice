FROM python

WORKDIR /usr/src/app

ENV FLASK_ENV=production

RUN python -m pip install --user --upgrade pip
RUN pip install flask

CMD ["python", "app.py"]