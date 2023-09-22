import requests

def read_as_list(choice):
    resp = requests.get('https://raw.githubusercontent.com/nuoxoxo/in/main/aoc/' + str(choice))
    print('-\nConnection status:', resp.status_code, '\n-')
    return resp.text.split('\n') if resp.status_code is 200 else None


