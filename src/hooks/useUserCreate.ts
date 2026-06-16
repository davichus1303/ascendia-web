import { useState } from 'react';
import type { UserRequest } from '../interface/user.interface';

export function useUserCreate() {
    const [user, setUser] = useState<UserRequest>({
        name: '',
        lastName: '',
        surName: '',
        email: '',
        password: '',
        passwordRepeat: '',
        companyOId: '',
        roleOId: '',
    });
    return {
        user,
        setUser,
        name: user.name,
        setName: (name: string) => setUser({ ...user, name }),
        lastName: user.lastName,
        setLastName: (lastName: string) => setUser({ ...user, lastName }),
        surName: user.surName,
        setSurName: (surName: string) => setUser({ ...user, surName }),
        email: user.email,
        setEmail: (email: string) => setUser({ ...user, email }),
        password: user.password,
        setPassword: (password: string) => setUser({ ...user, password }),
        passwordRepeat: user.passwordRepeat,
        setPasswordRepeat: (passwordRepeat: string) => setUser({ ...user, passwordRepeat }),
        companyOId: user.companyOId,
        setCompanyOId: (companyOId: string) => setUser({ ...user, companyOId }),
        roleOId: user.roleOId,
        setRoleOId: (roleOId: string) => setUser({ ...user, roleOId }),
    };
}