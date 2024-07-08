export class Validation {
    strLength(input: string, from: number, to: number) {
        return input && input.length >= from && input.length <= to;
    }
    user(input: string) {
        return input && input.length >= 2 && input.length <= 20;
    }
    email(input: string) {
        return input && input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }
    password(input: string) {
        return input && input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{3,}).{8,}$/);
    }
    rePassword(p1: string, p2: string) {
        p1 = p1 === null ? "" : p1;
        p2 = p2 === null ? "" : p2;
        return p1 === p2;
    }
    lettersOnly(input: string) {
        return input && input.match(/^[A-Za-z]+$/);
    }
    lettersAndNumbersOnly(input: string) {
        return input && input.match(/^[A-Za-z0-9_-]+$/);
    }
    numbersOnly(input: string) {
        return input && input.match(/^[0-9.]+$/);
    }
    image(input: string) {
        return input && input.match(/[^\s]+(.*?)\.(jpeg|jpg|png|gif|webp|svg|JPEG|JPG|GIF|PNG|WEBP|SVG)$/);
    }
}
