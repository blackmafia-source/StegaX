# StegaX – Web-Based Steganography Tool

StegaX is a simple yet powerful **Flask web application** that allows users to hide and extract secret data inside images using steganography.  
It is lightweight, secure, and easy to use for safe data sharing.

---

## ✨ Features
- Hide secret text or files inside images  
- Extract hidden data from stego images  
- Clean and user-friendly web interface  
- Secure and lightweight implementation  
- Built with **Python (Flask)** and **Pillow**  

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/blackmafia-source/StegaX.git
cd StegaX
2. Create Virtual Environment (optional)

Copy code
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

3. Install Dependencies
pip install -r requirements.txt
4. Run the Flask App
python app.py

🖥️ Using Process
1. Open browser → http://127.0.0.1:5000/

2. Click on Hide → Upload an image + secret text/file → Download the stego image

3. Click on Extract → Upload the stego image → Retrieve hidden data

4. Enjoy secure and private communication!

📂 Project Structure

StegaX/
│── app.py                # Main Flask app
│── static/               # CSS, JS, and assets
│── templates/            # HTML templates
│── uploads/              # Uploaded files
│── requirements.txt      # Dependencies
│── README.md             # Project documentation
🌐 Use Cases
Secure communication between two people

Sharing confidential files without suspicion

Educational project for learning steganography

Practical example of Flask-based web app


📌 License
This project is open-source and available under the MIT License.
