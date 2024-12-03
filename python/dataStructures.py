class Node: 
    def __init__(self,data):
            self.data=data
            self.next=None

class Linklist: 
     def __init__(self):
           self.head=None
     
     def append(self,data):
            node=Node(data)
            if self.head is None:
                  self.head=node
            else:
                  currrent= self.head
                  while currrent is not None:
                        currrent=currrent.next

                  currrent=node

ok = Linklist()
ok.append(20)
ok.append(32)

