import Button from "../Button";

interface UserRowProps {
    username: string;
    email: string;
    phoneNumber: string;
    role: string;
}

const UserRow = ({ username, email, phoneNumber, role }: UserRowProps) => {
    return (
        <tr className="[&>td]:!text-sm">
            <td>{username}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{role}</td>
            <td className="flex gap-2">
                <Button>Edit</Button>
                <Button className="!bg-red-500 hover:!bg-red-600">Delete</Button>
            </td>
        </tr>
    );
}

export default UserRow;