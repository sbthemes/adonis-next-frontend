import { useAuth } from '@/hooks/useAuth';
import { IAuthLogin } from '@/types/auth';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

const Login = () => {
    const { login } = useAuth();
    const params: IAuthLogin = { email: 'sbthemes@gmail.com', password: 'sb123admin' };

    const formHandler = async (values: IAuthLogin) => {
        await login(values);
    };

    return (
        <div className="bg-darkblue min-h-screen">
            <div className="py-6">
                <p className="text-center">Logo</p>
            </div>
            <div className="flex min-h-[calc(100vh-77px)] items-center justify-center p-4">
                <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-[25px]">
                    <h1 className="text-center text-[22px] font-semibold leading-7">Sign in</h1>

                    <Formik initialValues={params} onSubmit={formHandler}>
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label className="form-label">Email address</label>
                                    <div>
                                        <Field
                                            name="email"
                                            type="text"
                                            className="form-input"
                                            placeholder="Email address..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">Password</label>
                                    <div>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="form-input"
                                            placeholder="Password..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Link
                                        href="/forgot-password"
                                        className="text-darkblue hover:text-primary underline transition-all duration-300"
                                    >
                                        Forgot Password
                                    </Link>
                                </div>
                                <div>
                                    <button disabled={isSubmitting} type="submit" className="btn mt-6 block w-full">
                                        Login
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-lightblack text-center">
                        Not registered?{' '}
                        <Link
                            href="/register"
                            className="text-darkblue hover:text-primary underline transition-all duration-300"
                        >
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

Login.middleware = {
    auth: false,
};

Login.layout = 'nosidebar';
