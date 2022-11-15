import { useAuth } from '@/hooks/useAuth';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

const ForgotPassword = () => {
    const { forgotPassword } = useAuth();
    const params = { email: 'sbthemes@gmail.com' };

    const formHandler = async (values) => {
        await forgotPassword(values);
    };

    return (
        <div className="bg-darkblue min-h-screen">
            <div className="py-6">
                <p className="text-center">Logo</p>
            </div>
            <div className="flex min-h-[calc(100vh-77px)] items-center justify-center p-4">
                <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-[25px]">
                    <h1 className="text-center text-[22px] font-semibold leading-7">Forgot password</h1>

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
                                    <button disabled={isSubmitting} type="submit" className="btn mt-6 block w-full">
                                        Forgot Password
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

export default ForgotPassword;

ForgotPassword.middleware = {
    auth: false,
};

ForgotPassword.layout = 'nosidebar';
