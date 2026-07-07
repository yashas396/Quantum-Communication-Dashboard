from flask import Flask, render_template
from quantum.bell_states import run_bell
from quantum.entanglement import run_entanglement
from quantum.teleportation import run_teleportation

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/bell")
def bell():
    qc, counts = run_bell()
    circuit = qc.draw(output="text")
    return render_template("module.html", title="Bell States", counts=counts, circuit=circuit)

@app.route("/entanglement")
def entanglement():
    qc, counts = run_entanglement()
    circuit = qc.draw(output="text")
    return render_template("module.html", title="Quantum Entanglement", counts=counts, circuit=circuit)

@app.route("/teleportation")
def teleportation():
    qc, counts = run_teleportation()
    circuit = qc.draw(output="text")
    return render_template("module.html", title="Quantum Teleportation", counts=counts, circuit=circuit)

if __name__ == "__main__":
    app.run(debug=True)