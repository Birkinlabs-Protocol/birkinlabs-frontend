import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('challenge')
  getChallenge(@Query('address') address: string) {
    if (!address) throw new Error('address required');
    return { challenge: this.authService.generateChallenge(address) };
  }

  @Post('verify')
  verify(@Body() body: { address: string; signature: string }) {
    const valid = this.authService.verifySignature(body.address, body.signature);
    if (!valid) throw new Error('Invalid signature');
    return { token: this.authService.generateToken(body.address) };
  }
}
