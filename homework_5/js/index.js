const content = document.getElementById('content');
const toggleEdit = document.getElementById('toggleEdit');
const addBlockButton = document.getElementById('addBlock');
let isEditMode = false;

document.addEventListener("DOMContentLoaded", () => {
	const blocks = [
		new SkillsBlock(18, 14, 16, 12),
        new HealthBlock(100),
        new CoinsBlock(120, 75)
	];

    blocks.forEach(block => {
        content.innerHTML += block.toHTML();
    });
});

toggleEdit.addEventListener('click', () => {
    isEditMode = !isEditMode;
    content.classList.toggle('edit-mode', isEditMode);
    toggleEdit.textContent = isEditMode ? 'Выключить режим редактирования' : 'Включить режим редактирования';
            
    const buttons = document.querySelectorAll('.remove');
    buttons.forEach(button => {
        button.classList.toggle('hidden', !isEditMode);
    });
    addBlockButton.classList.toggle('hidden', !isEditMode);
});

content.addEventListener('click', (event) => {
	if (isEditMode) {
		if (event.target.classList.contains('remove')) {
			event.target.parentElement.remove();
		}
	}
});

addBlockButton.addEventListener('click', () => {
    if (isEditMode) {
		const newBlock = new NewBlock();
		content.innerHTML += newBlock.toHTML();
    }
});