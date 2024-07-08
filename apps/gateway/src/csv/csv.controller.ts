import { Controller, Get } from '@nestjs/common';
import { read, readFileSync } from 'fs';
import { get } from 'http';
class RowContainer {
    show_id: string;
    type: string;
    title: string;
    director: string;
    cast: string;
    country: string;
    date_added: string;
    release_year: string;
    rating: string;
    duration: string;
    listed_in: string;
    description: string;
    Image_URL: string;
}

function getNetflixCsv() {
    const ReturnedArr: RowContainer[] = [];
    const csvFile = readFileSync('./netflix_shows_with_images.csv');
    const csvData = csvFile.toString();
    const csvLines = csvData.split('\n');
    for (let i = 1; i < csvLines.length; i++) {
        const line = csvLines[i];
        const fields = line.split(',');
        const Row = new RowContainer();
        Row.show_id = fields[0];
        Row.type = fields[1];
        Row.title = fields[2];
        Row.director = fields[3];
        Row.cast = fields[4];
        Row.country = fields[5];
        Row.date_added = fields[6];
        Row.release_year = fields[7];
        Row.rating = fields[8];
        Row.duration = fields[9];
        Row.listed_in = fields[10];
        Row.description = fields[11];
        Row.Image_URL = fields[12];
        ReturnedArr.push(Row);
    }
    return ReturnedArr;
}
function generateUniqueRandomNumbers(min: number, max: number, count: number): number[] {
    function getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const uniqueNumbers: Set<number> = new Set();
    while (uniqueNumbers.size < count) {
        uniqueNumbers.add(getRandomInt(min, max));
    }
    return Array.from(uniqueNumbers);
}

@Controller('csv')
export class CsvController {
    @Get("data")
    getData() {
        return getNetflixCsv()
    }
    @Get("random")
    getRandom() {
    const data = getNetflixCsv();
    const uniqueRandomNumbers : number[] = generateUniqueRandomNumbers(0, 987, 10);
    const randomArr: RowContainer[] = [data[uniqueRandomNumbers[0]], data[uniqueRandomNumbers[1]], data[uniqueRandomNumbers[2]], data[uniqueRandomNumbers[3]], data[uniqueRandomNumbers[4]], data[uniqueRandomNumbers[5]], data[uniqueRandomNumbers[6]], data[uniqueRandomNumbers[7]], data[uniqueRandomNumbers[8]], data[uniqueRandomNumbers[9]]];
    return randomArr;
    }


}

