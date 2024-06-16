import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShortcutService } from "./shortcut.service";
import { ShortcutControllerBase } from "./base/shortcut.controller.base";

@swagger.ApiTags("shortcuts")
@common.Controller("shortcuts")
export class ShortcutController extends ShortcutControllerBase {
  constructor(protected readonly service: ShortcutService) {
    super(service);
  }
}
