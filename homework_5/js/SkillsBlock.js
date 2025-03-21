class SkillsBlock extends Block {
    constructor(strength, agility, intelligence, charisma) {
        super();
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.charisma = charisma;
		this.title = "Навыки";
    }

    toHTML() {
        return `
            <div>
                <h2>${this.title}</h2>
                <p>Сила: <input type="number" class="values" value="${this.strength}"></p>
                <p>Ловкость: <input type="number" class="values" value="${this.agility}"></p>
                <p>Интеллект: <input type="number" class="values" value="${this.intelligence}"></p>
                <p>Харизма: <input type="number" class="values" value="${this.charisma}"></p>
				<button class="remove">Удалить</button>
            </div>
        `;
    }
}
