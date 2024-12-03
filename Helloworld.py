# arr= [3,2,4]
# target = 6
# num_map={}

# for i in range(len(arr)) : 
#         for j in range(1,len(arr)):
#                 if arr[i]+arr[j]==target:
#                         print(f'{i},{j}')

# for i , num  in enumerate(arr):
#             compliment = target-num
#             if compliment in num_map:
#                 print(f'{num_map[compliment]},{i}')
#             else:
#                     num_map[num]=i


# roman to  numarical 

# s = "MCMXCIV"

# let_map={
# "I":1,
# "V":5,
# "X":10,
# "L":50,
# "C":100,
# "D":500,
# "M":1000
# }
# total=0
# prev_val=0

# for char  in  reversed(s):
#     current_val = let_map[char]
#     if current_val<prev_val:
#         total-=current_val
#     else:
#         total+=current_val
#     prev_val=current_val

# print(total)




