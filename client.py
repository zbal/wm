import urllib2
import json
import threading
import re

# Need to load the config file of the webnode
wm_host = 'http://localhost:3000'
url_schedule = '/api/Schedule'
ip_self = '127.0.0.1'

# Fetch self schedule and build python object out of it
# TODO: handle errors, etc.
schedule_io = urllib2.urlopen(wm_host + url_schedule + '/' + ip_self)
schedule = json.load(schedule_io)

# Iterate through the schedule and perform the respective webcheck
def run_check(**check):
    '''fetch the page and check the results'''
    # Just simplify usage...
    scheme = check['scheme']
    domain = check['domain']
    page = check['page']
    text = check['text']
    frequency = check['frequency']
    code = check['code']
    
    self_check = urllib2.urlopen(scheme +'://'+ domain + page)
    content = self_check.read()
    find_text = re.search(text, content)
    if find_text != None:
        print "[Success] Found text: "+ text +" in "+ domain + page
    else:
        print "[Error] Text not found: "+ text +" in "+ domain + page
        
    # repeat the job ad nauseum
    threading.Timer(frequency, run_check, (), check).start()

# Loop through the checks provided by the schedule
for check in schedule["schedule"]:
    run_check(**check)
