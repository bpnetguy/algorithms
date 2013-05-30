#!/usr/bin/python
import random
def rand():
	return int(random.random() * 999999)

for x in range(0,10): 
	print rand()
