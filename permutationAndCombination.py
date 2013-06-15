def swap(a, i, j):
    tmp = a[i]
    a[i] = a[j]
    a[j] = tmp

def permutateRec(a, prefix, start, r): 
    if r == 1: 
	for i in range(start,len(a)):
	    print prefix  + str(a[i])
	return
    for i in range(start, len(a)):
	newPrefix = prefix + str(a[i])
	swap(a, start, i)
	permutateRec(a, newPrefix, start+1, r-1);
	swap(a, start, i)
    
a = [1,2,3,4,5]


permutateRec(a,"", 0, 3)
