from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
api_key = 'your-api-key'
openai.api_key = api_key

def ask_gpt(prompt, max_tokens=50):
    response = openai.Completion.create(
        engine="text-davinci-002",  # You can choose different engines based on your requirements
        prompt=prompt,
        max_tokens=max_tokens
    )
    return response.choices[0].text.strip()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['user_input']
    response = ask_gpt(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
