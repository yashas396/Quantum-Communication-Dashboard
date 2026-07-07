from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

def run_teleportation():
    qc = QuantumCircuit(3, 3)

    # Prepare |+> state
    qc.h(0)

    # Bell pair
    qc.h(1)
    qc.cx(1, 2)

    # Alice operations
    qc.cx(0, 1)
    qc.h(0)

    # Measure all for demo
    qc.measure([0, 1, 2], [0, 1, 2])

    simulator = AerSimulator()
    result = simulator.run(qc, shots=1024).result()
    return qc, result.get_counts()