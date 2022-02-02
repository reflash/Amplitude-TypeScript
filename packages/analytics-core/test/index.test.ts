import { init, track, logEvent, identify, groupIdentify, revenue } from '../src/index';

describe('index', () => {
  test('should expose apis', () => {
    expect(typeof init).toBe('function');
    expect(typeof track).toBe('function');
    expect(typeof logEvent).toBe('function');
    expect(typeof identify).toBe('function');
    expect(typeof groupIdentify).toBe('function');
    expect(typeof revenue).toBe('function');
  });
});
