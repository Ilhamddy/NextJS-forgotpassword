import { hashPassword } from '@/lib/bcrypt';
import { createUserRepository } from '@/repositories/createUser.repo';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail.repo';
import { IUser } from '@/types/user.type';

export const registerAction = async (data: IUser) => {
  try {
    const { email, password } = data;
    const user = await getUserByEmailRepository(email);
    if (user) throw new Error('email Already exist');

    const hashedPassword = await hashPassword(password);

    data.password = hashedPassword;
    await createUserRepository(data);
    return {
      message: 'register berhasil',
    };
  } catch (error) {
    throw error;
  }
};
