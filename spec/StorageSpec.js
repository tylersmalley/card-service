var Storage = require('../src/Storage');

describe('Storage', function() {
  beforeEach(function() {
    Storage.set('foo', 'Foo');

  });

  it('gets a value', function() {
    expect(Storage.get('foo')).toEqual('Foo');
  });

  it('returns all keys', function() {
    expect(Storage.keys()).toEqual(['foo']);
  });

  describe('rm', function() {
    it('removes the value', function() {
      Storage.set('bar', 'Bar');
      expect(Storage.rm('bar')).toBeTruthy();
      expect(Storage.get('bar')).toBeUndefined();
    });

    it('returns false if value does not exist', function() {
      expect(Storage.rm('bar')).toBeFalsy();
    });
  });
});
