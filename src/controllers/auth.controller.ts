// Uncomment these imports to begin using these cool features!

import {post} from '@loopback/rest';

// import {inject} from '@loopback/core';

export class AuthController {
  constructor() {}

  @post('/login')
  login(): string {
    return 'Login Route';
  }
}
