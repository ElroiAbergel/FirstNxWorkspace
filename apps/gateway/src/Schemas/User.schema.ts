import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop({ required: true ,unique:true})
  email: string;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({})
  salt: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
