### BT code evaluation

tested on node `v6.11.0`

clone the project

open `cmd` and change the file directory to project directory:
`cd bt`

then run
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
__test1 UNKNOWN 1508405807550 vader FOUND test1__
```
