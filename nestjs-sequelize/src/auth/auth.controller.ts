import {
  Controller,
  Get,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { LoginGuard } from './login.guard';
import { Issuer } from 'openid-client';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly usersService: UsersService) { }

  @UseGuards(LoginGuard)
  @Get('/login')
  login() { }

  @Get('/user')
  user(@Request() req) {
    return req.user
  }

  @Get('/userinfo')
  userinfo(@Request() req) {
    return req.user?.userinfo || ""
  }

  @UseGuards(LoginGuard)
  @Get('/callback')
  loginCallback(@Res() res: Response, @Request() req) {
    this.usersService.createOrUpdateOne(req.user?.userinfo.sub, req.user?.userinfo)
      .then((user) => {
        req.session.logged_in_user_id = user.id
        res.redirect('/')
      }
      )
  }

  @Get('/logout')
  async logout(@Request() req, @Res() res: Response) {
    const id_token = req.user ? req.user.id_token : undefined
    // req.logout()
    req.session.destroy(async (error: any) => {
      const TrustIssuer = await Issuer.discover(`${process.env.OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER}/.well-known/openid-configuration`)
      const end_session_endpoint = TrustIssuer.metadata.end_session_endpoint
      console.debug(end_session_endpoint +
        '?post_logout_redirect_uri=' + process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI +
        (id_token ? '&id_token_hint=' + id_token : ''))
      if (end_session_endpoint) {
        res.redirect(end_session_endpoint +
          '?post_logout_redirect_uri=' + process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI +
          (id_token ? '&id_token_hint=' + id_token : ''))
      } else {
        res.redirect('/')
      }
    })
  }
}