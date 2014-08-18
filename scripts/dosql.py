import sys
import psycopg2
from glob import *


class doSql(object):
    #attributes
    _cxn = ""
    _cur = ""
    errmsg ="" 
    #methods
    def __init__(self): #constructor
        self._cxn = psycopg2.connect("dbname='softdrinks' user='postgres' password='Whafackles08' host='localhost' port='5432'")
        self._cur = self._cxn.cursor()
        
    def __del__(self): #destructor
        self._cur.close()
        self._cxn.close()

    def execqry(self, sql, apply_):
        rows = []
        try:
            self._cur.execute(sql)
            rows = self._cur.fetchall()
	    if apply_:
                self._cxn.commit()
            if self._cur.rowcount == 0:
                rows.append(['None'])
        except:
            #errmsg = sys.exc_type + ":" + sys.exc_value 
            errmsg =  str(sys.exc_info()[1])
            rows.append([errmsg])
        return rows    

    
#a = doSql()
#f = a.execqry("select * from softdrinks",False)
#print f
#del a