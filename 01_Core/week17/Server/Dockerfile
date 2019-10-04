FROM golang:1.13
MAINTAINER bgrullon
WORKDIR /go/src/app
COPY . .

RUN go get -u github.com/go-sql-driver/mysql
RUN go build main.go

EXPOSE 8080

CMD ["./main"]

