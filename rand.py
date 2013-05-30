#!/usr/bin/python
import random
import sys

def rand():
	return int(random.random() * 999999)


i = int(sys.argv[1])
array = [];
for x in range(0,i): 
	array.append(rand())
