import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Netflix } from '../Schemas/Netflix.schema';
import { Model } from 'mongoose';
import { CreateNetflixDto } from '../dto/Netflix/create-netflix.dto';
@Injectable()
export class NetflixService {
    constructor(@InjectModel(Netflix.name) private NetflixModel: Model<Netflix>) { }

    CreateNetflix(CreateNetflixDto: CreateNetflixDto) {
        const newNetflix = new this.NetflixModel(CreateNetflixDto)
        return newNetflix.save()
    }
    RetrieveAllNetflix() {
        return this.NetflixModel.find({})
    }
    RetrieveNetflixByName(title: string) {
        return this.NetflixModel.find({ "title": { "$regex": title, "$options": "i" } })
    }
    RetrieveNetflixSeriesByName(title: string) {
        return this.NetflixModel.find({ "title": { "$regex": title, "$options": "i" }, "type": "TV Show" })
    }
    RetrieveNetflixMovieByName(title: string) {
        return this.NetflixModel.find({ "title": { "$regex": title, "$options": "i" }, "type": "Movie" })
    }
    RetrieveRandomNetflix() {
        return this.NetflixModel.aggregate([
            { $sample: { size: 10 } }]);
    }

}