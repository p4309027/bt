### BT code evaluation

Tested on node `v6.11.0`

1. open `cmd` and clone the project  
(or download the project and unzip it) 

2. change the file directory to 'bt' folder directory:  
   `cd bt`

3. install dependency libraries:  
   `npm i`

4. then run: `node app.js input.txt`  
(or `npm start` with desired input file name as a parameter, e.g. : `npm start input.txt`)

5. to test the 'status-report' module, run `npm test` 


#### input.txt file outcome
```
vader ALIVE 1508405807560 vader HELLO
leia DEAD 1508405807468 luke LOST leia
r2d2 ALIVE 1508405807467 luke FOUND r2d2
luke ALIVE 1508405807468 luke LOST leia
```


#### test/input.test.txt file outcome
```
vader ALIVE 1508405807560 vader HELLO
leia DEAD 1508405807468 luke LOST leia
r2d2 ALIVE 1508405807467 luke FOUND r2d2
luke ALIVE 1508405807468 luke LOST leia
test1 UNKNOWN 1508405807550 vader FOUND test1
```
