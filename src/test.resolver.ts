import { AppService } from './app.service';
import { Query } from "@nestjs/common";
import { TestType } from "./TestType";
import { Args, Int, Resolver } from "@nestjs/graphql";

@Resolver(of => TestType)
export class TestResolver {
  constructor(private appService: AppService) {}
}
