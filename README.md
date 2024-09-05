# lab-weather-exercise
Mob programming with Joyce and Emelie

### Exercise: Weather

1. Create a variable that stores today’s weather.
2. Think about some different values this variable could store and start thinking about some conditionals, such as if it's:
   - rainy
   - sunny
   - cloudy
3. Write some different conditionals, based on the weather.
4. Log a message depending on the weather, such as:
   - "Don’t forget your sunglasses"
   - "Don’t forget your umbrella"

#### Bonus
- Create another variable that stores today’s temperature.
- Add some conditions to your previous ones. Decide if you want to nest them or if you want to use `&&` to chain them.

#### Nested
```javascript
if (it’s sunny) {
  if (and over 15°C) {
    //
  }
}
#### Chained
if (it’s sunny && over 15°C) {
  //
}
