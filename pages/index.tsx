import { useAuth } from '@/hooks/useAuth';
import toast from '@/libs/toast';

const Index = () => {
    const { logout } = useAuth();

    return (
        <div className="mx-auto mt-20 max-w-sm space-y-4">
            <button onClick={() => logout()}>Logout</button>
            <button
                type="button"
                className="btn"
                onClick={() => toast.success('Lorem ipsum dolor sit amet, debet altera malorum ex duo.')}
            >
                Success
            </button>
            <button
                type="button"
                className="btn"
                onClick={() => toast.error('Lorem ipsum dolor sit amet, debet altera malorum ex duo.')}
            >
                Error
            </button>

            <div>
                <label className="form-label">Text field</label>
                <div>
                    <input type="text" className="form-input" placeholder="Username" />
                </div>
            </div>
            <div>
                <label className="form-label">Password field</label>
                <div>
                    <input type="password" className="form-input" placeholder="Password" />
                </div>
            </div>
            <div>
                <label className="form-label">Select field</label>
                <div>
                    <select className="form-select">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="form-label">Texrarea field</label>
                <div>
                    <textarea className="form-textarea" placeholder="Submit your message here..."></textarea>
                </div>
            </div>
            <div>
                <label className="form-label">Checkboxes</label>
                <div>
                    <label className="form-label flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
            </div>
            <div>
                <label className="form-label">Radios</label>
                <div>
                    <label className="form-label flex items-center">
                        <div>
                            <input type="radio" className="form-radio" />
                        </div>
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="ml-2">Option 1</span>
                    </label>
                    <label className="form-label flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="ml-2">Option 1</span>
                    </label>
                </div>
            </div>

            <div>
                <label className="form-label">Buttons</label>
                <button type="submit" className="btn">
                    Home
                </button>
            </div>
        </div>
    );
};

export default Index;

Index.middleware = {
    auth: true,
    verify: true,
};
