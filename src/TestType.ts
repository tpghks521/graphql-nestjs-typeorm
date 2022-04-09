import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TestType {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field()
  lastName: string;

  @Field({ description: 'test title', deprecationReason: 'Not useful in v2' })
  title: string;
}
