import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'xxx.onmicrosoft.com',
            clientId: 'xxxxxxxxxxxxx',
            instance: 'https://login.microsoftonline.com/',
            extraQueryParameter: "nux=1"
        };
    }
}