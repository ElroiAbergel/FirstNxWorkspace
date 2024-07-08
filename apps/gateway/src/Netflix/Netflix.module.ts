import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Netflix, NetflixSchema } from '../Schemas/Netflix.schema'
import { NetflixService } from './Netflix.service';
import { NetflixController } from './Netflix.controller';
@Module({
    imports: [MongooseModule.forFeature([{name : Netflix.name, schema : NetflixSchema}])],
    controllers: [NetflixController],
    providers: [NetflixService],
    exports: [NetflixService]
})
export class NetflixModule {}
