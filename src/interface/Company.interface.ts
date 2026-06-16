/**
 * @description Company interface
 */
export interface Company {
    _id?: string;
    name: string;
    description?: string;
    numberEmployees?: number;
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
    principalContact?: string;
    principalContactPhone?: string;
    createdDate?: Date;
    updatedDate?: Date;
    isDeleted?: boolean;
    isActive?: boolean;
}