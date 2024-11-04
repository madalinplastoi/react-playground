import {User} from "./user.model";

interface IUserProps{
    model: User;
}

const UserLine:React.FC<IUserProps> = ({model}) => {
    return (
        <div>
            <label>{model.id}</label>
            <strong>{model.name}</strong>
        </div>
    );
};

export default UserLine;
