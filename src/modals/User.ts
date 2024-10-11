
interface skillObject{
    Languages:Array<string>,
    Technologies:Array<string>,
    ComputerScienceFundamentals:Array<string>,
    Database:Array<string>,
    SoftSkills:Array<string>
}
export interface UserObject{
    name:string,
    phone:string,
    picture:string,
    heading:string,
    about:string,
    skills:skillObject
}