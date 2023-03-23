// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [

        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/profile',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-typography',
            title: 'Fiche de paie',
            type: 'item',
            url: '/typography',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-color',
            title: 'Missions',
            type: 'item',
            url: '/color',
            icon: icons.BgColorsOutlined
        },
        
        {
            id: 'Consultantprofil',
            title: 'Consultant Profil ',
            type: 'item',
            url: '/Consultantprofil',
            icon: icons.BarcodeOutlined
        },
        
        {
            id: 'util-shadow',
            title: 'Information CV',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        }/*,
        {
            id: 'ant-icons',
            title: 'Ant Icons',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }*/
    ]
};

export default utilities;
