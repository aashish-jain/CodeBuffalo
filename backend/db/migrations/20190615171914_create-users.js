
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.string('id').primary();
        t.string('name').notNull();
        t.string('email').notNull();
  });s
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');};
