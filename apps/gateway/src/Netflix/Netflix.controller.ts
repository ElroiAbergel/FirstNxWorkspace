import { Body, Controller, Post } from "@nestjs/common";
import { NetflixService } from './Netflix.service'
import { CreateNetflixDto } from '../dto/Netflix/create-netflix.dto';
import { Get, Query } from "@nestjs/common/decorators";
@Controller('Netflix')
export class NetflixController {
    constructor(private NetflixService: NetflixService) { }
    @Post()
    CreateNetflix(@Body() CreateNetflixDto: CreateNetflixDto) {
        console.log(CreateNetflixDto)
        return this.NetflixService.CreateNetflix(CreateNetflixDto)
    }
    @Get('all')
    RetriveAllNetflix() {
        return this.NetflixService.RetrieveAllNetflix()
    }
    @Get('findbytitle')
    RetrieveNetflixByTitle(@Query('title') title: string) {
        return this.NetflixService.RetrieveNetflixByName(title);
    }
    @Get('random')
    RetrieveRandomNetflix() {
        return this.NetflixService.RetrieveRandomNetflix();
    }
    @Get('series')
    RetrieveNetflixSeriesByTitle(@Query('title') title: string) {
        return this.NetflixService.RetrieveNetflixSeriesByName(title);
    }
    @Get('movie')
    RetrieveNetflixMovieByTitle(@Query('title') title: string) {
        return this.NetflixService.RetrieveNetflixMovieByName(title);
    }
    
}