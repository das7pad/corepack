import {jest, describe, it, expect} from '@jest/globals';

import defaultConfig                from '../config.json';
import {DEFAULT_NPM_REGISTRY_URL}   from '../sources/npmRegistryUtils';

jest.mock(`../sources/httpUtils`);

describe(`key store should be up-to-date`, () => {
  it(`should contain up-to-date npm keys`, async () => {
    const r = await globalThis.fetch(new URL(`/-/npm/v1/keys`, DEFAULT_NPM_REGISTRY_URL));
    expect(r.ok).toBe(true);
    expect(r.json()).resolves.toMatchObject({keys: defaultConfig.keys.npm});
  });
});
