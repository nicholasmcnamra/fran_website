import AccountNavbar from "./AccountNavbar";

interface AccountProps {
    props: null;
}
const Account: React.FC<AccountProps> = () => {
    return (
        <div className="account-container">
            <AccountNavbar props={null}></AccountNavbar>
        </div>
    )
}

export default Account;