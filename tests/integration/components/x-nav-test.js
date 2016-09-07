import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-nav', 'Integration | Component | x nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{x-nav}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-nav}}
      template block text
    {{/x-nav}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'menutemplateblocktext');
});
