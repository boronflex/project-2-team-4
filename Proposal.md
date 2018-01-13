#The goal of our app is to create school bus tracking app.

# Name:
TBD

# Some inspiration:
- https://herecomesthebus.com/
- https://www.reddit.com/r/bitchimabus/

# MVC based on burger app

# Bare minimum our app will have:

Philosphy- administrator handles this and the driver/parents don't interact.  They pass on information to riders/drivers

*A bus section*
- add buses
- assign a bus driver to a bus

*A rider section*
- add rider name
- add rider address
  - possibly use api to convert address to x/y or lat/long and store instead
- assign rider to a bus

*Routing section*
- Use Google maps to design a route for the bus

# Medium Goals:

Philosphy- administrator handles data entry and assignments.  Drivers can enter their name or bus # and get route map and manifest.
Parents can enter their child's name and get driver name and bus number.

*A bus section*
- store photo of driver
- query field search by driver name or bus number
  - get manifest and route map

*A rider section*
- query field search by student name
  - get bus number and driver name

*Routing section*
- route optimises for available passengers
  - automatically fills up each bus in a logical route

# Hard Goals:

Philosphy- fully fleshed out routing handler, includes full interaction with admin and users- drivers and riders.

- has a login handler for data security

*A bus section*
- driver login
- incorporates stops on route- not every house
- comments section

*A carpool section*
- emulates the bus section

*A rider section*
- rider login
- adds option to carpool
- assigns to stop
- use twilio to notify riders by text
 - https://www.twilio.com/docs/
- comments section 

*Routing section*
- adds timing schedule to route-  i.e. stop one at 6:30am, stop two at 7:00am
- incorporates bus stops instead of just stopping at every house

