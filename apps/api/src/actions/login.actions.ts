import { excludeFields } from '@/helpers/ExcludeFields';
import { createToken } from '@/helpers/jwt';
import { comparePassword } from '@/lib/bcrypt';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail.repo';
import { IUser } from '@/types/user.type';

export const loginUserAction = async (data: IUser) => {
  try {
    const { email, password } = data;
    const user = await getUserByEmailRepository(email);
    if (!user) throw new Error('Account not found');

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) throw new Error('invalid Password');

    const dataWithoutPassword = excludeFields(user, ['password']);

    const token = createToken({ email: user.email });

    return {
      message: 'login berhasil',
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    throw error;
  }
};
