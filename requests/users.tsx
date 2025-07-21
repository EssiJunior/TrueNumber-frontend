import serverURL from "@/utils/server"

export const getUsers = (setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, setUsers: React.Dispatch<React.SetStateAction<[]>>) => {
    setIsLoading(true);
    serverURL.get('/users')
        .then((response) => {
            setIsLoading(false);
            console.log(response.data);
            setUsers(response.data);
        })
        .catch((error) => {
            setIsLoading(false);
            console.error(error);
            throw new Error('Failed to fetch users');
        });
}