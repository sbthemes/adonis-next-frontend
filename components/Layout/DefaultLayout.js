import Portals from '../Portals';

const DefaultLayout = ({ children }) => {
    return (
        <>
            {children}
            <Portals />
        </>
    );
};

export default DefaultLayout;
