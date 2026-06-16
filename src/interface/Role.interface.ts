import type { Permission } from "./Permission.interface";

/**
 * @description Role interface
 */
export interface Role {
    _id?: string;
    name: string;
    permissions: Permission[];
    isActive: boolean;
    isDeleted: boolean;
    isDefault: boolean;
}