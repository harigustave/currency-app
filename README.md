# currency-app

This is a Currency App created using NodeJS

Functionalities: By using commandline, User can:

1. Request the Most Recent Real-time Exchange Rate(s)
2. Request Historical Rates for a Specific Day
3. Convert any Amount from one Currency to Another, Real-Time

Procedures:
===========

1. Clone repo: git clone https://github.com/harigustave/currency-app.git
2. Install local packages: npm install
3. Install global packages: npm install nodemon -g

App Features:
=============
1. Get Latest Currency: node app **current_currency** --currency='USD **or** RWF etc...'
2. Get Historical Rate(s): node app **history_rate** --currency='USD **or** RWF etc...'
3. Convert Curreny: node app **convert_currency** --from="**Currency To Convert From**" --to="**Currency To Convert To**"
