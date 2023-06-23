import { IsNotEmpty} from "class-validator"
export class car_validator {
    @IsNotEmpty()
    name:String


    @IsNotEmpty()
    model:String

    @IsNotEmpty()
    price:Number

    car_type_id:Number

};