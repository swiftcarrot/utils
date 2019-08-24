import {
  uid,
  uuid,
  IS_BROWSER,
  IS_IOS,
  encodeQueryString,
  decodeQueryString,
  decodeLocationSearch,
  hashCode
} from '../';

test('uid', () => {
  expect(uid('test')).toMatch(/^test[0-9]+/);
});

test('uuid', () => {
  expect(uuid().length).toEqual(36);
});

test('IS_BROWSER', () => {
  expect(IS_BROWSER).toBe(true);
});

test('IS_IOS', () => {
  expect(IS_IOS).toBe(false);
});

test('encodeQueryString', () => {
  expect(
    encodeQueryString({ foo: 'hello', bar: [1, 2, 3], baz: true })
  ).toEqual('foo=hello&bar=1&bar=2&bar=3&baz=true');
  expect(encodeQueryString({ foo: 123 }, '?')).toEqual('?foo=123');
  expect(encodeQueryString({ bar: 'world' }, 'foo=hello&')).toEqual(
    'foo=hello&bar=world'
  );
});

test('decodeQueryString', () => {
  expect(decodeQueryString('foo=hello&bar=1&bar=2&bar=3&baz=true')).toEqual({
    foo: 'hello',
    bar: [1, 2, 3],
    baz: true
  });
});

test('decodeLocationSearch', () => {
  expect(decodeLocationSearch('')).toEqual({});
  expect(decodeLocationSearch('?foo=hello&bar=1&bar=2&bar=3&baz=true')).toEqual(
    {
      foo: 'hello',
      bar: [1, 2, 3],
      baz: true
    }
  );
});

test('hashCode', () => {
  expect(hashCode('test')).toBeGreaterThan(0);
});
