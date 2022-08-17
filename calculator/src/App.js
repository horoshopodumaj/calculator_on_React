import React, { Component } from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
    state = {
        transactions: [],
        description: "",
        amount: "",
    };

    addTransaction = (add) => {
        const transactions = [...this.state.transactions];
        const transaction = {
            id: `cmr${(+new Date()).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add,
        };

        transactions.push(transaction);
        this.setState({ transactions, description: "", amount: "" });
    };

    addAmount = (event) => {
        this.setState({ amount: event.target.value });
    };

    addDescription = (event) => {
        this.setState({ description: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Кошелек</h1>
                    <h2>Калькулятор расходов</h2>
                </header>
                <main>
                    <div className="container">
                        <Total />
                        <History transactions={this.state.transactions} />
                        <Operation
                            addTransaction={this.addTransaction}
                            addAmount={this.addAmount}
                            addDescription={this.addDescription}
                            description={this.state.description}
                            amount={this.state.amount}
                        />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
