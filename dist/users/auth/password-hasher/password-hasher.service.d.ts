export declare class PasswordHasherService {
    hashPassword(password: string): Promise<any>;
    comparePassword(password: string, encryptedpass: string): Promise<boolean>;
}
