// Импортираме функцията от файла
import { toggleHiddenClass } from '../js/toggleHiddenClass.js';

describe('toggleHiddenClass', () => {
  test('adds "hidden" class if not present', () => {
    const element = document.createElement('div');
    toggleHiddenClass(element);
    expect(element.classList.contains('hidden')).toBe(true);
  });

  test('removes "hidden" class if present', () => {
    const element = document.createElement('div');
    element.classList.add('hidden');
    toggleHiddenClass(element);
    expect(element.classList.contains('hidden')).toBe(false);
  });
});