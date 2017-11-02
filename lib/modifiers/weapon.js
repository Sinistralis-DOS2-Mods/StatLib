function weaponModifier(data) {
	data.forEach(field => {
		if (field.weaponModifiers) {
			delete field.weaponModifiers;
		}
	});

	return data;
}

module.exports = weaponModifier;
