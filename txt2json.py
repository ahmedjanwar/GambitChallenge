def read():
    try:
        file1 = open('challenge.txt', 'r')
        Lines = file1.readlines()
        for line in Lines:
            #strip = line.strip(),'"'
            change(line)
        #return Lines
    except IOError:
        return False
def change(data):
    input=data.replace(':',', \n "value":')
    #print('{\n  "id":'+'"'+input,'"},')
    res = '{\n  "id":'+''+input
    print('{} {}'.format(res, res.strip()+' \n},'))

read()


    
        