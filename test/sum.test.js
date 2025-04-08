import { describe, expect, it } from 'vitest';
import { testSum } from '../fn.js';


it('adds 1 + 2 to equal 3', () => {
    expect(testSum(1, 2)).toBe(10);
});