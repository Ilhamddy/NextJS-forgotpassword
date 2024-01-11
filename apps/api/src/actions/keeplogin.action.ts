import { excludeFields } from '@/helpers/ExcludeFields';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail.repo';
import { IUser } from '@/types/user.type';

export const keepLoginAction = async (email: string) => {
  try {
    const user = await getUserByEmailRepository(email);
    if (!user) throw new Error('Account not found');

    const dataWithoutPassword = excludeFields(user, ['password']);

    return {
      message: 'keep login berhasil',
      data: dataWithoutPassword,
    };
  } catch (error) {
    throw error;
  }
};
