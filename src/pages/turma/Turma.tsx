import { TopMenu } from "../../components/menu/top-menu/TopMenu"
import { MiddleMenu } from "../../components/menu/middle-menu/MiddleMenu"
export const Turma:React.FC = () => {
    return (
        <div className="bg-greenpersonal rounded-b-3xl">
            <TopMenu></TopMenu>
            <MiddleMenu></MiddleMenu>
        </div>
    )
}