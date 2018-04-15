
from lxml import html
import requests
import csv
import json

'''
'''

anek_dataset = []
anek_count = 20
for i in range(1, anek_count):
    page = requests.get('http://anigdoty.ru/pro/futbol')
    tree = html.fromstring(page.content)
    text = tree.xpath('//*[@id="main"]/div[@class="anek"][{}]/text()'.format(i))
    text2 = '\n'.join(map(str, text))
    #print(text2 + '\n ---------------------------------------------')

    anek_dataset.append(text2)

with open('../src/data/anek_parse.json', 'wt') as myfile:
    json.dump(anek_dataset, myfile, indent=2)

#print(json.dumps(anek_dataset, indent=2))
