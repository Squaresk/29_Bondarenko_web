class CoinsBlock extends Block {
    constructor(gold, silver) {
        super();
        this.gold = gold;
        this.silver = silver;
    }

    toHTML() {
        return `
            <div id="coins">
                <h2>Монеты</h2>
                <p>Золотые: <input type="number" class="values" value="${this.gold}"></p>
                <p>Серебряные: <input type="number" class="values" value="${this.silver}"></p>
            </div>
        `;
    }
}
