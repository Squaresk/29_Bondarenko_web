class HealthBlock extends Block {
    constructor(healthPoints) {
        super();
        this.healthPoints = healthPoints;
    }

    toHTML() {
        return `
            <div>
                <h2>Состояние персонажа</h2>
                <p>Очки здоровья: <input type="number" class="values" value="${this.healthPoints}"></p>
				<button class="remove">Удалить</button>
            </div>
        `;
    }
}
