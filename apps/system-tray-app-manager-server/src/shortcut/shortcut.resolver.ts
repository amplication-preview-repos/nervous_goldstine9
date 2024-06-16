import * as graphql from "@nestjs/graphql";
import { ShortcutResolverBase } from "./base/shortcut.resolver.base";
import { Shortcut } from "./base/Shortcut";
import { ShortcutService } from "./shortcut.service";

@graphql.Resolver(() => Shortcut)
export class ShortcutResolver extends ShortcutResolverBase {
  constructor(protected readonly service: ShortcutService) {
    super(service);
  }
}
