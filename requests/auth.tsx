import serverURL from "@/utils/server";

interface SignUpValues {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    countryCode: string;
    isAdmin: boolean;
}
interface SignInValues {
    email: string;
    password: string;
}


export const signUp = (values: SignUpValues, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    const data = {
        username: values.username,
        email: values.email,
        phoneNumber: values.countryCode + values.phoneNumber,
        password: values.password,
        role: values.isAdmin ? 'admin' : 'user'
    }

    serverURL.post('/auth/register', data).then((response) => {
        setIsLoading(false);
        console.log(response);

        setIsLoading(true);
        signIn({
            email: values.email,
            password: values.password
            }, setIsLoading, setErrorMessage)
    })
        .catch((error) => {
            setIsLoading(false);
            console.log(error);
            setErrorMessage(error.response?.data?.msg || 'There was an error please try later.')
        });
}


export const signIn = (values: SignInValues, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
    serverURL.post('/auth/login', values).then((response) => {
        setIsLoading(false);
        console.log(response);

        localStorage.setItem('token', response.data.token);

        if (response.data.role === 'admin') {
            window.location.href = '/dashboard/admin';
            return;
        }
        else if (response.data.role === 'user') {
            window.location.href = '/game';
            return;
        }
        else {
            console.error('Unknown role:', response.data.role);
        }
    })
        .catch((error) => {
            setIsLoading(false);
            console.log(error);
            setErrorMessage(error.response?.data?.msg || 'There was an error please try later.')
        });
}