# Write a program to find the largest and smallest elements in a list.
# nums = [1,2,4,43,2,3,1000]
# temp = 0 
# for x in nums : 
#         if x > temp :
#             temp = x
# print (temp)

# Reverse a list without using built-in methods.
# nums = [1,2,4,43,2,3,1000]
# nums2 = []
# for x in reversed(range(len(nums))): 
#     nums2.append(nums[x])

# print (nums2)

# Create a new list that contains only the even numbers from an existing list.
# example = [1,2,3,4,5,6,7,8,9,10]
# # evennumberlist  = [num for num in example  if num % 2==0 ]
# print(evennumberlist)
# # for i in example: 
#     if i%2==0: 
#             evennumberlist.append(i)
# print(evennumberlist)

# Multiply every element in a list by 2 and return the updated list.
# num = [1,2,3,4,5,6,7,7]
# newone = [i**2 for i in num ]
# print(newone)

# Write a function to remove all duplicates from a list while maintaining order.

num = [1,3,5,6,1,2,3,4]
for x in range(len(num)):
        for y in range(x+1,len(num)-1):
                print(y)
                if num[x]==num[y]:
                        numq=num[x]
                        num.remove(num[x])
print(num)
    


