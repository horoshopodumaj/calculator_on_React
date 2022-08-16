import React from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";

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
                    <section className="operation">
                        <h3>Новая операция</h3>
                        <form id="form">
                            <label>
                                <input
                                    type="text"
                                    className="operation__fields operation__name"
                                    placeholder="Наименование операции"
                                />
                            </label>
                            <label>
                                <input
                                    type="number"
                                    className="operation__fields operation__amount"
                                    placeholder="Введите сумму"
                                />
                            </label>
                            <div className="operation__btns">
                                <button
                                    type="submit"
                                    className="operation__btn operation__btn-subtract"
                                >
                                    РАСХОД
                                </button>
                                <button
                                    type="submit"
                                    className="operation__btn operation__btn-add"
                                >
                                    ДОХОД
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
