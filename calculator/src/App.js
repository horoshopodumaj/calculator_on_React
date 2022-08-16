import React from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

function App() {
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
                    <Operation />
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
