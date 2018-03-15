# import necessary libraries
from flask import Flask, render_template
import time
from bs4 import BeautifulSoup
from splinter import Browser
executable_path = {"executable_path": "C:/Users/markg/chromedriver/bin/chromedriver"}
browser = Browser("chrome", **executable_path, headless=True)


# create instance of Flask app
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def home():
    # Visit the costa rica climate site
    url = "https://weather-and-climate.com/average-monthly-Rainfall-Temperature-Sunshine-fahrenheit,san-jose,Costa-Rica"
    browser.visit(url)
    time.sleep(1)
    # Scrape page into soup
    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')
    # Find today's forecast
    todays_forecast = soup.find('div', class_='weather-forecasts todays-weather forecast')
    # Print the max temp
    max_temp = todays_forecast.find('span', class_='temp-max').text
    hurricanes = [
        {
            "name": "Harvey",
            "cat": "Category 4"
        },
        {
            "name": "Irma",
            "cat": "Category 5"
        }
    ]
    return render_template('index.html', hurricane=max_temp)




if __name__ == "__main__":
    app.run(debug=True)
