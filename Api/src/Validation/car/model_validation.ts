import { IsNotEmpty} from "class-validator"
export class type_validator {
    @IsNotEmpty()
    name:String
};