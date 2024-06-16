/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AppModelService } from "../appModel.service";
import { AppModelCreateInput } from "./AppModelCreateInput";
import { AppModel } from "./AppModel";
import { AppModelFindManyArgs } from "./AppModelFindManyArgs";
import { AppModelWhereUniqueInput } from "./AppModelWhereUniqueInput";
import { AppModelUpdateInput } from "./AppModelUpdateInput";
import { ShortcutFindManyArgs } from "../../shortcut/base/ShortcutFindManyArgs";
import { Shortcut } from "../../shortcut/base/Shortcut";
import { ShortcutWhereUniqueInput } from "../../shortcut/base/ShortcutWhereUniqueInput";

export class AppModelControllerBase {
  constructor(protected readonly service: AppModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AppModel })
  async createAppModel(
    @common.Body() data: AppModelCreateInput
  ): Promise<AppModel> {
    return await this.service.createAppModel({
      data: data,
      select: {
        createdAt: true,
        filePath: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AppModel] })
  @ApiNestedQuery(AppModelFindManyArgs)
  async appModels(@common.Req() request: Request): Promise<AppModel[]> {
    const args = plainToClass(AppModelFindManyArgs, request.query);
    return this.service.appModels({
      ...args,
      select: {
        createdAt: true,
        filePath: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AppModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async appModel(
    @common.Param() params: AppModelWhereUniqueInput
  ): Promise<AppModel | null> {
    const result = await this.service.appModel({
      where: params,
      select: {
        createdAt: true,
        filePath: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AppModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAppModel(
    @common.Param() params: AppModelWhereUniqueInput,
    @common.Body() data: AppModelUpdateInput
  ): Promise<AppModel | null> {
    try {
      return await this.service.updateAppModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          filePath: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AppModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAppModel(
    @common.Param() params: AppModelWhereUniqueInput
  ): Promise<AppModel | null> {
    try {
      return await this.service.deleteAppModel({
        where: params,
        select: {
          createdAt: true,
          filePath: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/shortcuts")
  @ApiNestedQuery(ShortcutFindManyArgs)
  async findShortcuts(
    @common.Req() request: Request,
    @common.Param() params: AppModelWhereUniqueInput
  ): Promise<Shortcut[]> {
    const query = plainToClass(ShortcutFindManyArgs, request.query);
    const results = await this.service.findShortcuts(params.id, {
      ...query,
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        position: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/shortcuts")
  async connectShortcuts(
    @common.Param() params: AppModelWhereUniqueInput,
    @common.Body() body: ShortcutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shortcuts: {
        connect: body,
      },
    };
    await this.service.updateAppModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/shortcuts")
  async updateShortcuts(
    @common.Param() params: AppModelWhereUniqueInput,
    @common.Body() body: ShortcutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shortcuts: {
        set: body,
      },
    };
    await this.service.updateAppModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/shortcuts")
  async disconnectShortcuts(
    @common.Param() params: AppModelWhereUniqueInput,
    @common.Body() body: ShortcutWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shortcuts: {
        disconnect: body,
      },
    };
    await this.service.updateAppModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
