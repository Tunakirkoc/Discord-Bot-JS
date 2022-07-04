module.exports = (db, DataTypes) => {
	return db.define('users', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		xp: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};