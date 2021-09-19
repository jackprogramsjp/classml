import ClassElement from '../ClassElement';

test('My ClassML', () => {
  const result = expect(ClassElement);
  result.toHaveProperty('head');
  result.toHaveProperty('body');
});
