#!/usr/bin/env python3

import random
import sys

def is_sorted(arr):
    for i in range(0,len(arr)-1):
        if arr[i] > arr[i+1]:
            return False
    return True

def beakersort(arr):
    while not is_sorted(arr):
        a = 0
        b = 0
        while a == b:
            a = random.randint(0,len(arr)-1)
            b = random.randint(0,len(arr)-1)
        arr[a],arr[b] = arr[b],arr[a]
    return arr

if __name__ == "__main__":
    if len(sys.argv) > 1:
        sorted_arr = beakersort(list(map(lambda x: int(x), sys.argv[1:])))
        print(" ".join(map(lambda x: str(x), sorted_arr)))
