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

    addTransaction() {
        const transaction = {
            id: `cmr${(+new Date()).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
        };
    }

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
                        <History />
                        <Operation addTransaction={this.addTransaction} />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
