import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Netflix {

    @Prop()
    type: string;
    @Prop({required : true})
    title: string;
    @Prop()
    director: string;
    @Prop()
    cast: string;
    @Prop()
    country: string;
    @Prop()
    date_added: string;
    @Prop()
    release_year: string;
    @Prop()
    rating: string;
    @Prop()
    duration: string;
    @Prop()
    listed_in: string;
    @Prop()
    description: string;
    @Prop()
    Image_URL: string;
}
export const NetflixSchema = SchemaFactory.createForClass(Netflix);
