import type { UserRequest } from "../../interface/user.interface";

interface UserCreateFormProps {
    dictionary: any;
    user: UserRequest;
    setUser: React.Dispatch<React.SetStateAction<UserRequest>>;
}

export function UserCreateForm({
    dictionary,
    user,
    setUser
}: UserCreateFormProps) {
    return (
        <form className="user-create-form">

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="name">
                        {dictionary.user.create.firstName}
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder={dictionary.user.create.firstName}
                        value={user.name}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                name: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="lastName">
                        {dictionary.user.create.lastName}
                    </label>

                    <input
                        type="text"
                        id="lastName"
                        placeholder={dictionary.user.create.lastName}
                        value={user.lastName}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                lastName: e.target.value
                            })
                        }
                    />
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="surName">
                        {dictionary.user.create.surName}
                    </label>

                    <input
                        type="text"
                        id="surName"
                        placeholder={dictionary.user.create.surName}
                        value={user.surName}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                surName: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">
                        {dictionary.user.create.email}
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder={dictionary.user.create.email}
                        value={user.email}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }
                    />
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="password">
                        {dictionary.user.create.password}
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder={dictionary.user.create.password}
                        value={user.password}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="passwordRepeat">
                        {dictionary.user.create.passwordRepeat}
                    </label>

                    <input
                        type="password"
                        id="passwordRepeat"
                        placeholder={dictionary.user.create.passwordRepeat}
                        value={user.passwordRepeat}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                passwordRepeat: e.target.value
                            })
                        }
                    />
                </div>

            </div>

            <div className="form-row">

                <div className="form-field">
                    <label htmlFor="company">
                        {dictionary.user.create.company}
                    </label>

                    <select
                        id="company"
                        value={user.companyOid}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                companyOid: e.target.value
                            })
                        }
                    >
                        <option value="">
                            {dictionary.user.create.selectCompany}
                        </option>
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="role">
                        {dictionary.user.create.role}
                    </label>

                    <select
                        id="role"
                        value={user.roleOid}
                        onChange={(e) =>
                            setUser({
                                ...user,
                                roleOid: e.target.value
                            })
                        }
                    >
                        <option value="">
                            {dictionary.user.create.selectRole}
                        </option>
                    </select>
                </div>

            </div>

            <button
                type="button"
                className="create-user-button"
            >
                {dictionary.user.create.createButton}
            </button>

        </form>
    );
}