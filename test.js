var app = require('./app');
var assert = require('assert');

describe('app', function() {
  describe('validCandidate() with languages as string', function() {
    it('should return false when the languages is empty', function() {
      assert.equal(app.validCandidate(''), false);
    });

    it('should return false when the languages is Javascript', function() {
      assert.equal(app.validCandidate('Javascript'), false);
    });

    it('should return true when the languages is ES2015', function() {
      assert.equal(app.validCandidate('ES2015'), true);
    });

    it('should return true when the languages is ES6', function() {
      assert.equal(app.validCandidate('ES6'), true);
    });

    it('should return true when the languages is ES7', function() {
      assert.equal(app.validCandidate('ES7'), true);
    });
  });

  describe('validCandidate() with languages as array', function() {
    it('should return false when the languages is empty', function() {
      assert.equal(app.validCandidate([]), false);
    });

    it('should return false when elements in languages is Javascript and Python', function() {
      assert.equal(app.validCandidate(['Javascript', 'Python']), false);
    });

    it('should return true when at least one element of languages is ES2015', function() {
      assert.equal(app.validCandidate(['ES2015', 'C#']), true);
    });

    it('should return true when at least one element of languages is ES6', function() {
      assert.equal(app.validCandidate('ES6, NodeJS'), true);
    });

    it('should return true when at least one element of languages is ES7', function() {
      assert.equal(app.validCandidate('ES7, Java'), true);
    });
  });
});
