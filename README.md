### BT code evaluation

Tested on node `v6.11.0`

1. clone the project

2. open `cmd` and change the file directory to 'bt' folder directory:
`cd bt`

3. then run
`node status_report.js input.txt`



#### input.txt outcome
```
vader ALIVE 1508405807560 vader HELLO
leia DEAD 1508405807468 luke LOST leia
r2d2 ALIVE 1508405807467 luke FOUND r2d2
luke ALIVE 1508405807468 luke LOST leia
```


#### input.test.txt outcome
```
vader ALIVE 1508405807560 vader HELLO
leia DEAD 1508405807468 luke LOST leia
r2d2 ALIVE 1508405807467 luke FOUND r2d2
luke ALIVE 1508405807468 luke LOST leia
test1 UNKNOWN 1508405807550 vader FOUND test1
```
