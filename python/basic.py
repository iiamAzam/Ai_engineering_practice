############ varaibles  ##############
# in python evrything is a obje
# we have mutable and unmutab data types 
# when we asign a variable it assign a reference of 20 to num 

# Problem 1: Swap two numbers without using a third variable

# num1=20
# num2=21 
# [num1,num2]=[num2,num1]  # this is the direct method used in python for swapping 

# print(num1)

# var='ok'
# var1=var[::-1]

# print ( var1)

# if var==var1:
#         print('this var is palindrom')
# else:
#         print('var is not a palindrom')

# Problem 3: Count the number of vowels and consonants in a string.

# dic = 'aeiou'
# target='hello my name is azam i just wanted to practice python for my ai career'
# vowel_contain=0
# consonent_conent=0
# for el in target :
#         if (dic.__contains__(el)):
#                 print(el)
#                 vowel_contain=vowel_contain+1
#         else:
             
#                 consonent_conent=consonent_conent+1

# print(f'the numer of vowels : {vowel_contain} and the consonent : {consonent_conent} ')
                

# Problem 4: Write a function to find the second largest number in a list.

# var =25
# def fun():
#     print(var)


# fun()
# print(var)
##   datatypes

## 
# x=122 ## int 
# x=122.4 ## float 
# x=[12,23,"hwllo",20]## list 
# x=(12,23,45,1,3) ## tuple
# x=1j    # complex
# x=range(6) # range 
# x = {
#     'x':'its good to see you ',
#      "y":'it not like that ',
#      "k" :' the thing is my ikigai is programming ai and thair  is points so i never be bored '
# }
# x=True # boolean 
# x= b'hello'
# x = bytearray(5)
# x=memoryview(bytes(5))
# print(x)


# set1={1,2,4,5}
# set2 = {'ok','mpt','ok'}
# set3= { 1,2,4,5,6,7}

# set3 = set1& set3
# print (set3)

# set1 = {"apple", "banana", "cherry"}
# set2 = {"google", "microsoft", "apple"}

# set3 = set1 ^ set2
# print(set3)

# Set Methods
# Python has a set of built-in methods that you can use on sets.

# Method	Shortcut	Description
# add()	 	Adds an element to the set
# clear()	 	Removes all the elements from the set
# copy()	 	Returns a copy of the set
# difference()	-	Returns a set containing the difference between two or more sets
# difference_update()	-=	Removes the items in this set that are also included in another, specified set
# discard()	 	Remove the specified item
# intersection()	&	Returns a set, that is the intersection of two other sets
# intersection_update()	&=	Removes the items in this set that are not present in other, specified set(s)
# isdisjoint()	 	Returns whether two sets have a intersection or not
# issubset()	<=	Returns whether another set contains this set or not
#  	<	Returns whether all items in this set is present in other, specified set(s)
# issuperset()	>=	Returns whether this set contains another set or not
#  	>	Returns whether all items in other, specified set(s) is present in this set
# pop()	 	Removes an element from the set
# remove()	 	Removes the specified element
# symmetric_difference()	^	Returns a set with the symmetric differences of two sets
# symmetric_difference_update()	^=	Inserts the symmetric differences from this set and another
# union()	|	Return a set containing the union of sets
# update()	|=	Update the set with the union of this set and others

