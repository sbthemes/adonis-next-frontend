import Portals from '../Portals';

const NoSidebarLayout = ({ children }) => {
    return (
        <div className="font-SourceSansPro bg-[#F5F7FA] text-base leading-5 text-black antialiased">
            {children}
            <Portals />
        </div>
    );
};

export default NoSidebarLayout;
