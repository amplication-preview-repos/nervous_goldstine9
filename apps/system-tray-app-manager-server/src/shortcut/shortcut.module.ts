import { Module } from "@nestjs/common";
import { ShortcutModuleBase } from "./base/shortcut.module.base";
import { ShortcutService } from "./shortcut.service";
import { ShortcutController } from "./shortcut.controller";
import { ShortcutResolver } from "./shortcut.resolver";

@Module({
  imports: [ShortcutModuleBase],
  controllers: [ShortcutController],
  providers: [ShortcutService, ShortcutResolver],
  exports: [ShortcutService],
})
export class ShortcutModule {}
