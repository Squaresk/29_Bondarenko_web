class NewBlock extends Block {
    constructor() {
        super();
    }

    toHTML() {
        return `
            <div>
                <input type="text" class="blockname" placeholder="Название блока"/>
				<textarea class="description" placeholder="Описание"></textarea>
				<button class="remove">Удалить</button>
            </div>
        `;
    }
}
