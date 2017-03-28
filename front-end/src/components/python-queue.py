class Queue():
    def __init__(self):
        self.queue = [5]
    def enqueue(self, val):
        tmp = [val]
        for i in range(len(self.queue)):
            tmp.append(self.queue[i])
        self.queue = tmp
        print(self.queue)
    def dequeue(self):
        self.queue = self.queue[1:]
        print(self.queue)

my_queue = Queue()
my_queue.enqueue(6)
my_queue.enqueue(6)
my_queue.enqueue(6)
my_queue.dequeue()
my_queue.dequeue()
my_queue.dequeue()

def string_compression(input_string):
    map = {}
    answer = ''
    for el in list(input_string):
        if el not in map:
            map[el] = {
                'char': el,
                'total':1
            }
        else:
            map[el] = {
                'char':el,
                'total': map[el]['total'] + 1
            }
    for key in map:
        answer = answer + str(map[key]['total']) + map[key]['char']
    print(answer)
    return answer

string_compression('ttthhhiilllabbbbbb')
