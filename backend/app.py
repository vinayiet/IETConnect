from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello from Flask!'

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {'message': 'This is data from the backend'}
#     return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
