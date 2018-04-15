
from lxml import html
import requests
import csv

'''
'''

anek_dataset = []
anek_count = 24
for i in range(1, anek_count):
    page = requests.get('http://anigdoty.ru/pro/futbol')
    tree = html.fromstring(page.content)
    text = tree.xpath('//*[@id="main"]/div[@class="anek"][{}]/text()'.format(i))
    text2 = '\n'.join(map(str, text))
    print(text2 + '\n ---------------------------------------------')

    anek_dataset.append(text2.replace('"', '\''))

with open('anek_parse.json', 'w+') as myfile:
    myfile.write(str(anek_dataset))
