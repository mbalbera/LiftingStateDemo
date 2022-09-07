# Lifting State

When making a react it is important to know where state should live. Typically state should live in the lowest component on the heirarchy. 


In this example there are 2 different sets of switches. 

In the first example the switches all behave independently of one another.

In the second we added a feature where there is a button to set all switches to false. To do this the switches need to be connected, which means we have to lift state. By moving state from the the switch up to App it is possible to control all the buttons simultaneously. In order to do this you need to pass each buttons current value and the flip function to each individual switch

# Running this project locally
### `npm start`
or
### `yarn start`
