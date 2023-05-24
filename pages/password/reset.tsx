import { useAuth } from '@/hooks/useAuth';
import { IAuthResetPassword } from '@/types/auth';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ResetPassword = () => {
    const router = useRouter();
    const { resetPassword } = useAuth();
    const params: IAuthResetPassword = { password: 'sb123admin', password_confirmation: 'sb123admin' };

    useEffect(() => {
        if (router.isReady && !router.query.token) {
            router.push('/login');
        }
    }, [router]);

    const formHandler = async (values: IAuthResetPassword) => {
        await resetPassword(values);
    };

    return (
        <div className="bg-darkblue min-h-screen">
            <div className="py-6">
                <p className="text-center">Logo</p>
            </div>
            <div className="flex min-h-[calc(100vh-77px)] items-center justify-center p-4">
                <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-[25px]">
                    <h1 className="text-center text-[22px] font-semibold leading-7">Reset password</h1>

                    <Formik initialValues={params} onSubmit={formHandler}>
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label className="form-label">Password</label>
                                    <div>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="form-input"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">Confirm password</label>
                                    <div>
                                        <Field
                                            name="password_confirmation"
                                            type="password"
                                            className="form-input"
                                            placeholder="Confirm password"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button disabled={isSubmitting} type="submit" className="btn mt-6 block w-full">
                                        Reset Password
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-lightblack text-center">
                        <Link
                            href="/login"
                            className="text-darkblue hover:text-primary underline transition-all duration-300"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

ResetPassword.middleware = {
    auth: false,
};

ResetPassword.layout = 'nosidebar';
