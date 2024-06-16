import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShortcutServiceBase } from "./base/shortcut.service.base";

@Injectable()
export class ShortcutService extends ShortcutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
