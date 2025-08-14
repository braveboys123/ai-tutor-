from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Dummy user database with hashed password for demo
# In production, use a real database like SQLite, MySQL, etc.
users_db = {
    "test@example.com": generate_password_hash("password123")
}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"status": "fail", "message": "Email and password required"}), 400

    hashed_password = users_db.get(email)

    if hashed_password and check_password_hash(hashed_password, password):
        # Successful login
        return jsonify({"status": "success"})
    else:
        # Invalid credentials
        return jsonify({"status": "fail", "message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
