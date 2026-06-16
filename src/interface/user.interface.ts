/**
 * @description User request interface
 */
export interface UserRequest {
    name: string;
    lastName: string;
    surName: string | undefined;
    email: string;
    password: string;
    passwordRepeat?: string | undefined;
    companyOId: string;
    roleOId: string;
}