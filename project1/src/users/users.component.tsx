import {UserService} from "./user.service";
import {User} from "./user.model";
import React, {useState, useEffect, useCallback} from 'react';
import UserLine from "./user-line.component";

const useFetchUsers = (): User[] | null => {
    const [data, setData] = useState<User[] | null>(null);
    const service = new UserService();

    useEffect(() => {
        const subscription = service.getUsers().subscribe({
            next: setData,
            error: console.error,
        });

        return () => subscription.unsubscribe();
    }, []);

    return data;
};

interface OutputProps{
    onDataLoaded: (value: User[]) => void;
}

const Users: React.FC<OutputProps> = ({onDataLoaded}) => {
    const service = new UserService();

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadUsers = useCallback(()=>{
        setLoading(true);
        const subscription = service.getUsers().subscribe({
            next: (data) => {
                debugger;
                setUsers(data);
                setLoading(false);
                onDataLoaded(data);
            },
            error: (err) => {
                debugger;
                console.error('Error fetching users:', err);
                setLoading(false);
            },
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        loadUsers(); // Initial load when the component mounts
    }, [loadUsers]);

    return (
        <>
            <h1>All users:</h1>
            <div>
                {users ? users.map(x => <UserLine model={x}></UserLine>) : <p>Loading...</p>}
            </div>
            <button onClick={loadUsers} disabled={loading} style={{ marginTop: "20px" }}>
                {loading ? 'Reloading...' : 'Reload Users'}
            </button>
        </>

    );
};

export default Users;
