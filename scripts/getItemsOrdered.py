from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json


def index(req,order_id):
    order_id = cgi.escape(order_id)
    a = doSql()
    if order_id == 'None':
        query = "SELECT * FROM get_items_ordered_all()"
    else:
        query = "SELECT * FROM get_items_ordered('"+ order_id +"');"
    items = a.execqry(query,False)
    result = []
    del a
    for item in items:
        stringed = map(str,item)
        result.append(stringed)

    return json.dumps(result)

