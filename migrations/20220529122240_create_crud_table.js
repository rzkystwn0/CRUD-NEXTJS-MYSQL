exports.up = function(knex) {
  return knex.schema.createTable('crud', function(table) {
      table.increments();
      table.string('title');
      table.string('price');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('crud');
};
