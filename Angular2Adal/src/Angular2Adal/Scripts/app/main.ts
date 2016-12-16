import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AdalService } from "ng2-adal/core"
import { AppModule } from "./app.module";
import { SecretService } from "./services/secret.service";

platformBrowserDynamic().bootstrapModule(AppModule, [AdalService, SecretService]);