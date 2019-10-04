package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"text/template"

	_ "github.com/go-sql-driver/mysql"
)

//Card DB Table
type Card struct {
	CardID     float64 `json:"Card_id"`
	Cost       float64 `json:"Cost"`
	CardName   string  `json:"Cardname"`
	CardType   string  `json:"Cardtype"`
	Element    string  `json:"Element"`
	Rarity     string  `json:"Rarity"`
	CardSet    string  `json:"Cardset"`
	Code       string  `json:"Code"`
	Price      float64 `json:"Price"`
	Featured   bool    `json:"Featured"`
	Outofstock bool    `json:"Outofstock"`
}

//CustomerInfo DB Table
type CustomerInfo struct {
	CustomerID      float64 `json:"Customer_id"`
	FirstName       string  `json:"FirstName"`
	LastName        string  `json:"LastName"`
	CustomerAddress string  `json:"CustomerAddress"`
	Country         string  `json:"Country"`
	Phone           string  `json:"Phone"`
	Email           string  `json:"Email"`
}

var db *sql.DB
var err error
var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.gohtml"))
}

func main() {
	// user:password@tcp(localhost:5555)/dbname?charset=utf8
	// db, err = sql.Open("mysql", "admin:131admin@tcp(itainstanceone.cruvfhq20sen.us-east-1.rds.amazonaws.com:3306)/Chocobo_Inn?charset=utf8")
	db, err = sql.Open("mysql", "root:123mysql@tcp(db:3306)/Chocobo_Inn?charset=utf8") //docker
	// db, err = sql.Open("mysql", "root:!@#PAss123@tcp(localhost:3306)/Chocobo_Inn?charset=utf8") //local
	check(err)
	defer db.Close()

	err = db.Ping()
	check(err)

	http.HandleFunc("/", home)
	http.HandleFunc("/products", products)
	http.HandleFunc("/contact", contact)
	http.HandleFunc("/admin", admin)
	http.HandleFunc("/write", write)
	http.HandleFunc("/read", read)
	http.HandleFunc("/update", update)
	http.HandleFunc("/delete", delete)
	http.HandleFunc("/customer", customer)
	http.Handle("/favicon.ico", http.NotFoundHandler())
	http.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("assets"))))
	err := http.ListenAndServe(":8080", nil)
	check(err)
}

func home(w http.ResponseWriter, req *http.Request) {
	err := tpl.ExecuteTemplate(w, "home.gohtml", nil)
	if err != nil {
		log.Fatalln("Template did not execute:", err)
	}
}

func products(w http.ResponseWriter, req *http.Request) {
	err := tpl.ExecuteTemplate(w, "products.gohtml", nil)
	if err != nil {
		log.Fatalln("Template did not execute:", err)
	}
}

func contact(w http.ResponseWriter, req *http.Request) {
	err := tpl.ExecuteTemplate(w, "contact.gohtml", nil)
	if err != nil {
		log.Fatalln("Template did not execute:", err)
	}
}

func admin(w http.ResponseWriter, req *http.Request) {
	err := tpl.ExecuteTemplate(w, "admin.gohtml", nil)
	if err != nil {
		log.Fatalln("Template did not execute:", err)
	}
}

func write(w http.ResponseWriter, req *http.Request) {
	var data Card
	rcvd := json.NewDecoder(req.Body)
	rcvd.DisallowUnknownFields()

	enableCors(&w)

	err := rcvd.Decode(&data)
	if err != nil {
		log.Fatalln("error:", err)
	}

	sqlStatement := `
	INSERT INTO Cards (Cost, Cardname, Cardtype, Element, Rarity, Cardset, Code, Price)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?)
	`
	_, err = db.Query(sqlStatement, data.Cost, data.CardName, data.CardType, data.Element, data.Rarity, data.CardSet, data.Code, data.Price)
	if err != nil {
		check(err)
	}
}

func customer(w http.ResponseWriter, req *http.Request) {
	var cust CustomerInfo
	rcvd := json.NewDecoder(req.Body)
	rcvd.DisallowUnknownFields()

	enableCors(&w)

	err := rcvd.Decode(&cust)
	if err != nil {
		log.Fatalln("error:", err)
	}

	sqlStatement := `
	INSERT INTO Customer (FirstName, LastName, Customer_Address, Country, Phone, Email)
	VALUES (?, ?, ?, ?, ?, ?)
	`
	_, err = db.Query(sqlStatement, cust.FirstName, cust.LastName, cust.CustomerAddress, cust.Country, cust.Phone, cust.Email)
	if err != nil {
		check(err)
	}
}

func check(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

//
func read(w http.ResponseWriter, req *http.Request) {

	enableCors(&w)
	rows, err := db.Query(`SELECT * FROM Chocobo_Inn.Cards`)
	check(err)
	defer rows.Close()

	enableCors(&w)

	var Cards []Card
	for rows.Next() {
		Card := Card{}
		err := rows.Scan(&Card.CardID, &Card.Cost, &Card.CardName, &Card.CardType, &Card.Element, &Card.Rarity, &Card.CardSet, &Card.Code, &Card.Price, &Card.Featured, &Card.Outofstock)
		check(err)
		Cards = append(Cards, Card)
	}
	json.NewEncoder(w).Encode(Cards)
}

func update(w http.ResponseWriter, req *http.Request) {
	var data Card
	rcvd := json.NewDecoder(req.Body)
	rcvd.DisallowUnknownFields()

	enableCors(&w)

	err := rcvd.Decode(&data)
	if err != nil {
		log.Fatalln("decode_error:", err)
	}

	sqlStatement := `
	UPDATE Cards SET Featured=?
	WHERE Code=?
	`

	_, err = db.Query(sqlStatement, data.Featured, data.Code)
	if err != nil {
		check(err)
	}
}

func delete(w http.ResponseWriter, req *http.Request) {
	var data Card
	rcvd := json.NewDecoder(req.Body)
	rcvd.DisallowUnknownFields()

	enableCors(&w)

	err := rcvd.Decode(&data)
	if err != nil {
		log.Fatalln("decode_error:", err)
	}

	sqlStatement := `
	UPDATE Cards SET Outofstock=?
	WHERE Code=?
	`

	_, err = db.Query(sqlStatement, data.Outofstock, data.Code)
	if err != nil {
		check(err)
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

/*
r.method == http.methodGet

remove images
docker system prune -a

Server
docker build -t go-server .
docker run -d -p 8080:8081 go-server

DB
docker build -t chocobo-inn .
docker run -d -p 3308:3306 -e MYSQL_ROOT_PASSWORD=123msql custom_choco:1.0
*/
