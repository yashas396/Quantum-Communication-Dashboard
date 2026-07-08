# Quantum Communication Dashboard

A web-based application for exploring fundamental quantum communication protocols through interactive simulations built with **Flask** and **Qiskit**.

The dashboard demonstrates three foundational quantum communication concepts:

- Bell State Generation
- Quantum Entanglement
- Quantum Teleportation

Each module executes quantum circuits using Qiskit and presents the corresponding measurement results through an intuitive web interface.

---

## Overview

Quantum communication leverages the principles of quantum mechanics to transmit and process information in ways that are not possible using classical systems.

This project was developed to provide an accessible, interactive environment for understanding these protocols without requiring users to interact directly with quantum programming libraries.

The application combines:

- A Flask-based web interface
- Quantum circuit implementation using Qiskit
- Interactive frontend built with HTML, CSS, and JavaScript
- Circuit execution through Qiskit Aer Simulator
- Support for execution on IBM Quantum hardware

---

## Features

- Interactive Quantum Communication Dashboard
- Bell State Simulation
- Quantum Entanglement Demonstration
- Quantum Teleportation Workflow
- Quantum Circuit Visualization
- Measurement Results
- Responsive Web Interface
- Modular Flask Architecture
- IBM Quantum Compatible

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Backend | Flask |
| Quantum SDK | Qiskit |
| Quantum Simulator | Qiskit Aer |
| Programming Language | Python |
| Frontend | HTML, CSS, JavaScript |
| Visualization | Matplotlib |

---

## Project Structure

```text
Quantum-Communication-Dashboard/
│
├── app.py
├── requirements.txt
│
├── quantum/
│   ├── bell_states.py
│   ├── entanglement.py
│   └── teleportation.py
│
├── templates/
│   ├── index.html
│   └── module.html
│
├── static/
│   ├── style.css
│   ├── script.js
│   └── videos/
│
└── outputs/
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/yashas396/Quantum-Communication-Dashboard.git
```

Navigate into the project

```bash
cd Quantum-Communication-Dashboard
```

Install the dependencies

```bash
pip install -r requirements.txt
```

Start the Flask server

```bash
python app.py
```

Open your browser

```
http://127.0.0.1:5000
```

---

## Screenshots

> Screenshots will be added after the premium interface is completed.

---

## Roadmap

- [x] Flask Dashboard
- [x] Bell State Module
- [x] Quantum Entanglement Module
- [x] Quantum Teleportation Module
- [x] Qiskit Integration
- [x] IBM Quantum Hardware Execution
- [ ] Premium Interactive UI
- [ ] Animated Circuit Visualization
- [ ] Live Backend Status
- [ ] Quantum Network Simulation

---

## Author

**Yashaswini Namani**

B.Tech Artificial Intelligence

Qiskit Advocate

GitHub: https://github.com/yashas396

---

## License

This project is licensed under the MIT License.