import mysql as mysql
import mysql.connector
from flask import Flask, jsonify, request

app = Flask(__name__)
cnx = mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')
banks = []


def foo():
    con = mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')
    mysql1 = con.cursor()
    mysql1.execute('SELECT banks_data from banks')
    res = mysql1.fetchall()
    arr = []
    for x in res:
        print(x)
        arr.append(x)
    con.close()
    return arr


def getConnection(res=mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')):
    return res


@app.route('/banks', methods=['GET', 'OPTIONS'])
def get_banks():
    return jsonify(foo())
    # return jsonify(banks)


@app.route('/banks', methods=['POST'])
def add_bank():
    con = mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')
    mysql1 = con.cursor()
    sql = 'insert into banks(id, banks_data) values(default, %s)'
    data = request.data.decode("utf-8")
    val = [str(data)]
    for x in range(len(banks)):
        if data.split('id')[1] in str(banks[x]):
            query = f"delete from banks where banks_data ='{str(banks[x])}'"
            mysql1.execute(query)
            banks.pop(x)
            con.commit()
            con.close()
    banks.append(request.data.decode("utf-8"))
    con = mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')
    mysql1 = con.cursor()
    mysql1.execute(sql, val)
    con.commit()
    con.close()
    return banks


@app.route('/banks', methods=['DELETE'])
def delete_bank():
    con = mysql.connector.connect(user="root", password="root", host='localhost', database='lab5')
    mysql1 = con.cursor()
    data = request.data.decode("utf-8")
    for x in range(len(banks)):
        if data in banks[x]:
            query = f"delete from banks where banks_data ='{str(banks[x])}'"
            mysql1.execute(query)
            banks.pop(x)
            con.commit()
            con.close()
    return ''


if __name__ == '__main__':
    foo()
    app.run(debug=True)
