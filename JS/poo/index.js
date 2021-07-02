class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
}


const nic = new Cliente();
const contaCorrenteNic = new ContaCorrente();
nic.nome = "Nicolas";
nic.cpf = "12345678900";
nic.agencia = "1001";
nic.saldo = 0.0;
contaCorrenteNic.sacar(100);
console.log(contaCorrenteNic.saldo);
console.log(nic);